import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getContactInquiryType, type ContactInquiryTypeKey } from "@/data/contact";

type ContactInquiryPayload = {
  name: string;
  email: string;
  organization?: string;
  role?: string;
  inquiryType: ContactInquiryTypeKey;
  message: string;
  website?: string;
};

type RateBucket = {
  count: number;
  resetAt: number;
};

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const rateStore = new Map<string, RateBucket>();

function getClientIp(req: NextRequest) {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() ?? "unknown";
  return req.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(key: string) {
  const now = Date.now();
  const current = rateStore.get(key);

  if (!current || now > current.resetAt) {
    rateStore.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  if (current.count >= MAX_REQUESTS) {
    return true;
  }

  current.count += 1;
  rateStore.set(key, current);
  return false;
}

function sanitize(value: string | undefined) {
  return (value ?? "").trim();
}

function validatePayload(payload: ContactInquiryPayload) {
  if (!sanitize(payload.name)) return "Name is required.";
  if (!sanitize(payload.email)) return "Email is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return "Email format is invalid.";
  }
  if (!sanitize(payload.message)) return "Message is required.";
  if (!sanitize(payload.inquiryType)) return "Inquiry type is required.";
  return null;
}

async function sendSheetDb(payload: ContactInquiryPayload) {
  const endpoint = process.env.SHEETDB_API_URL;
  if (!endpoint) return false;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      data: {
        timestamp: new Date().toISOString(),
        name: payload.name,
        email: payload.email,
        organization: payload.organization || "",
        role: payload.role || "",
        inquiryType: payload.inquiryType,
        message: payload.message,
      },
    }),
  });

  if (!response.ok) {
    throw new Error("SheetDB request failed.");
  }

  return true;
}

async function sendEmail(payload: ContactInquiryPayload) {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_APP_PASSWORD;
  const toEmail = process.env.CONTACT_NOTIFY_TO;

  if (!smtpHost || !smtpUser || !smtpPass || !toEmail) return false;

  const inquiry = getContactInquiryType(payload.inquiryType);

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const text = [
    "New contact inquiry",
    "",
    `Type: ${inquiry.label}`,
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Organization: ${payload.organization || "Not provided"}`,
    `Role / Title: ${payload.role || "Not provided"}`,
    "",
    "Message:",
    payload.message,
  ].join("\n");

  await transporter.sendMail({
    from: `"Maharishi Leadership Site" <${smtpUser}>`,
    to: toEmail,
    replyTo: payload.email,
    subject: inquiry.subject,
    text,
  });

  return true;
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let payload: ContactInquiryPayload;
  try {
    payload = (await req.json()) as ContactInquiryPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  if (sanitize(payload.website)) {
    return NextResponse.json({ ok: true });
  }

  payload.name = sanitize(payload.name);
  payload.email = sanitize(payload.email);
  payload.organization = sanitize(payload.organization);
  payload.role = sanitize(payload.role);
  payload.message = sanitize(payload.message);

  const validationError = validatePayload(payload);
  if (validationError) {
    return NextResponse.json(
      { ok: false, error: validationError },
      { status: 400 }
    );
  }

  try {
    const sheetDbConfigured = Boolean(process.env.SHEETDB_API_URL);
    const smtpConfigured = Boolean(
      process.env.SMTP_HOST &&
        process.env.SMTP_USER &&
        process.env.SMTP_APP_PASSWORD &&
        process.env.CONTACT_NOTIFY_TO
    );

    if (!sheetDbConfigured && !smtpConfigured) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Contact service is not configured yet. Please set environment variables.",
        },
        { status: 503 }
      );
    }

    const [sheetSaved, emailSent] = await Promise.all([
      sendSheetDb(payload),
      sendEmail(payload),
    ]);

    if (!sheetSaved && !emailSent) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Contact service is not configured correctly. Please check server settings.",
        },
        { status: 503 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Failed to submit inquiry. Please try again." },
      { status: 500 }
    );
  }
}
