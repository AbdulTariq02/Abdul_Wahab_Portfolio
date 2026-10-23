const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONTACT_RECIPIENT = "wahabsurfali@gmail.com";
const MAX_REQUEST_BYTES = 20_000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimit = new Map<string, { count: number; resetAt: number }>();

export const runtime = "nodejs";

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isFormSubmitAccepted(value: unknown) {
  return isPlainObject(value) && (value.success === true || value.success === "true");
}

function getFormSubmitFailureMessage(value: unknown) {
  if (!isPlainObject(value) || typeof value.message !== "string") return null;
  return value.message.slice(0, 500);
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

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const subject = typeof payload.subject === "string" ? payload.subject.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";
  const honeypot = typeof payload.website === "string" ? payload.website.trim() : "";

  if (honeypot) {
    return Response.json({ message: "We could not process this submission. Please check the form and try again." }, { status: 400 });
  }

  if (
    !name ||
    name.length < 2 ||
    name.length > 120 ||
    /[\u0000-\u001f\u007f]/.test(name) ||
    !EMAIL_PATTERN.test(email) ||
    email.length > 254 ||
    /[\u0000-\u001f\u007f]/.test(email) ||
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

  try {
    const origin = request.headers.get("origin");
    const referer = request.headers.get("referer");
    const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_RECIPIENT}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(origin ? { Origin: origin } : {}),
        ...(referer ? { Referer: referer } : {}),
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
        _subject: `Portfolio contact: ${subject}`,
        _replyto: email,
        _template: "table",
        _captcha: "false",
        _honey: "",
      }),
      signal: AbortSignal.timeout(15_000),
    });

    const result: unknown = await response.json().catch(() => null);
    const accepted = isFormSubmitAccepted(result);

    if (!response.ok || !accepted) {
      const providerMessage = getFormSubmitFailureMessage(result);
      console.error("FormSubmit did not accept a contact email:", {
        status: response.status,
        success: isPlainObject(result) ? result.success : undefined,
        message: providerMessage,
      });
      const needsActivation = providerMessage && /activat|confirm|verif/i.test(providerMessage);
      return Response.json(
        {
          message: needsActivation
            ? "Please check your inbox and spam folder for FormSubmit's activation email, then confirm your address and try again."
            : "FormSubmit did not accept the message. Check the FormSubmit activation email for your inbox, or contact me directly by email.",
        },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("FormSubmit contact email request failed:", error instanceof Error ? error.name : "UnknownError");
    return Response.json(
      { message: "Your message could not be sent right now. Please try again shortly or email me directly." },
      { status: 502 },
    );
  }

  return Response.json({ message: "Thanks for reaching out. Your message has been sent." });
}
