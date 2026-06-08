# Antigravity Metaprompt: Wave Solutions Website

You are working in `D:\_devtrue\WaveSolutionsBoiler`, a Next.js App Router website for Wave Solutions LLC.

## Goal

Build and extend a multi-page Wave Solutions LLC website with approved client copy, Wave branding, a clear service-business layout, service growth paths, and a lead form. Keep the project adaptable by editing structured content and shared components instead of hard-coding page copy.

## Source Of Truth

Use these files as the operating container:

- `src/content/site.ts` for live page content, brand tokens, navigation, service cards, CTA copy, and form fields.
- `handoff/implementation-plan.md` for the approved expansion plan, page map, copy rules, and build safety gates.
- `handoff/site-config.container.json` for implementation intent, design reference rules, and integration boundaries.
- `public/images/wave-logo.png` for the active brand logo.

Do not hard-code client-specific content in components unless it is a reusable fallback. Prefer reading from `src/content/site.ts`.

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

The site is implemented in:

- `src/app/page.tsx`
- `src/app/about/page.tsx`
- `src/app/why-wave/page.tsx`
- `src/app/approach/page.tsx`
- `src/app/industries/page.tsx`
- `src/app/services/page.tsx`
- `src/app/services/[slug]/page.tsx`
- `src/app/contact/page.tsx`
- `src/components/site-chrome.tsx`
- `src/components/site-sections.tsx`
- `src/components/wave-texture.tsx`
- `src/components/lead-form.tsx`
- `src/content/site.ts`
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
4. Keep environment variables out of the structured content file.
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
- Navigation includes a services submenu that can grow through `src/content/site.ts`.
- The form is usable and clearly marked as provider-neutral for later wiring.
- The code stays reusable for future expansion by editing `src/content/site.ts`.
