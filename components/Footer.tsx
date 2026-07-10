const columns = [
  {
    heading: "Product",
    links: ["Features", "How it works", "Pricing", "Changelog"],
    hrefs: ["#features", "#how-it-works", "#pricing", "#"],
  },
  {
    heading: "Resources",
    links: ["Docs", "API", "Caption studio", "Status"],
    hrefs: ["#", "#", "#", "#"],
  },
  {
    heading: "Company",
    links: ["About", "Blog", "Careers", "Contact"],
    hrefs: ["#", "#", "#", "#"],
  },
  {
    heading: "Legal",
    links: ["Privacy", "Terms"],
    hrefs: ["#", "#"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-brown-950 text-cream-100">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          {/* Brand */}
          <div>
            <a href="#" className="inline-flex items-center gap-3" aria-label="tofuvideo home">
              <img src="/logo.png" alt="" className="h-10 w-auto" />
              <span className="font-display text-2xl font-bold leading-none">
                <span className="text-cream-100">tofu</span>
                <span className="text-coral-400">video</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brown-300">
              The video team that fits in a tofu box.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.heading}>
                <h3 className="font-display text-sm font-bold uppercase tracking-[0.15em] text-cream-100">
                  {col.heading}
                </h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((label, i) => (
                    <li key={label}>
                      <a
                        href={col.hrefs[i]}
                        className="text-sm text-brown-300 transition hover:text-cream-100"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-brown-800 pt-8 sm:flex-row">
          <p className="text-sm text-brown-300">
            © 2026 tofuvideo. Made with <span className="text-coral-400">♥</span> and a very
            patient cat.
          </p>

          <div className="flex items-center gap-5">
            {/* X / Twitter */}
            <a
              href="#"
              aria-label="tofuvideo on X"
              className="text-brown-300 transition hover:text-cream-100"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 4l6.5 8.6L4.4 20h2.5l4.8-5.9L16 20h4l-6.8-9L19.3 4h-2.5l-4.4 5.4L8 4H4z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="#"
              aria-label="tofuvideo on YouTube"
              className="text-brown-300 transition hover:text-cream-100"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                <path d="m10 15 5-3-5-3z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="#"
              aria-label="tofuvideo on GitHub"
              className="text-brown-300 transition hover:text-cream-100"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
