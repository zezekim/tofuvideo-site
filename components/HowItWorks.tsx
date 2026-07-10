const steps = [
  {
    title: "Type a topic",
    body: "Or paste your own script. Pick format, length, persona, and voice — that’s the whole brief.",
    badge: "bg-coral-500",
    ring: "bg-coral-100 text-coral-600",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="M7 9v6" />
        <path d="M5.5 9h3" />
        <path d="M12 15h6" />
      </svg>
    ),
  },
  {
    title: "AI drafts the story",
    body: "Script plus a scene-by-scene breakdown, each scene tagged for real stock photo or AI art.",
    badge: "bg-amber-400",
    ring: "bg-amber-100 text-amber-500",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M6 3h9l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
        <path d="M15 3v4h4" />
        <path d="M9 12h6" />
        <path d="M9 16h4" />
      </svg>
    ),
  },
  {
    title: "Scenes come alive",
    body: "Visuals, voiceover, timed captions, and ducked music — all rendered in parallel.",
    badge: "bg-tofublue-500",
    ring: "bg-tofublue-100 text-tofublue-600",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M12 3v2.5" />
        <path d="M12 18.5V21" />
        <path d="M3 12h2.5" />
        <path d="M18.5 12H21" />
        <path d="M5.6 5.6l1.8 1.8" />
        <path d="M16.6 16.6l1.8 1.8" />
        <path d="M18.4 5.6l-1.8 1.8" />
        <path d="M7.4 16.6l-1.8 1.8" />
        <circle cx="12" cy="12" r="3.5" />
      </svg>
    ),
  },
  {
    title: "Ship the cut",
    body: "The final MP4 is assembled. Tweak any scene on the timeline and only that scene re-renders.",
    badge: "bg-coral-500",
    ring: "bg-coral-100 text-coral-600",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M12 15V4" />
        <path d="M8 8l4-4 4 4" />
        <path d="M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-coral-600">
            How it works
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-brown-900 sm:text-5xl">
            From topic to upload in four steps
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brown-700">
            You bring one sentence — the pipeline handles the script, scenes, voice, captions, and
            music from there.
          </p>
        </div>

        <div className="relative mt-16">
          {/* dashed connector line, desktop only */}
          <div
            aria-hidden="true"
            className="absolute left-[12%] right-[12%] top-6 hidden border-t-2 border-dashed border-cream-300 md:block"
          />
          <ol className="grid gap-12 md:grid-cols-4 md:gap-8">
            {steps.map((step, i) => (
              <li key={step.title} className="relative flex flex-col items-center text-center">
                <div
                  className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full font-display text-lg font-bold text-white shadow-soft ${step.badge}`}
                >
                  {i + 1}
                </div>
                <div
                  className={`mt-5 flex h-14 w-14 items-center justify-center rounded-2xl ${step.ring}`}
                >
                  {step.icon}
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-brown-900">{step.title}</h3>
                <p className="mt-2 text-sm text-brown-700">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-14 flex justify-center">
          <p className="inline-flex items-center gap-2.5 rounded-full border border-cream-200 bg-white px-5 py-2.5 text-sm text-brown-700 shadow-soft">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4.5 w-4.5 shrink-0 text-tofublue-500"
              aria-hidden="true"
            >
              <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3Z" />
              <path d="M9.5 12l1.8 1.8L15 10" />
            </svg>
            One flaky scene never kills the job — a 20-minute video always finishes.
          </p>
        </div>
      </div>
    </section>
  );
}
