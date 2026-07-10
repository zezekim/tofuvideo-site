import { APP_URL } from "@/lib/site";

export default function FinalCTA() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-coral-500 to-coral-600 px-8 py-16 text-center shadow-lift sm:px-16">
          {/* Decorative glow blobs */}
          <div
            className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-white opacity-20 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-28 -right-16 h-80 w-80 rounded-full bg-amber-400 opacity-20 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative">
            <img
              src="/logo.png"
              alt="tofuvideo mascot — a Siamese cat hugging a tofu block"
              className="mx-auto h-24 w-auto -rotate-3 drop-shadow-lg sm:h-28"
            />

            <h2 className="mt-8 font-display text-4xl font-bold text-white sm:text-5xl">
              Your next video is one topic away
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-lg text-coral-100">
              Type it. tofuvideo scripts, shoots, voices, captions, and cuts it. You take the credit.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={APP_URL}
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-display text-base font-bold text-coral-600 shadow-soft transition hover:bg-cream-50 hover:shadow-lift"
              >
                Start for free
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="M13 6l6 6-6 6" />
                </svg>
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-4 font-display text-base font-bold text-white transition hover:bg-white/10"
              >
                See pricing
              </a>
            </div>

            <p className="mt-6 text-xs text-white/70">
              Free plan · No credit card · Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
