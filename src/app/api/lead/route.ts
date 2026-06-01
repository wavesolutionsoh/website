import { NextResponse } from "next/server";

type LeadPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  business?: unknown;
  message?: unknown;
};

function asText(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
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

  if (!name || !email || !message) {
    return NextResponse.json({ message: "Please include your name, email, and message." }, { status: 400 });
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

  await resend.emails.send({
    from: leadFromEmail,
    to: leadToEmail,
    replyTo: email,
    subject: `New Wave Solutions lead from ${name}`,
    html: `
      <h1>New Wave Solutions website lead</h1>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
      <p><strong>Business:</strong> ${escapeHtml(business || "Not provided")}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
    `,
  });

  return NextResponse.json({ message: "Thanks. Wave will follow up soon.", mode: "sent" });
}
