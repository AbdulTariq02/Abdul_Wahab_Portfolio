import nodemailer from "nodemailer";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONTACT_RECIPIENT = "wahabsurfali@gmail.com";
const MAX_REQUEST_BYTES = 20_000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimit = new Map<string, { count: number; resetAt: number }>();

export const runtime = "nodejs";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isRateLimited(key: string, now: number) {
  rateLimit.forEach((entry, entryKey) => {
    if (entry.resetAt <= now) rateLimit.delete(entryKey);
  });

  const current = rateLimit.get(key);
  if (!current || current.resetAt <= now) {
    if (rateLimit.size >= 5000) {
      const oldestKey = rateLimit.keys().next().value;
      if (oldestKey) rateLimit.delete(oldestKey);
    }
    rateLimit.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) return true;

  current.count += 1;
  return false;
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_REQUEST_BYTES) {
    return Response.json({ message: "Your message is too large. Please shorten it and try again." }, { status: 413 });
  }

  let body: string;
  try {
    body = await request.text();
  } catch {
    return Response.json({ message: "Please submit the form again." }, { status: 400 });
  }

  if (new TextEncoder().encode(body).byteLength > MAX_REQUEST_BYTES) {
    return Response.json({ message: "Your message is too large. Please shorten it and try again." }, { status: 413 });
  }

  let payload: unknown;
  try {
    payload = JSON.parse(body);
  } catch {
    return Response.json({ message: "Please submit the form again." }, { status: 400 });
  }

  if (!isPlainObject(payload)) {
    return Response.json({ message: "Please complete the form and try again." }, { status: 400 });
  }

  const fields = payload;
  const name = typeof fields.name === "string" ? fields.name.trim() : "";
  const email = typeof fields.email === "string" ? fields.email.trim() : "";
  const subject = typeof fields.subject === "string" ? fields.subject.trim() : "";
  const message = typeof fields.message === "string" ? fields.message.trim() : "";
  const honeypot = typeof fields.website === "string" ? fields.website.trim() : "";

  if (honeypot) {
    return Response.json(
      { message: "We could not process this submission. Please check the form and try again." },
      { status: 400 },
    );
  }

  if (
    !name ||
    name.length < 2 ||
    name.length > 120 ||
    /[\u0000-\u001f\u007f]/.test(name) ||
    !EMAIL_PATTERN.test(email) ||
    email.length > 254 ||
    !subject ||
    subject.length < 2 ||
    subject.length > 160 ||
    /[\u0000-\u001f\u007f]/.test(subject) ||
    !message ||
    message.length > 5000
  ) {
    return Response.json(
      { message: "Please check your name, email, subject, and message. Messages must be under 5,000 characters." },
      { status: 400 },
    );
  }

  const forwardedFor = request.headers.get("x-forwarded-for");
  const clientIp = forwardedFor?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
  const now = Date.now();
  if (isRateLimited(clientIp, now)) {
    return Response.json(
      { message: "Too many messages have been submitted. Please wait a few minutes and try again." },
      { status: 429, headers: { "Retry-After": String(RATE_LIMIT_WINDOW_MS / 1000) } },
    );
  }

  const { SMTP_HOST, SMTP_USER, SMTP_PASS } = process.env;
  const port = Number(process.env.SMTP_PORT || 587);
  const recipient = process.env.CONTACT_TO || CONTACT_RECIPIENT;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !recipient || !Number.isInteger(port) || port < 1 || port > 65535) {
    console.error("Contact email is not configured. Set the SMTP and recipient environment variables.");
    return Response.json(
      { message: "Email sending is not configured yet. Please contact me directly by email." },
      { status: 503 },
    );
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br>");

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: {
        name: process.env.CONTACT_FROM_NAME || "Abdul Wahab | Portfolio Contact",
        address: SMTP_USER,
      },
      to: recipient,
      replyTo: { name, address: email },
      subject: `Portfolio contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `<h2>New portfolio message</h2><p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Subject:</strong> ${safeSubject}</p><p><strong>Message:</strong><br>${safeMessage}</p>`,
    });
  } catch (error) {
    console.error("Contact email delivery failed:", error);
    return Response.json(
      { message: "Your message could not be sent right now. Please try again shortly or email me directly." },
      { status: 502 },
    );
  }

  return Response.json({ message: "Thanks for reaching out. Your message has been sent." });
}
