"use client";

import { useState } from "react";
import { APP_URL, CONTACT_EMAIL } from "@/lib/site";

type Billing = "monthly" | "yearly";

function CheckIcon({ className = "text-coral-500" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`mt-0.5 h-4 w-4 shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

interface Tier {
  name: string;
  monthly: number;
  yearly: number;
  description: string;
  features: string[];
  cta: string;
  href: string;
  popular: boolean;
}

const tiers: Tier[] = [
  {
    name: "Tofu",
    monthly: 0,
    yearly: 0,
    description: "For trying the whole pipeline.",
    features: [
      "3 videos/month",
      "720p export",
      "All formats — 16:9, 9:16, square",
      "Standard voices",
      "TikTok & CC captions",
      "Community support",
    ],
    cta: "Start for free",
    href: APP_URL,
    popular: false,
  },
  {
    name: "Creator",
    monthly: 29,
    yearly: 24,
    description: "For channels shipping weekly.",
    features: [
      "30 videos/month",
      "1080p export",
      "Premium voices",
      "Custom personas",
      "Timeline editor",
      "Batch mode + CSV",
      "Music library",
      "Priority rendering",
    ],
    cta: "Start for free",
    href: APP_URL,
    popular: true,
  },
  {
    name: "Studio",
    monthly: 99,
    yearly: 82,
    description: "For teams & agencies.",
    features: [
      "Unlimited videos",
      "4K export",
      "Bring your own API keys",
      "Fully local/offline mode",
      "5 seats",
      "API access",
      "Dedicated support",
    ],
    cta: "Talk to us",
    href: `mailto:${CONTACT_EMAIL}`,
    popular: false,
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState<Billing>("monthly");
  const yearly = billing === "yearly";

  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center">
          <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-coral-600">
            Pricing
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-brown-900 sm:text-5xl">
            Start free. Scale when it sticks.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brown-700">
            Every plan exports watermark-free video you own outright.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="mt-10 flex justify-center">
          <div
            role="group"
            aria-label="Billing period"
            className="inline-flex items-center gap-1 rounded-full border border-cream-300 bg-white p-1.5 shadow-soft"
          >
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              aria-pressed={!yearly}
              className={`rounded-full px-5 py-2 font-display text-sm font-bold transition ${
                !yearly
                  ? "bg-brown-900 text-cream-50 shadow-soft"
                  : "text-brown-700 hover:text-brown-900"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBilling("yearly")}
              aria-pressed={yearly}
              className={`flex items-center gap-2 rounded-full px-5 py-2 font-display text-sm font-bold transition ${
                yearly
                  ? "bg-brown-900 text-cream-50 shadow-soft"
                  : "text-brown-700 hover:text-brown-900"
              }`}
            >
              Yearly
              <span
                className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                  yearly
                    ? "bg-amber-400 text-brown-900"
                    : "bg-amber-100 text-amber-500"
                }`}
              >
                2 months free
              </span>
            </button>
          </div>
        </div>

        {/* Tier cards */}
        <div className="mx-auto mt-12 grid max-w-5xl items-stretch gap-6 md:grid-cols-3">
          {tiers.map((tier) => {
            const price = yearly ? tier.yearly : tier.monthly;
            return (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-3xl border bg-white p-8 shadow-soft transition ${
                  tier.popular
                    ? "border-transparent ring-2 ring-coral-500 md:-translate-y-2 md:scale-[1.02] shadow-lift"
                    : "border-cream-200 hover:shadow-lift hover:-translate-y-0.5"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-coral-500 px-4 py-1 font-display text-xs font-bold uppercase tracking-wider text-white shadow-soft">
                    Most popular
                  </span>
                )}

                <h3 className="font-display text-xl font-bold text-brown-900">
                  {tier.name}
                </h3>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-bold text-brown-900">
                    ${price}
                  </span>
                  <span className="text-brown-500">/mo</span>
                </div>
                <p className="mt-1 h-5 text-xs text-brown-500">
                  {tier.monthly > 0
                    ? yearly
                      ? `$${tier.monthly * 10} billed yearly`
                      : "billed monthly"
                    : "free forever"}
                </p>

                <p className="mt-3 text-sm text-brown-700">{tier.description}</p>

                <a
                  href={tier.href}
                  className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-display text-base font-bold shadow-soft transition ${
                    tier.popular
                      ? "bg-coral-500 text-white hover:bg-coral-600 hover:shadow-lift"
                      : "border border-cream-300 bg-white text-brown-800 hover:border-brown-300 hover:bg-cream-50"
                  }`}
                >
                  {tier.cta}
                </a>

                <ul className="mt-7 flex flex-col gap-3 border-t border-cream-200 pt-6">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-brown-700"
                    >
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-brown-500">
          Prices in USD. Self-hosting the open pipeline? Local mode has no
          per-video cost — you pay only your own compute.
        </p>
      </div>
    </section>
  );
}
