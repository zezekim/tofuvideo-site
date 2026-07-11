"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const items: FaqItem[] = [
  {
    question: "Do I own the videos?",
    answer:
      "Yes, fully. Every export is watermark-free and commercial use is included. Publish, monetize, or hand them to clients; they’re yours.",
  },
  {
    question: "How long does a video take?",
    answer:
      "It depends on length and which providers you use, but scenes render in parallel so it’s minutes, not hours. Single-scene tweaks take seconds because only that scene re-renders — not the whole video.",
  },
  {
    question: "Can I use my own voice or footage?",
    answer:
      "You can upload your own background music today, and the per-scene rewrite lets you re-voice any line with a different AI voice or persona. Custom voice cloning is on the roadmap.",
  },
  {
    question: "What if a scene’s image looks wrong?",
    answer:
      "Click it on the timeline and regenerate just that image — or force AI generation instead of stock photography. The rest of the video is untouched, so a fix takes seconds, not a re-render.",
  },
  {
    question: "Can it run without cloud APIs?",
    answer:
      "Yes. Local mode runs the script, voice, and image steps on your own hardware with zero API spend — paid providers are skipped entirely. Or bring your own keys and pay providers directly, with no markup from us.",
  },
  {
    question: "Which platforms are supported?",
    answer:
      "Export once per format: YouTube 16:9, Shorts/Reels/TikTok 9:16, or square 1:1. Captions, composition, and canvas adapt automatically — one choice drives the whole pipeline.",
  },
  {
    question: "Is there an API?",
    answer:
      "Yes — a full REST API: queue topics, poll render status, fetch the finished MP4. It’s the same API that powers the dashboard, so anything you can click, you can automate.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-5 w-5 shrink-0 text-coral-500 transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center">
          <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-coral-600">
            FAQ
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-brown-900 sm:text-5xl">
            Questions, answered
          </h2>
        </div>

        {/* Accordion */}
        <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-cream-200 bg-white px-8 shadow-soft">
          <div className="divide-y divide-cream-200">
            {items.map((item, i) => {
              const open = openIndex === i;
              return (
                <div key={item.question}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left font-display font-semibold text-brown-900 transition hover:text-coral-600"
                  >
                    <span>{item.question}</span>
                    <ChevronIcon open={open} />
                  </button>
                  <div
                    id={`faq-panel-${i}`}
                    className={`grid transition-all duration-300 ease-in-out ${
                      open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 pr-8 text-sm leading-relaxed text-brown-700 sm:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
