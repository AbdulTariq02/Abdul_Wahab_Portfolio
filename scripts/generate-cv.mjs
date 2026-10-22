import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const width = 595;
const height = 842;
const sidebarWidth = 184;
const sidebarX = 24;
const sidebarContentWidth = sidebarWidth - sidebarX * 2;
const contentX = 214;
const contentWidth = width - contentX - 34;
const commands = [];
const colors = {
  ink: "0.12 0.18 0.25",
  muted: "0.37 0.43 0.49",
  teal: "0.02 0.48 0.43",
  navy: "0.07 0.14 0.20",
  sidebarMuted: "0.77 0.83 0.86",
  white: "1 1 1",
  rule: "0.84 0.88 0.89",
};

function escapePdfText(value) {
  if (/[^\x20-\x7e]/.test(value)) {
    throw new Error(`PDF text must be ASCII: ${value}`);
  }
  return value.replaceAll("\\", "\\\\").replaceAll("(", "\\(").replaceAll(")", "\\)");
}

function text(value, x, top, size = 9, font = 1, color = colors.ink) {
  const y = height - top - size;
  commands.push(
    `BT /F${font} ${size} Tf ${color} rg 1 0 0 1 ${x.toFixed(2)} ${y.toFixed(2)} Tm (${escapePdfText(value)}) Tj ET`,
  );
}

function rect(x, top, rectWidth, rectHeight, color) {
  commands.push(
    `${color} rg ${x} ${height - top - rectHeight} ${rectWidth} ${rectHeight} re f`,
  );
}

function line(x1, top, x2, color = colors.rule, thickness = 0.7) {
  const y = height - top;
  commands.push(
    `${color} RG ${thickness} w ${x1} ${y} m ${x2} ${y} l S`,
  );
}

function estimateWidth(value, size, font) {
  let units = 0;
  for (const character of value) {
    if (character === " ") units += 0.28;
    else if ("ilI.,:;!'|".includes(character)) units += 0.25;
    else if ("MW@%&".includes(character)) units += 0.82;
    else if (/[A-Z]/.test(character)) units += 0.62;
    else if (/[0-9]/.test(character)) units += 0.52;
    else units += 0.5;
  }
  return units * size * (font === 2 ? 1.03 : 1);
}

function wrap(value, maxWidth, size, font = 1) {
  const lines = [];
  let currentLine = "";
  for (const word of value.split(/\s+/)) {
    const candidate = currentLine ? `${currentLine} ${word}` : word;
    if (currentLine && estimateWidth(candidate, size, font) > maxWidth) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = candidate;
    }
  }
  if (currentLine) lines.push(currentLine);
  return lines;
}

function paragraph(
  value,
  x,
  top,
  maxWidth,
  size = 9,
  lineHeight = 12,
  color = colors.muted,
  font = 1,
) {
  const lines = wrap(value, maxWidth, size, font);
  lines.forEach((value, index) => text(value, x, top + index * lineHeight, size, font, color));
  return top + lines.length * lineHeight;
}

function sectionHeading(label, x, top, sectionWidth, color = colors.teal) {
  text(label.toUpperCase(), x, top, 9, 2, color);
  line(x, top + 15, x + sectionWidth, colors.rule);
  return top + 23;
}

function sidebarSection(label, top) {
  return sectionHeading(label, sidebarX, top, sidebarContentWidth, "0.54 0.85 0.77");
}

function sidebarEntry(label, value, top) {
  text(label.toUpperCase(), sidebarX, top, 7.2, 2, "0.54 0.85 0.77");
  return paragraph(value, sidebarX, top + 10, sidebarContentWidth, 8.2, 11, colors.sidebarMuted) + 6;
}

function bullet(value, top) {
  rect(contentX + 1, top + 4, 3, 3, colors.teal);
  return paragraph(value, contentX + 12, top, contentWidth - 12, 9.1, 12) + 3;
}

rect(0, 0, sidebarWidth, height, colors.navy);
rect(0, 0, 5, height, colors.teal);
rect(sidebarWidth, 0, 3, height, "0.88 0.94 0.92");

text("ABDUL WAHAB", sidebarX, 38, 16, 2, colors.white);
text("TARIQ", sidebarX, 59, 16, 2, colors.white);
text("JUNIOR FULL STACK", sidebarX, 91, 8.3, 2, "0.54 0.85 0.77");
text("DEVELOPER", sidebarX, 103, 8.3, 2, "0.54 0.85 0.77");
line(sidebarX, 124, sidebarWidth - sidebarX, "0.28 0.37 0.42");

let sidebarCursor = sidebarSection("Contact", 144);
sidebarCursor = sidebarEntry("Location", "Karachi, Pakistan", sidebarCursor);
sidebarCursor = sidebarEntry("Phone", "+92 309 8434416", sidebarCursor);
sidebarCursor = sidebarEntry("Email", "wahabsurfali@gmail.com", sidebarCursor);
sidebarCursor = sidebarEntry("LinkedIn", "linkedin.com/in/ wahab-tariq-533595297", sidebarCursor);
sidebarCursor = sidebarEntry("GitHub", "github.com/AbdulTariq02", sidebarCursor);

sidebarCursor += 5;
sidebarCursor = sidebarSection("Technical Skills", sidebarCursor);
sidebarCursor = sidebarEntry("Languages & Web", "C#, JavaScript, TypeScript, HTML5, CSS3", sidebarCursor);
sidebarCursor = sidebarEntry("Frontend", "React, Next.js, Angular 12, responsive UI", sidebarCursor);
sidebarCursor = sidebarEntry("Database & Reporting", "SQL Server, DevExpress, Crystal Reports", sidebarCursor);
sidebarCursor = sidebarEntry("Tools", "Git, GitHub, GitLab, Fiddler, Vercel", sidebarCursor);

sidebarCursor += 4;
sidebarCursor = sidebarSection("Education", sidebarCursor);
text("Intermediate (HSSC), Part II", sidebarX, sidebarCursor, 8, 2, colors.white);
sidebarCursor = paragraph(
  "In progress | Islami College, Karachi | First-year result pending",
  sidebarX,
  sidebarCursor + 12,
  sidebarContentWidth,
  7.5,
  10,
  colors.sidebarMuted,
) + 8;
text("Matriculation", sidebarX, sidebarCursor, 8, 2, colors.white);
sidebarCursor = paragraph(
  "Completed 2025",
  sidebarX,
  sidebarCursor + 12,
  sidebarContentWidth,
  7.5,
  10,
  colors.sidebarMuted,
) + 10;

sidebarCursor = sidebarSection("Languages", sidebarCursor);
paragraph("English, Urdu", sidebarX, sidebarCursor, sidebarContentWidth, 8, 10.5, colors.sidebarMuted);

let cursor = 43;
text("CURRICULUM VITAE", contentX, cursor, 8, 2, colors.teal);
cursor += 22;
cursor = sectionHeading("Professional Summary", contentX, cursor, contentWidth);
cursor = paragraph(
  "Junior Full Stack Developer at DigiCop Solutions, contributing to business application development and reporting workflows. Experienced in investigating report issues, writing SQL Server queries, and integrating results into C# applications. Also builds responsive web experiences with React, Next.js, Angular 12, and TypeScript.",
  contentX,
  cursor,
  contentWidth,
  9.4,
  13,
) + 13;

cursor = sectionHeading("Professional Experience", contentX, cursor, contentWidth);
text("Junior Full Stack Developer", contentX, cursor, 10, 2, colors.ink);
text("NOV 2024 - PRESENT", contentX + contentWidth - 104, cursor + 1, 7.2, 2, colors.teal);
cursor += 15;
text("DigiCop Solutions  |  Karachi, Pakistan", contentX, cursor, 8.3, 1, colors.muted);
cursor += 15;

const experienceBullets = [
  "Contribute to day-to-day development tasks and ongoing business application work as part of the team.",
  "Investigate reporting issues, trace query-related problems, and write SQL Server queries to support accurate results.",
  "Integrate SQL query results into C# application workflows for reporting and business features.",
];
for (const item of experienceBullets) {
  cursor = bullet(item, cursor);
}

cursor += 9;
cursor = sectionHeading("Selected Projects", contentX, cursor, contentWidth);
const projects = [
  {
    title: "Weather Forecast App",
    details: "Angular 12 weather app with current conditions and a 7-day forecast.",
    url: "sparkling-boba-7affc1.netlify.app",
  },
  {
    title: "To-Do List Web App",
    details: "Responsive task management app built with React and Next.js.",
    url: "my-app-rho-sepia.vercel.app",
  },
  {
    title: "Wood Gallery Billing System",
    details: "Responsive billing application designed for a small business.",
    url: "wod-gallery-bill-maker.vercel.app",
  },
];
for (const project of projects) {
  text(project.title, contentX, cursor, 8.8, 2, colors.ink);
  cursor += 12;
  cursor = paragraph(project.details, contentX, cursor, contentWidth, 8.5, 11, colors.muted);
  text(project.url, contentX, cursor + 2, 7.8, 1, colors.teal);
  cursor += 21;
}

line(contentX, 798, width - 34, colors.rule);
text("ABDUL WAHAB TARIQ  |  KARACHI, PAKISTAN", contentX, 807, 7, 1, colors.muted);
text("1", width - 40, 807, 7, 1, colors.muted);

if (sidebarCursor > 790 || cursor > 790) {
  throw new Error(`CV content exceeds the page layout (main: ${cursor}pt, sidebar: ${sidebarCursor}pt).`);
}

const stream = `${commands.join("\n")}\n`;
const objects = [
  "<< /Type /Catalog /Pages 2 0 R >>",
  "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
  `<< /Length ${Buffer.byteLength(stream, "ascii")} >>\nstream\n${stream}endstream`,
  "<< /Title (Abdul Wahab Tariq - CV) /Author (Abdul Wahab Tariq) /Subject (Junior Full Stack Developer) /Creator (Portfolio CV generator) >>",
];

let pdf = "%PDF-1.4\n";
const offsets = [0];
objects.forEach((object, index) => {
  offsets.push(Buffer.byteLength(pdf, "ascii"));
  pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
});
const xrefOffset = Buffer.byteLength(pdf, "ascii");
pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
for (const offset of offsets.slice(1)) {
  pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R /Info 7 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

const outputPath = path.resolve("public", "AbdulWahab_Resume.pdf");
await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, pdf, "ascii");
console.log(`Generated ${outputPath} (${Buffer.byteLength(pdf, "ascii")} bytes, 1 page).`);
