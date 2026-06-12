import { NextResponse } from "next/server";

type LeadPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  business?: unknown;
  message?: unknown;
  website?: unknown;
};

const maxLengths = {
  name: 120,
  email: 160,
  phone: 80,
  business: 160,
  message: 3000,
} as const;

function asText(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function isWithinLimit(value: string, limit: number): boolean {
  return value.length <= limit;
}

function isLikelyEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  let payload: LeadPayload;

  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ message: "Invalid form submission." }, { status: 400 });
  }

  const name = asText(payload.name);
  const email = asText(payload.email);
  const phone = asText(payload.phone);
  const business = asText(payload.business);
  const message = asText(payload.message);
  const website = asText(payload.website);

  if (website) {
    return NextResponse.json({ message: "Thanks. WAVE will follow up soon.", mode: "filtered" });
  }

  if (!name || !email || !message) {
    return NextResponse.json({ message: "Please include your name, email, and message." }, { status: 400 });
  }

  if (!isLikelyEmail(email)) {
    return NextResponse.json({ message: "Please include a valid email address." }, { status: 400 });
  }

  if (
    !isWithinLimit(name, maxLengths.name) ||
    !isWithinLimit(email, maxLengths.email) ||
    !isWithinLimit(phone, maxLengths.phone) ||
    !isWithinLimit(business, maxLengths.business) ||
    !isWithinLimit(message, maxLengths.message)
  ) {
    return NextResponse.json({ message: "Please shorten your submission and try again." }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const leadToEmail = process.env.LEAD_TO_EMAIL;
  const leadFromEmail = process.env.LEAD_FROM_EMAIL;

  if (!resendApiKey || !leadToEmail || !leadFromEmail) {
    console.info("Lead form demo submission", { name, email, phone, business, message });
    return NextResponse.json({
      message: "Demo capture confirmed. Email delivery will activate once Resend and DNS are configured.",
      mode: "demo",
    });
  }

  const { Resend } = await import("resend");
  const resend = new Resend(resendApiKey);

  try {
    await resend.emails.send({
      from: leadFromEmail,
      to: leadToEmail,
      replyTo: email,
      subject: `New WAVE Solutions lead from ${name}`,
      html: `
        <h1>New WAVE Solutions website lead</h1>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
        <p><strong>Business:</strong> ${escapeHtml(business || "Not provided")}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
      `,
    });
  } catch (error) {
    console.error("Lead email delivery failed", error);
    return NextResponse.json(
      { message: "The form was received, but email delivery is not configured yet." },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "Thanks. WAVE will follow up soon.", mode: "sent" });
}
