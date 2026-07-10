# tofuvideo — design & content spec

**Read this fully before writing any component.** Every section must feel like it came from one designer.

## What tofuvideo is

tofuvideo is the SaaS face of "VideoEngine": an AI video production platform. A user types a
topic (or pastes a script) and gets a **finished, publish-ready video**: AI writes the script and
scene breakdown, every scene gets a visual (real stock photo or AI-generated image), a natural
voiceover narrates it, captions are timed automatically, background music is ducked under the
narration, and the final MP4 is assembled — YouTube 16:9, TikTok/Shorts 9:16, or square 1:1.

Real product capabilities to draw copy from (do not invent core features):
- **Script & scenes**: AI writes the script and splits it into timed scenes. 10+ narrator
  "personas" shape tone (Doctor, Engineer, Professor, Storyteller, Energetic host, Investigative
  journalist, Motivational coach…) and users can create custom personas — no code.
- **Visuals per scene**: smart choice of real stock photography (for concrete subjects) or
  AI-generated imagery (for abstract ones); AI can even vision-pick the best on-topic photo.
- **Voiceover**: natural AI voices; per-scene voice control.
- **Captions**: TikTok-style burned captions with word-by-word highlight (font, colors, highlight
  style all customizable in a live Caption studio), or classic soft CC + downloadable .srt/.vtt.
- **Timeline editor**: Premiere-style timeline of scene blocks over Voice / Image / Captions
  tracks. Click a scene to regenerate its image, re-record its voice, or rewrite the narration —
  only that scene re-renders, so tweaks take seconds.
- **Batch mode**: paste one topic per line or load a CSV — queue a whole content calendar at once.
- **Background music**: built-in beds or upload your own; auto-ducked under narration
  (sidechain-style), one of the biggest "not-a-raw-AI-video" tells.
- **Formats**: YouTube (16:9), Shorts/Reels/TikTok (9:16), Square (1:1) — one choice drives
  composition, avatar, and canvas through the whole pipeline.
- **Pipeline**: queued → script → scene breakdown → visuals → voiceover → assembly → done.
  A 10-minute video renders in minutes, and one bad scene never kills the whole job.
- **Own your stack**: works with your own API keys, or fully local/offline mode on your own
  hardware (local LLM, local TTS, local image gen) with zero API spend. No lock-in.

## Brand voice

Warm, confident, a little playful — a serious tool that doesn't take itself too seriously.
Short sentences. Concrete benefits over adjectives. At most ONE gentle tofu/cat pun per section
(e.g. "Soft on effort. Sharp on results."). Never cutesy to the point of unprofessional; think
Notion/Linear copy quality with a mascot. The mascot (a Siamese cat hugging a tofu block,
`/logo.png`) appears only where specified.

## Design tokens (already defined in app/globals.css — USE THESE, never raw hex)

Tailwind v4 classes available:
- Creams (backgrounds): `bg-cream-50` (page), `bg-cream-100` (alt sections), `bg-cream-200`
  `border-cream-200` `border-cream-300` (borders)
- Browns (text): `text-brown-900` (headings), `text-brown-800` (body-strong), `text-brown-700`
  (body), `text-brown-500` (muted), `bg-brown-950`/`bg-brown-900` (dark surfaces, footer)
- Coral (primary/brand): `bg-coral-500` `hover:bg-coral-600` `text-coral-500` `text-coral-600`
  `bg-coral-100` `border-coral-200` — CTAs, highlights, eyebrow labels
- Blue (secondary accent, cat's eye): `text-tofublue-500` `bg-tofublue-100` `bg-tofublue-500`
- Amber (tertiary accent, sparkles): `text-amber-400` `bg-amber-100` `bg-amber-400`
- Shadows: `shadow-soft` (cards), `shadow-lift` (hover / hero elements)
- Fonts: `font-display` (Baloo 2 — ALL headings, buttons can use it too), body is Inter by default

## Layout system (match exactly)

- Section wrapper: `<section id="..." className="py-20 sm:py-28">` with inner
  `<div className="mx-auto max-w-6xl px-6">`
- Alternate section backgrounds between `bg-cream-50` (default page bg, no class needed) and
  `bg-cream-100`; special sections may use `bg-brown-950` (dark) — spec says which.
- Section header pattern (centered):
  - Eyebrow: `<p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-coral-600">`
  - H2: `<h2 className="mt-3 font-display text-4xl font-bold text-brown-900 sm:text-5xl">`
  - Lede: `<p className="mx-auto mt-4 max-w-2xl text-lg text-brown-700">`
- Cards: `rounded-3xl border border-cream-200 bg-white p-8 shadow-soft` (hover:
  `transition hover:shadow-lift hover:-translate-y-0.5` where it makes sense)
- Primary button: `inline-flex items-center gap-2 rounded-full bg-coral-500 px-7 py-3.5
  font-display text-base font-bold text-white shadow-soft transition hover:bg-coral-600 hover:shadow-lift`
- Secondary button: same shape but `border border-cream-300 bg-white text-brown-800 hover:border-brown-300 hover:bg-cream-50`
- Pills/badges: `rounded-full bg-coral-100 px-3 py-1 text-xs font-semibold text-coral-700`
  (also amber-100/amber-600 and tofublue-100/tofublue-600 variants for variety)

## Iconography & imagery

- Icons: inline SVG only (no icon libraries). 24×24 viewBox, `fill="none"`,
  `stroke="currentColor"`, `strokeWidth={1.8}`, `strokeLinecap="round"`, `strokeLinejoin="round"`
  — lucide style. Color them via text-* classes.
- The ONLY raster image is `/logo.png` (transparent sticker, 794×805). Use plain `<img>` or
  `next/image` (if next/image: it's `import Image from "next/image"`, width/height required).
- Everything else (dashboard mockups, video frames, avatars) is built from CSS/SVG — no
  placeholder image services, no external URLs.
- Fictional testimonial avatars: colored circles with initials (coral/amber/tofublue tints).

## Component contract

- Every component: TypeScript, **default export**, **no props**, file in `components/`.
- Add `"use client"` ONLY if the component uses state/handlers (accordion, toggle, menu).
- Escape apostrophes in JSX text (`&apos;` or use curly quotes “ ” ’) — `react/no-unescaped-entities` is enforced. NO `any`.
- Anchor ids that must exist (nav links to them): `#features`, `#how-it-works`, `#pricing`, `#faq`.
- App CTAs ("Start for free", "Sign in") link to `APP_URL` from `lib/site.ts`
  (https://app.tofu.video); Studio's "Talk to us" uses `CONTACT_EMAIL`. Secondary CTAs like
  "Watch how it works" link to `#how-it-works`.

## Page order (app/page.tsx assembles these)

1. `Nav` — sticky top
2. `Hero` — includes `DashboardMockup`
3. `TrustBar` — stats strip
4. `Features` — bg-cream-100
5. `HowItWorks` — pipeline
6. `Showcase` — formats + personas, dark section bg-brown-950
7. `Pricing`
8. `Testimonials` — bg-cream-100
9. `FAQ`
10. `FinalCTA`
11. `Footer` — bg-brown-950
