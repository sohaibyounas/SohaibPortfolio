# Sohaib Younas — Portfolio

Frontend engineer portfolio built with **Next.js 14 (App Router)**, **Tailwind CSS**,
**shadcn/ui**-style components, and **Framer Motion** animations.

## Features
- Dark / light theme toggle (`next-themes`), respects system preference
- Scroll-triggered section reveals + hero typing animation
- Smooth scrolling nav with mobile hamburger menu
- Floating "scroll to top" button that appears after scrolling past the navbar
- Fully responsive from mobile to desktop
- Content sourced from the resume: experience, projects, skills, education

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## Free hosting options

| Platform | Notes |
|---|---|
| **Vercel** | Made by the Next.js team — zero-config, auto-deploys on every push, free SSL + custom domain. Best default choice. |
| **Netlify** | Great free tier, auto-deploys from GitHub, easy custom domains. |
| **Cloudflare Pages** | Very fast global CDN, generous free tier. |
| **Render** | Free static/site hosting with auto-deploy from GitHub. |
| **GitHub Pages** | Free, but needs `next export`/static config — a bit more setup for App Router. |

### Deploy on Vercel (recommended)
1. Push the repo to GitHub (steps above).
2. Go to vercel.com → "Add New Project" → import the GitHub repo.
3. Framework preset auto-detects "Next.js" — leave defaults, click **Deploy**.
4. You get a live `*.vercel.app` URL immediately; add a custom domain later if you want.
