# Wave Solutions Website

Next.js/Tailwind website for Wave Solutions LLC. The site includes a home page, About, Why Wave, Approach, Industries, Services, individual service pages, Contact, and a Resend-ready lead form.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Edit Content

Primary content and brand settings live in:

```text
src/content/site.ts
```

The current site reads company details, navigation, approved page copy, services, CTA copy, footer copy, and form fields from that TypeScript content file.

## Handoff

Antigravity-ready handoff files:

```text
handoff/antigravity-metaprompt.md
handoff/site-config.container.json
handoff/implementation-plan.md
```

## Form Integration

The form posts to:

```text
src/app/api/lead/route.ts
```

It is Resend-ready. If these environment variables are missing, it stays in local demo mode and returns a successful demo message:

```text
RESEND_API_KEY=
LEAD_TO_EMAIL=
LEAD_FROM_EMAIL=
```

Recommended launch path:

1. Create a client-owned Resend account.
2. Verify the sending domain in Resend.
3. Add Resend DNS records in GoDaddy.
4. Set the env vars in Vercel.
5. Test the live form.

## Hosting And DNS

Best ownership setup: deploy this project under a client-owned Vercel account or team.

Fast temporary setup: deploy under Tony's Vercel account, point DNS to that project, then transfer ownership later.

Vercel DNS targets commonly needed:

```text
A     @      76.76.21.21
CNAME www    cname.vercel-dns-0.com
```

Keep existing MX records intact if Gmail/GoDaddy handles domain email.
