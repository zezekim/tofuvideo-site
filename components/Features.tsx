import type { ReactNode } from "react";

type Accent = "coral" | "amber" | "tofublue";

const accentTile: Record<Accent, string> = {
  coral: "bg-coral-100 text-coral-600",
  amber: "bg-amber-100 text-amber-500",
  tofublue: "bg-tofublue-100 text-tofublue-500",
};

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "h-5 w-5",
  "aria-hidden": true,
} as const;

function IconTile({ accent, children }: { accent: Accent; children: ReactNode }) {
  return (
    <div
      className={`flex h-10 w-10 items-center justify-center rounded-xl ${accentTile[accent]}`}
    >
      {children}
    </div>
  );
}

const personaPills = [
  { label: "Neutral", className: "bg-cream-100 text-brown-700" },
  { label: "Doctor", className: "bg-tofublue-100 text-tofublue-600" },
  { label: "Engineer", className: "bg-amber-100 text-amber-500" },
  { label: "Storyteller", className: "bg-coral-100 text-coral-700" },
  { label: "Coach", className: "bg-tofublue-100 text-tofublue-600" },
  {
    label: "+ New persona",
    className: "border border-dashed border-cream-300 bg-white text-brown-500",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-cream-100 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="text-center">
          <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-coral-600">
            Everything included
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-brown-900 sm:text-5xl">
            A full video team, in one tab
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brown-700">
            Scriptwriter, editor, voice artist, and motion designer — tofuvideo
            plays every seat, so a topic goes in and a publish-ready video comes
            out.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-6">
          {/* 1 — Scripts with a voice (WIDE) */}
          <div className="rounded-3xl border border-cream-200 bg-white p-8 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift md:col-span-3">
            <IconTile accent="coral">
              {/* pen-line */}
              <svg {...iconProps}>
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
              </svg>
            </IconTile>
            <h3 className="mt-5 font-display text-lg font-bold text-brown-900">
              Scripts with a voice
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-brown-700">
              AI writes the script and the scene beats. Pick from 10+ narrator
              personas — Doctor, Engineer, Storyteller, Energetic host — or
              design your own, no code required.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {personaPills.map((pill) => (
                <span
                  key={pill.label}
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${pill.className}`}
                >
                  {pill.label}
                </span>
              ))}
            </div>
          </div>

          {/* 2 — Scene-perfect visuals (WIDE) */}
          <div className="rounded-3xl border border-cream-200 bg-white p-8 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift md:col-span-3">
            <IconTile accent="amber">
              {/* image */}
              <svg {...iconProps}>
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21" />
              </svg>
            </IconTile>
            <h3 className="mt-5 font-display text-lg font-bold text-brown-900">
              Scene-perfect visuals
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-brown-700">
              Real stock photography for concrete subjects, AI imagery for
              abstract ideas — and the AI vision-picks the best on-topic photo
              for every scene.
            </p>
            <div className="mt-5 flex gap-3">
              <div className="flex flex-1 items-center gap-2 rounded-xl border border-cream-200 bg-cream-50 px-3 py-2.5">
                <div className="h-8 w-12 shrink-0 rounded-md bg-gradient-to-br from-tofublue-100 to-tofublue-500/40" />
                <span className="text-xs font-semibold text-brown-700">
                  📷 Stock
                </span>
              </div>
              <div className="flex flex-1 items-center gap-2 rounded-xl border border-cream-200 bg-cream-50 px-3 py-2.5">
                <div className="h-8 w-12 shrink-0 rounded-md bg-gradient-to-br from-coral-100 via-amber-100 to-coral-400/40" />
                <span className="text-xs font-semibold text-brown-700">
                  ✨ AI
                </span>
              </div>
            </div>
          </div>

          {/* 3 — Natural voiceover */}
          <div className="rounded-3xl border border-cream-200 bg-white p-8 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift md:col-span-2">
            <IconTile accent="tofublue">
              {/* mic */}
              <svg {...iconProps}>
                <rect x="9" y="2" width="6" height="12" rx="3" />
                <path d="M5 10a7 7 0 0 0 14 0" />
                <path d="M12 17v4" />
              </svg>
            </IconTile>
            <h3 className="mt-5 font-display text-lg font-bold text-brown-900">
              Natural voiceover
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-brown-700">
              Lifelike AI narration that doesn&apos;t sound like a GPS. Control
              the voice per scene when one moment needs a different energy.
            </p>
          </div>

          {/* 4 — Captions that pop */}
          <div className="rounded-3xl border border-cream-200 bg-white p-8 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift md:col-span-2">
            <IconTile accent="coral">
              {/* captions */}
              <svg {...iconProps}>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M7 15h4" />
                <path d="M15 15h2" />
                <path d="M7 11h2" />
                <path d="M13 11h4" />
              </svg>
            </IconTile>
            <h3 className="mt-5 font-display text-lg font-bold text-brown-900">
              Captions that pop
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-brown-700">
              TikTok-style word-highlight captions, or classic CC with .srt/.vtt
              downloads. Fonts, colors, and highlight style live in the Caption
              studio.
            </p>
          </div>

          {/* 5 — Click-to-fix timeline */}
          <div className="rounded-3xl border border-cream-200 bg-white p-8 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift md:col-span-2">
            <IconTile accent="amber">
              {/* layout timeline / sliders-horizontal */}
              <svg {...iconProps}>
                <path d="M3 6h8" />
                <path d="M15 6h6" />
                <path d="M3 12h12" />
                <path d="M19 12h2" />
                <path d="M3 18h5" />
                <path d="M12 18h9" />
                <circle cx="13" cy="6" r="1.6" />
                <circle cx="17" cy="12" r="1.6" />
                <circle cx="10" cy="18" r="1.6" />
              </svg>
            </IconTile>
            <h3 className="mt-5 font-display text-lg font-bold text-brown-900">
              Click-to-fix timeline
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-brown-700">
              A Premiere-style timeline of scene blocks. Regenerate one
              scene&apos;s image or voice — only that scene re-renders, so
              tweaks take seconds.
            </p>
          </div>

          {/* 6 — Batch your calendar */}
          <div className="rounded-3xl border border-cream-200 bg-white p-8 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift md:col-span-2">
            <IconTile accent="tofublue">
              {/* calendar */}
              <svg {...iconProps}>
                <rect x="3" y="4" width="18" height="17" rx="2" />
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <path d="M3 9h18" />
                <path d="M8 14h3" />
                <path d="M8 17.5h5" />
              </svg>
            </IconTile>
            <h3 className="mt-5 font-display text-lg font-bold text-brown-900">
              Batch your calendar
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-brown-700">
              Paste one topic per line or load a CSV, and queue a whole month of
              content in one sitting.
            </p>
          </div>

          {/* 7 — Music that ducks */}
          <div className="rounded-3xl border border-cream-200 bg-white p-8 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift md:col-span-2">
            <IconTile accent="coral">
              {/* music */}
              <svg {...iconProps}>
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
            </IconTile>
            <h3 className="mt-5 font-display text-lg font-bold text-brown-900">
              Music that ducks
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-brown-700">
              Built-in beds auto-duck under the narration — the biggest
              &ldquo;this isn&apos;t a raw AI video&rdquo; tell. Or upload your
              own track.
            </p>
          </div>

          {/* 8 — Every format */}
          <div className="rounded-3xl border border-cream-200 bg-white p-8 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift md:col-span-2">
            <IconTile accent="amber">
              {/* monitor-smartphone */}
              <svg {...iconProps}>
                <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" />
                <path d="M10 19v-3.96 3.15" />
                <path d="M7 19h5" />
                <rect x="16" y="12" width="6" height="10" rx="2" />
              </svg>
            </IconTile>
            <h3 className="mt-5 font-display text-lg font-bold text-brown-900">
              Every format
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-brown-700">
              16:9 for YouTube, 9:16 for Shorts, 1:1 for feeds — one choice
              drives composition end-to-end.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
