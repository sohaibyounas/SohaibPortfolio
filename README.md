# Sohaib Younas — Portfolio

Full stack developer portfolio built with **Next.js 16 (App Router)**, **React 19**,
**TypeScript**, **Tailwind CSS v4** and **Framer Motion**, with server-side API routes
for an AI assistant and a contact form.

## Features
- Dark / light theme toggle (`next-themes`), respects system preference
- Scroll-triggered section reveals and animated hero
- Project archive with case-study pages generated from `data/projects.ts`
- In-browser resume viewer (`pdfjs-dist`)
- AI portfolio assistant — `app/api/chat` (Google Gemini, with model fallback)
- Contact form — `app/api/contact` (Zod validation + Resend email)
- Per-IP rate limiting on both API routes
- SEO: metadata, JSON-LD, sitemap and robots

## Environment variables

Create `.env.local`:

```bash
GEMINI_API_KEY=...      # AI assistant
GEMINI_MODEL=...        # optional, overrides the default model
RESEND_API_KEY=...      # contact form email delivery
```

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server (Turbopack) |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |

## Deploy

Deployed on **Vercel**. Import the repo, add the environment variables above under
Project Settings → Environment Variables, and deploy.
