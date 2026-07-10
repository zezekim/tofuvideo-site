import type { ReactNode } from "react";

export default function TrustBar() {
  const stats: {
    number: string;
    label: string;
    accent: string;
    icon: ReactNode;
  }[] = [
    {
      number: "38,000+",
      label: "videos rendered",
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
      number: "1,900+",
      label: "creators & teams",
      accent: "text-amber-400",
      icon: (
        // users
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
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      number: "9.2 min",
      label: "average render",
      accent: "text-tofublue-500",
      icon: (
        // timer / zap-clock
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
          <circle cx="12" cy="13" r="8" />
          <path d="M12 9v4l2.5 2.5" />
          <path d="M10 2h4" />
        </svg>
      ),
    },
    {
      number: "4.8/5",
      label: "creator rating",
      accent: "text-coral-500",
      icon: (
        // star
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
          <path d="M11.5 2.8a.55.55 0 0 1 1 0l2.4 5a.55.55 0 0 0 .4.3l5.5.8a.55.55 0 0 1 .3.94l-4 3.9a.55.55 0 0 0-.15.5l.94 5.45a.55.55 0 0 1-.8.58L12.25 17.7a.55.55 0 0 0-.5 0l-4.9 2.57a.55.55 0 0 1-.8-.58L7 14.24a.55.55 0 0 0-.16-.5l-4-3.9a.55.55 0 0 1 .31-.94l5.5-.8a.55.55 0 0 0 .41-.3z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      aria-label="tofuvideo by the numbers"
      className="border-y border-cream-200 bg-white/60 py-10"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <div className="flex items-center gap-2">
                <span className={stat.accent}>{stat.icon}</span>
                <span className="font-display text-3xl font-bold text-brown-900">
                  {stat.number}
                </span>
              </div>
              <p className="mt-1 text-sm text-brown-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
