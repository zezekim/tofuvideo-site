import { APP_URL } from "@/lib/site";

const personas = [
  { emoji: "🩺", name: "Doctor", vibe: "evidence-based and reassuring" },
  { emoji: "🔧", name: "Engineer", vibe: "first-principles, loves a number" },
  { emoji: "📚", name: "Professor", vibe: "patient, builds ideas step by step" },
  { emoji: "🎙️", name: "Energetic host", vibe: "big hooks, zero dead air" },
  { emoji: "🕵️", name: "Investigative journalist", vibe: "digs in, follows the paper trail" },
  { emoji: "✍️", name: "Storyteller", vibe: "opens with a scene, lands the point" },
];

function CaptionBar({ width }: { width: string }) {
  return <div className={`h-1.5 rounded-full bg-brown-700 ${width}`} />;
}

export default function Showcase() {
  return (
    <section className="bg-brown-950 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-coral-400">
            Made for every feed
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-cream-50 sm:text-5xl">
            One topic. Three formats. Ten voices.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brown-300">
            Pick YouTube, Shorts, or Square and the whole pipeline — framing, avatar, captions —
            adapts to fit.
          </p>
        </div>

        <div className="mt-16 items-center gap-12 lg:grid lg:grid-cols-2">
          {/* Format mock-frames */}
          <div className="flex items-end justify-center gap-3 sm:gap-4">
            {/* 16:9 */}
            <div className="flex flex-col items-center">
              <div className="w-36 overflow-hidden rounded-xl border border-brown-800 bg-gradient-to-b from-brown-900 to-brown-800 sm:w-56">
                <div className="aspect-video p-2.5">
                  <div className="flex h-full flex-col gap-2">
                    <div className="flex-1 rounded-lg bg-gradient-to-br from-tofublue-500/50 via-tofublue-600/30 to-brown-900" />
                    <div className="space-y-1.5 pb-0.5">
                      <CaptionBar width="w-4/5" />
                      <CaptionBar width="w-3/5" />
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-center text-xs text-brown-300">YouTube 16:9</p>
            </div>

            {/* 9:16 */}
            <div className="flex flex-col items-center">
              <div className="w-20 overflow-hidden rounded-xl border border-brown-800 bg-gradient-to-b from-brown-900 to-brown-800 sm:w-28">
                <div className="aspect-[9/16] p-2.5">
                  <div className="flex h-full flex-col gap-2">
                    <div className="flex-1 rounded-lg bg-gradient-to-br from-coral-500/50 via-coral-600/25 to-brown-900" />
                    {/* TikTok-style big captions, one word highlighted */}
                    <div className="space-y-1.5 pb-0.5">
                      <div className="flex items-center gap-1">
                        <span className="h-2.5 w-7 rounded-sm bg-cream-50/85" />
                        <span className="h-2.5 w-9 rounded-sm bg-coral-500" />
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="h-2.5 w-10 rounded-sm bg-cream-50/85" />
                        <span className="h-2.5 w-5 rounded-sm bg-cream-50/85" />
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="h-2.5 w-6 rounded-sm bg-cream-50/85" />
                        <span className="h-2.5 w-8 rounded-sm bg-cream-50/85" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-center text-xs text-brown-300">Shorts 9:16</p>
            </div>

            {/* 1:1 */}
            <div className="flex flex-col items-center">
              <div className="w-24 overflow-hidden rounded-xl border border-brown-800 bg-gradient-to-b from-brown-900 to-brown-800 sm:w-32">
                <div className="aspect-square p-2.5">
                  <div className="flex h-full flex-col gap-2">
                    <div className="flex-1 rounded-lg bg-gradient-to-br from-amber-400/50 via-amber-500/25 to-brown-900" />
                    <div className="space-y-1.5 pb-0.5">
                      <CaptionBar width="w-4/5" />
                      <CaptionBar width="w-1/2" />
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-center text-xs text-brown-300">Square 1:1</p>
            </div>
          </div>

          {/* Narrator personas */}
          <div className="mt-14 lg:mt-0">
            <div className="rounded-3xl border border-brown-800 bg-brown-900 p-8">
              <h3 className="font-display text-xl font-bold text-cream-50">Narrator personas</h3>
              <p className="mt-1 text-sm text-brown-300">
                The same script, told the way your audience listens.
              </p>
              <ul className="mt-6 space-y-4">
                {personas.map((p) => (
                  <li key={p.name} className="flex items-center gap-3 text-sm">
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brown-950 text-base"
                      aria-hidden="true"
                    >
                      {p.emoji}
                    </span>
                    <p>
                      <span className="font-semibold text-cream-100">{p.name}</span>
                      <span className="text-brown-300"> — {p.vibe}</span>
                    </p>
                  </li>
                ))}
                <li>
                  <a
                    href={APP_URL}
                    className="flex items-center gap-3 rounded-2xl border border-dashed border-brown-800 px-3 py-2.5 text-sm font-semibold text-coral-400 transition hover:border-coral-400"
                  >
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brown-950"
                      aria-hidden="true"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.8}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4.5 w-4.5"
                      >
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                    Create your own — describe the voice, no code
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
