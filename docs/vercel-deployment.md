# Vercel Deployment

## Project settings

- Team: `lilly-hedrich-s-projects`
- Project: `website`
- Repository: `wavesolutionsoh/website`
- Production branch: `main`
- Framework preset: `Next.js`
- Root directory: `./`
- Node.js version: `22.x`
- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: leave unset so Vercel uses the Next.js default

## Environment variables

Add each variable to Production, Preview, and Development:

- `RESEND_API_KEY`: the private Resend API key
- `LEAD_TO_EMAIL`: `info@wave-solutions.co`
- `LEAD_FROM_EMAIL`: `lilly@wave-solutions.co`

Do not commit `RESEND_API_KEY` or `.env.local`.

## CLI deployment

Authenticate with an account that can access Lilly Hedrich's Vercel team, then run from this repository:

```powershell
npx vercel login
npx vercel link --yes --project website --scope lilly-hedrich-s-projects
npx vercel pull --yes --environment=production
npx vercel build --prod
npx vercel deploy --prebuilt --prod
```

The local `.vercel/project.json` must identify project `website` before running the production deployment.
