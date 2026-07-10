function Stars() {
  return (
    <div className="flex items-center gap-0.5 text-coral-500" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 2.5l2.94 5.95 6.57.96-4.75 4.63 1.12 6.54L12 17.5l-5.88 3.08 1.12-6.54-4.75-4.63 6.57-.96L12 2.5z" />
        </svg>
      ))}
    </div>
  );
}

type Accent = {
  bg: string;
  text: string;
};

const accents: Accent[] = [
  { bg: "bg-coral-100", text: "text-coral-600" },
  { bg: "bg-amber-100", text: "text-amber-500" },
  { bg: "bg-tofublue-100", text: "text-tofublue-600" },
];

type Testimonial = {
  quote: string;
  name: string;
  initials: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "I paste Monday’s topics into batch mode and by lunch I have three history explainers queued, scripted, and voiced. My channel went from one video a week to three, and my editor now just does thumbnails.",
    name: "Marcus Whitfield",
    initials: "MW",
    role: "History YouTuber · 118k subs",
  },
  {
    quote:
      "We turn every new listing into a 9:16 walkthrough short the same day it hits MLS. Agents used to wait a week for the videographer.",
    name: "Dana Okafor",
    initials: "DO",
    role: "Marketing Lead, Keystone Realty Group",
  },
  {
    quote:
      "The personas are the killer feature for us. Beginner Spanish videos get the Storyteller voice, grammar deep-dives get the Professor. Same pipeline, two totally different shows — and I built a custom persona in about ten minutes.",
    name: "Lucía Ferrán",
    initials: "LF",
    role: "Founder, HablaFácil (language learning)",
  },
  {
    quote:
      "Running the whole thing locally on a Mac mini with zero API spend still feels illegal. Local LLM, local TTS, local image gen — I queue renders overnight and wake up to finished videos. Also the cat mascot lives on my dock now, and I’m not sorry.",
    name: "Priya Raman",
    initials: "PR",
    role: "Indie hacker · builds in public",
  },
  {
    quote:
      "Caption studio alone was worth it. Word-by-word highlight in my brand colors, burned in, no After Effects. My meal-prep shorts finally look like a studio made them.",
    name: "Jess Calloway",
    initials: "JC",
    role: "Nutrition coach · @jessfuelsyou",
  },
  {
    quote:
      "We repurpose every podcast episode into four clips. When a pull quote lands wrong I click that one scene in the timeline, rewrite the narration, and only that scene re-renders. A fix takes forty seconds, not a full re-export.",
    name: "Tom Barajas",
    initials: "TB",
    role: "Producer, The Signal Room podcast",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-cream-100 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-coral-600">
            Loved by creators
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-brown-900 sm:text-5xl">
            The render farm with a heartbeat
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brown-700">
            Real channels, real calendars, real deadlines — here&apos;s how it feels to ship with tofuvideo.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {testimonials.map((t, i) => {
            const accent = accents[i % accents.length];
            return (
              <figure
                key={t.name}
                className="flex flex-col rounded-3xl border border-cream-200 bg-white p-8 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
              >
                <Stars />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-brown-800 sm:text-base">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-cream-200 pt-5">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold ${accent.bg} ${accent.text}`}
                    aria-hidden="true"
                  >
                    {t.initials}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-brown-900">{t.name}</span>
                    <span className="block text-xs text-brown-500">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
