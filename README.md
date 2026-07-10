# tofuvideo — marketing site

Marketing / landing site for **tofuvideo** (the SaaS face of VideoEngine): an AI video
production platform that turns a topic into a finished, publish-ready video — script, visuals,
voiceover, captions, music, and the final cut.

Built with **Next.js 15 (App Router) · React 19 · Tailwind CSS v4 · TypeScript**.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Structure

- `app/` — root layout (fonts, metadata, favicon) and the single landing page
- `components/` — one file per landing-page section (Nav, Hero, Features, Pricing, FAQ, …)
- `app/globals.css` — Tailwind v4 theme: the tofuvideo palette (cream / brown / coral / blue / amber) pulled from the mascot logo
- `public/logo.png` — the tofuvideo mascot (transparent sticker)
- `DESIGN.md` — the design & content spec the site is built against
