# Antigravity Metaprompt: Wave Solutions Boiler

You are working in `D:\_devtrue\WaveSolutionsBoiler`, a reusable Next.js App Router boiler for simple service-business websites.

## Goal

Build and extend a clean one-page splash site for Wave Solutions LLC. The first deliverable is a conference-ready landing page with Wave branding, a clear service-business layout, and a lead form. The project must remain adaptable so future clients can be created by swapping a JSON config and brand assets instead of rewriting the page.

## Source Of Truth

Use these files as the operating container:

- `src/content/site-config.json` for live page content, brand tokens, navigation, service cards, CTA copy, and form fields.
- `handoff/site-config.container.json` for implementation intent, design reference rules, and integration boundaries.
- `public/images/wave-logo.png` for the active brand logo.

Do not hard-code client-specific content in components unless it is a reusable fallback. Prefer reading from `src/content/site-config.json`.

## Visual Direction

Use `https://seekcomfortsolutions.com` only as a visual reference for ratios, spacing, and UX structure. The target should feel like a polished WordPress service-business site:

- White header with logo, simple navigation, and an orange CTA.
- Dark navy hero with large bold headline, high contrast, and clear calls to action.
- Three service cards overlapping the hero area.
- Wide vertical padding and simple section hierarchy.
- Soft off-white content sections.
- Dark footer with contact information.
- Strong background contrast. Avoid pale text on pale backgrounds.

Replace Seek Comfort colors with Wave’s brand:

- Primary blue: `#0077C8`
- Accent orange: `#F58220`
- Deep navy: `#062A60`
- Soft background: `#F5F7FB`
- Body text: `#102033`
- Font: Montserrat

Do not clone Seek Comfort’s content, logo, HVAC-specific framing, or exact layout. Use it as a proportion and UX reference only.

## Current Implementation

The page is implemented in:

- `src/app/page.tsx`
- `src/components/lead-form.tsx`
- `src/content/site-config.json`
- `src/app/globals.css`

The form posts to `src/app/api/lead/route.ts`. It is wired for Resend when these env vars are configured:

- `RESEND_API_KEY`
- `LEAD_TO_EMAIL`
- `LEAD_FROM_EMAIL`

If the env vars are missing, the route returns a local demo-mode success message so the preview remains usable before launch.

## Future Booking / Email Integration

When asked to extend or replace the form provider:

1. Keep submission server-side through a route handler or server action.
2. Initialize third-party SDKs lazily inside the request flow, never as required launch-time globals.
3. Keep provider secrets in environment variables.
4. Keep environment variables out of the JSON config.
5. Preserve the same front-end fields unless the new provider requires a small mapping layer.

Possible providers: Resend, Formspree, HubSpot, Zoho CRM, Calendly, Cal.com, or a custom webhook.

## Hosting / DNS

Preferred ownership: deploy under a client-owned Vercel account or team and use a client-owned Resend account.

Temporary fast path: deploy under Tony's Vercel account, point DNS to the deployment, then transfer the project later.

Common Vercel DNS records:

- Apex/root domain: `A @ 76.76.21.21`
- `www`: `CNAME www cname.vercel-dns-0.com`

Do not remove existing MX records if Gmail/GoDaddy is handling domain email.

## Acceptance Criteria

- `npm run build` passes.
- Local preview renders without runtime errors.
- Desktop and mobile screenshots are visually clean.
- The first viewport shows Wave branding, a clear headline, CTA, and the beginning of the next section.
- The form is usable and clearly marked as provider-neutral for later wiring.
- The code stays reusable for future simple sites by editing `src/content/site-config.json`.
