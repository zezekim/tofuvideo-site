"use client";

import { useState } from "react";
import { APP_URL } from "@/lib/site";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-cream-200 bg-cream-50/80 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        {/* Brand lockup */}
        <a href="#" className="flex items-center gap-2.5" aria-label="tofuvideo home">
          <img src="/logo.png" alt="" className="h-9 w-auto" />
          <span className="font-display text-xl font-bold leading-none">
            <span className="text-brown-900">tofu</span>
            <span className="text-coral-500">video</span>
          </span>
        </a>

        {/* Center links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-brown-700 transition hover:text-brown-900"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href={APP_URL}
            className="text-sm font-semibold text-brown-700 transition hover:text-brown-900"
          >
            Sign in
          </a>
          <a
            href={APP_URL}
            className="inline-flex items-center gap-2 rounded-full bg-coral-500 px-5 py-2.5 font-display text-sm font-bold text-white shadow-soft transition hover:bg-coral-600 hover:shadow-lift"
          >
            Start for free
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-brown-800 transition hover:bg-cream-100 md:hidden"
        >
          {open ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-1 border-t border-cream-200 px-6 pb-6 pt-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-brown-700 transition hover:bg-cream-100 hover:text-brown-900"
            >
              {link.label}
            </a>
          ))}
          <a
            href={APP_URL}
            onClick={() => setOpen(false)}
            className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-brown-700 transition hover:bg-cream-100 hover:text-brown-900"
          >
            Sign in
          </a>
          <a
            href={APP_URL}
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-coral-500 px-5 py-2.5 font-display text-sm font-bold text-white shadow-soft transition hover:bg-coral-600 hover:shadow-lift"
          >
            Start for free
          </a>
        </div>
      </div>
    </header>
  );
}
