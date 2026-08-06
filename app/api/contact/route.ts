import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { siteConfig } from "../../site-content";

type ContactPayload = {
  fullName: string;
  email: string;
  company: string;
  budget: string;
  projectType: string;
  details: string;
};

type ContactInquiry = ContactPayload & {
  id: string;
  reference: string;
  submittedAt: string;
  notification: InquiryNotification;
};

const storageDirectory = path.join(process.cwd(), "data");
const storagePath = path.join(storageDirectory, "contact-submissions.json");
const resendEndpoint = "https://api.resend.com/emails";
const inquiryUserAgent = "creative-softwares-contact/1.0";

type InquiryNotification = {
  provider: "resend" | "none";
  status: "pending" | "skipped" | "sent" | "failed";
  updatedAt: string;
  emailId?: string;
  reason?: string;
};

function sanitizeValue(value: unknown, maxLength: number) {
  return typeof value === "string"
    ? value.replace(/\r\n/g, "\n").trim().slice(0, maxLength)
    : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function createReference(id: string) {
  return `CS-${id.replace(/-/g, "").slice(0, 8).toUpperCase()}`;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatField(value: string) {
  return value || "Not provided";
}

function formatSubmittedAt(value: string) {
  try {
    return new Intl.DateTimeFormat("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "Asia/Kolkata",
    }).format(new Date(value));
  } catch {
    return value;
  }
}

function buildInquiryEmailText(inquiry: ContactInquiry) {
  return [
    `New contact inquiry received from ${siteConfig.name}.`,
    "",
    `Reference: ${inquiry.reference}`,
    `Submitted: ${formatSubmittedAt(inquiry.submittedAt)}`,
    `Name: ${inquiry.fullName}`,
    `Email: ${inquiry.email}`,
    `Company: ${formatField(inquiry.company)}`,
    `Budget: ${formatField(inquiry.budget)}`,
    `Project Type: ${formatField(inquiry.projectType)}`,
    "",
    "Project Details:",
    inquiry.details,
  ].join("\n");
}

function buildInquiryEmailHtml(inquiry: ContactInquiry) {
  const rows = [
    ["Reference", inquiry.reference],
    ["Submitted", formatSubmittedAt(inquiry.submittedAt)],
    ["Name", inquiry.fullName],
    ["Email", inquiry.email],
    ["Company", formatField(inquiry.company)],
    ["Budget", formatField(inquiry.budget)],
    ["Project Type", formatField(inquiry.projectType)],
  ];

  const metadata = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:10px 14px;font-weight:700;color:#4c6687;border-bottom:1px solid #ead9cb;">${escapeHtml(
          label
        )}</td><td style="padding:10px 14px;color:#2d1810;border-bottom:1px solid #ead9cb;">${escapeHtml(
          value
        )}</td></tr>`
    )
    .join("");

  return `
    <div style="background:#fff8f3;padding:28px;font-family:Segoe UI,Arial,sans-serif;color:#2d1810;">
      <div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #ead9cb;border-radius:22px;overflow:hidden;">
        <div style="padding:24px 28px;background:linear-gradient(135deg,#6f4330 0%,#b08968 100%);color:#fff8f3;">
          <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.24em;text-transform:uppercase;opacity:0.82;">New Website Inquiry</p>
          <h1 style="margin:0;font-size:28px;line-height:1.2;">${escapeHtml(
            inquiry.fullName
          )}</h1>
        </div>
        <div style="padding:24px 28px;">
          <table style="width:100%;border-collapse:collapse;background:#fffaf6;border:1px solid #ead9cb;border-radius:18px;overflow:hidden;">
            <tbody>${metadata}</tbody>
          </table>
          <div style="margin-top:22px;padding:20px 22px;border-radius:18px;background:#fffaf6;border:1px solid #ead9cb;">
            <p style="margin:0 0 12px;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;font-weight:700;color:#a87552;">Project Details</p>
            <p style="margin:0;white-space:pre-wrap;line-height:1.7;color:#2d1810;">${escapeHtml(
              inquiry.details
            )}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

async function readExistingSubmissions() {
  try {
    const file = await readFile(storagePath, "utf8");
    const parsed = JSON.parse(file);

    return Array.isArray(parsed) ? (parsed as ContactInquiry[]) : [];
  } catch {
    return [] as ContactInquiry[];
  }
}

async function writeSubmissions(submissions: ContactInquiry[]) {
  await mkdir(storageDirectory, { recursive: true });
  await writeFile(storagePath, JSON.stringify(submissions, null, 2), "utf8");
}

async function saveInquiry(inquiry: ContactInquiry) {
  const submissions = await readExistingSubmissions();
  submissions.push(inquiry);
  await writeSubmissions(submissions);
}

async function updateInquiry(inquiry: ContactInquiry) {
  const submissions = await readExistingSubmissions();
  const nextSubmissions = submissions.map((entry) =>
    entry.id === inquiry.id ? inquiry : entry
  );
  await writeSubmissions(nextSubmissions);
}

async function parseResponseBody(response: Response) {
  const text = await response.text();

  if (!text) {
    return null;
  }

  try {
    return JSON.parse(text) as Record<string, unknown>;
  } catch {
    return { message: text };
  }
}

function getErrorMessage(
  body: Record<string, unknown> | null,
  fallback: string
) {
  if (body && typeof body.message === "string") {
    return body.message;
  }

  if (body && typeof body.error === "string") {
    return body.error;
  }

  if (body && typeof body.name === "string") {
    return body.name;
  }

  return fallback;
}

async function sendInquiryNotification(
  inquiry: ContactInquiry
): Promise<InquiryNotification> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim();
  const toEmail = process.env.CONTACT_TO_EMAIL?.trim() || siteConfig.email;

  if (!apiKey || !fromEmail) {
    return {
      provider: "none",
      status: "skipped",
      updatedAt: new Date().toISOString(),
      reason: "Email delivery is not configured yet.",
    };
  }

  try {
    const response = await fetch(resendEndpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "User-Agent": inquiryUserAgent,
        "Idempotency-Key": inquiry.id,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject: `New project inquiry ${inquiry.reference}`,
        html: buildInquiryEmailHtml(inquiry),
        text: buildInquiryEmailText(inquiry),
        headers: {
          "X-Contact-Inquiry-Reference": inquiry.reference,
        },
        tags: [
          { name: "source", value: "website-contact" },
          { name: "reference", value: inquiry.reference },
        ],
      }),
    });

    const body = await parseResponseBody(response);

    if (!response.ok) {
      return {
        provider: "resend",
        status: "failed",
        updatedAt: new Date().toISOString(),
        reason: getErrorMessage(
          body,
          "Unable to deliver the inquiry email notification."
        ),
      };
    }

    return {
      provider: "resend",
      status: "sent",
      updatedAt: new Date().toISOString(),
      emailId: typeof body?.id === "string" ? body.id : undefined,
    };
  } catch (error) {
    return {
      provider: "resend",
      status: "failed",
      updatedAt: new Date().toISOString(),
      reason:
        error instanceof Error
          ? error.message
          : "Unable to deliver the inquiry email notification.",
    };
  }
}

export const runtime = "nodejs";

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json(
      { message: "Invalid form submission. Please try again." },
      { status: 400 }
    );
  }

  const fullName = sanitizeValue(payload.fullName, 80);
  const email = sanitizeValue(payload.email, 160);
  const company = sanitizeValue(payload.company, 120);
  const budget = sanitizeValue(payload.budget, 60);
  const projectType = sanitizeValue(payload.projectType, 80);
  const details = sanitizeValue(payload.details, 3000);

  if (!fullName || !email || !details) {
    return Response.json(
      { message: "Please fill in your name, email, and project details." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return Response.json(
      { message: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const id = crypto.randomUUID();
  const inquiry: ContactInquiry = {
    id,
    reference: createReference(id),
    submittedAt: new Date().toISOString(),
    fullName,
    email,
    company,
    budget,
    projectType,
    details,
    notification: {
      provider: "none",
      status: "pending",
      updatedAt: new Date().toISOString(),
    },
  };

  try {
    // Save first so the inquiry is retained even if email delivery fails.
    await saveInquiry(inquiry);
  } catch {
    return Response.json(
      { message: "Unable to save your inquiry right now. Please try again." },
      { status: 500 }
    );
  }

  const notification = await sendInquiryNotification(inquiry);
  const finalInquiry = { ...inquiry, notification };

  try {
    await updateInquiry(finalInquiry);
  } catch (error) {
    console.error("Unable to update inquiry notification status", error);
  }

  if (notification.status === "failed") {
    console.error(
      `Inquiry ${inquiry.reference} saved but email notification failed: ${notification.reason}`
    );
  }

  const responseMessage =
    notification.status === "sent"
      ? "Your inquiry has been sent successfully. We'll get back to you soon."
      : notification.status === "failed"
        ? "Your inquiry was saved, but email delivery failed right now. Please also contact us directly at creativesoftwares96@gmail.com."
        : "Your inquiry was saved successfully. Inbox email is not configured yet, so no Gmail notification was sent.";

  return Response.json(
    {
      message: responseMessage,
      reference: inquiry.reference,
      deliveryStatus: notification.status,
      deliveryReason: notification.reason ?? null,
    },
    { status: 201 }
  );
}
