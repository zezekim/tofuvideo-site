import Image from "next/image";
import DashboardMockup from "./DashboardMockup";
import { APP_URL } from "@/lib/site";

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5 text-coral-500"
      aria-hidden="true"
    >
      <path d="M21.8 10.1A10 10 0 1 1 17 3.3" />
      <path d="M9 11l3 3L22 4" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24">
      {/* Decorative glow blobs */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 -z-10 h-[28rem] w-[28rem] rounded-full bg-coral-400 opacity-15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-32 right-40 -z-10 h-64 w-64 rounded-full bg-amber-400 opacity-15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-24 -z-10 h-[26rem] w-[26rem] rounded-full bg-amber-400 opacity-15 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-12">
          {/* Left: copy */}
          <div className="min-w-0">
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-cream-200 bg-white px-4 py-1.5 text-xs font-semibold text-brown-700 shadow-soft transition hover:border-cream-300"
            >
              <span aria-hidden="true">🧈</span>
              New — Caption studio with live preview
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3 w-3 text-coral-500"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>

            <h1 className="mt-6 font-display text-4xl leading-[1.05] font-bold text-brown-900 sm:text-6xl lg:text-[4rem]">
              Turn any topic into a{" "}
              <span className="relative inline-block text-coral-500">
                finished video
                <svg
                  viewBox="0 0 220 14"
                  fill="none"
                  className="absolute -bottom-2 left-0 h-3 w-full text-amber-400"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 10.5C40 4 78 3 110 5.5c36 2.8 72 3.5 107-1.5"
                    stroke="currentColor"
                    strokeWidth={5}
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-brown-700 sm:text-xl">
              tofuvideo writes the script, generates the visuals, records the
              voiceover, times the captions, and edits the final cut. You pick
              the topic.{" "}
              <span className="font-semibold text-brown-800">
                Soft on effort. Sharp on results.
              </span>
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={APP_URL}
                className="inline-flex items-center gap-2 rounded-full bg-coral-500 px-7 py-3.5 font-display text-base font-bold text-white shadow-soft transition hover:bg-coral-600 hover:shadow-lift"
              >
                Start for free
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-full border border-cream-300 bg-white px-7 py-3.5 font-display text-base font-bold text-brown-800 shadow-soft transition hover:border-brown-300 hover:bg-cream-50 hover:shadow-lift"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-coral-500"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M10 8.5v7l5.5-3.5Z" />
                </svg>
                Watch how it works
              </a>
            </div>

            <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-brown-500">
              <li className="inline-flex items-center gap-1.5">
                <CheckIcon />
                Early access
              </li>
              <li className="inline-flex items-center gap-1.5">
                <CheckIcon />
                Free to try
              </li>
              <li className="inline-flex items-center gap-1.5">
                <CheckIcon />
                Runs on your own keys or fully local
              </li>
            </ul>
          </div>

          {/* Right: mascot + mockup */}
          <div className="relative mt-6 min-w-0 lg:mt-0">
            <Image
              src="/logo.png"
              alt="tofuvideo mascot — a Siamese cat hugging a tofu block"
              width={794}
              height={805}
              priority
              className="absolute -top-14 -right-2 z-10 h-28 w-auto -rotate-6 drop-shadow-lg sm:-top-20 sm:right-2 sm:h-36"
            />
            <div className="rotate-1 transition duration-300 hover:rotate-0">
              <DashboardMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
