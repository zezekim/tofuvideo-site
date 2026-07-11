import type { ReactNode } from "react";

/** Honest capability strip — product facts, not usage claims. */
export default function TrustBar() {
  const facts: {
    headline: string;
    label: string;
    accent: string;
    icon: ReactNode;
  }[] = [
    {
      headline: "Topic → MP4",
      label: "the whole pipeline, end to end",
      accent: "text-coral-500",
      icon: (
        // clapperboard
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path d="M20.2 6 3 11l-.9-2.4a2 2 0 0 1 1.3-2.5l13.5-4a2 2 0 0 1 2.5 1.3z" />
          <path d="m6.2 5.3 3.1 3.9" />
          <path d="m12.4 3.4 3.1 4" />
          <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        </svg>
      ),
    },
    {
      headline: "3 formats",
      label: "16:9 · 9:16 · 1:1 from one choice",
      accent: "text-amber-400",
      icon: (
        // frames
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <rect x="3" y="5" width="12" height="9" rx="2" />
          <rect x="17" y="5" width="4" height="14" rx="1.5" />
          <rect x="3" y="16" width="8" height="3" rx="1.5" />
        </svg>
      ),
    },
    {
      headline: "$0 mode",
      label: "runs fully local on your hardware",
      accent: "text-tofublue-500",
      icon: (
        // cpu
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <rect x="5" y="5" width="14" height="14" rx="2" />
          <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
          <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
        </svg>
      ),
    },
    {
      headline: "10+ personas",
      label: "narrators with a point of view",
      accent: "text-coral-500",
      icon: (
        // mic
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <rect x="9" y="2" width="6" height="12" rx="3" />
          <path d="M5 10a7 7 0 0 0 14 0" />
          <path d="M12 17v4" />
          <path d="M8 21h8" />
        </svg>
      ),
    },
  ];

  return (
    <section
      aria-label="What tofuvideo does"
      className="border-y border-cream-200 bg-white/60 py-10"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="flex flex-col items-center text-center">
              <div className="flex items-center gap-2">
                <span className={fact.accent}>{fact.icon}</span>
                <span className="font-display text-2xl font-bold text-brown-900 sm:text-3xl">
                  {fact.headline}
                </span>
              </div>
              <p className="mt-1 text-sm text-brown-500">{fact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
