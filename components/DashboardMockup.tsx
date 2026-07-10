function Waveform({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path d="M2 8v.01M6 5v6M10 3v10M14 6v4M18 2v12M22 5v6M26 7v2M30 4v8M34 6v4M38 2v12M42 5v6M46 7v2M50 4v8M54 6v4M58 3v10M62 8v.01" />
    </svg>
  );
}

function CheckMini() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-2.5 w-2.5"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function CaptionLines() {
  return (
    <span className="flex w-full flex-col items-center gap-1 px-2" aria-hidden="true">
      <span className="h-1 w-3/4 rounded-full bg-amber-400/70" />
      <span className="h-1 w-1/2 rounded-full bg-amber-400/45" />
    </span>
  );
}

export default function DashboardMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-cream-200 bg-white shadow-lift">
      {/* Browser chrome */}
      <div className="relative flex items-center gap-1.5 border-b border-cream-200 bg-cream-100 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-coral-500" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-tofublue-500" />
        <span className="absolute left-1/2 -translate-x-1/2 rounded-full border border-cream-200 bg-white px-4 py-0.5 text-xs text-brown-500">
          app.tofu.video
        </span>
      </div>

      {/* App body */}
      <div className="space-y-3 bg-cream-50 p-4 sm:p-5">
        {/* Header row */}
        <div className="flex items-center justify-between">
          <h3 className="font-display text-sm font-bold text-brown-900">New video</h3>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-2.5 py-0.5 text-[10px] font-semibold text-amber-600">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-2.5 w-2.5"
              aria-hidden="true"
            >
              <path d="M21 12a9 9 0 1 1-6.2-8.56" />
            </svg>
            Rendering 2 of 3
          </span>
        </div>

        {/* Topic input */}
        <div className="flex items-center gap-2 rounded-xl border border-cream-200 bg-white px-3 py-2 shadow-soft">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-3.5 w-3.5 shrink-0 text-brown-500"
            aria-hidden="true"
          >
            <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4" />
          </svg>
          <span className="flex-1 truncate text-sm text-brown-700">
            Why sourdough bread is having a moment
          </span>
          <span className="shrink-0 rounded-full bg-coral-500 px-3 py-1 font-display text-[10px] font-bold text-white">
            Create
          </span>
        </div>

        {/* Pipeline steps */}
        <div className="flex flex-wrap items-center gap-1.5">
          {(["Script", "Scenes", "Visuals"] as const).map((step) => (
            <span
              key={step}
              className="inline-flex items-center gap-1 rounded-full bg-coral-100 px-2 py-0.5 text-[10px] font-semibold text-coral-700"
            >
              <CheckMini />
              {step}
            </span>
          ))}
          <span className="inline-flex items-center gap-1.5 rounded-full bg-coral-500 px-2 py-0.5 text-[10px] font-semibold text-white">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
            Voice
          </span>
          {(["Captions", "Assemble"] as const).map((step) => (
            <span
              key={step}
              className="rounded-full bg-cream-100 px-2 py-0.5 text-[10px] font-semibold text-brown-500"
            >
              {step}
            </span>
          ))}
        </div>

        {/* Timeline */}
        <div className="rounded-xl border border-cream-200 bg-white p-3 shadow-soft">
          <div className="mb-2 flex items-center justify-between">
            <span className="font-display text-xs font-bold text-brown-900">Timeline</span>
            <span className="text-[10px] font-semibold tabular-nums text-brown-500">04:32</span>
          </div>

          <div className="space-y-1.5">
            {/* Voice track */}
            <div className="flex items-center gap-2">
              <span className="w-14 shrink-0 text-[10px] font-semibold uppercase tracking-wide text-brown-500">
                Voice
              </span>
              <div className="flex h-7 flex-1 gap-1">
                <span className="flex w-[22%] items-center rounded-md bg-tofublue-100 px-1 text-tofublue-500">
                  <Waveform className="h-3.5 w-full" />
                </span>
                <span className="flex w-[30%] items-center rounded-md bg-tofublue-100 px-1 text-tofublue-500">
                  <Waveform className="h-3.5 w-full" />
                </span>
                <span className="flex w-[18%] items-center rounded-md bg-tofublue-100 px-1 text-tofublue-500">
                  <Waveform className="h-3.5 w-full" />
                </span>
                <span className="flex w-[30%] items-center rounded-md bg-tofublue-100 px-1 text-tofublue-500">
                  <Waveform className="h-3.5 w-full" />
                </span>
              </div>
            </div>

            {/* Image track */}
            <div className="flex items-center gap-2">
              <span className="w-14 shrink-0 text-[10px] font-semibold uppercase tracking-wide text-brown-500">
                Image
              </span>
              <div className="flex h-7 flex-1 gap-1">
                <span className="w-[16%] rounded-md bg-gradient-to-br from-amber-100 to-amber-400/60" />
                <span className="w-[24%] rounded-md bg-gradient-to-br from-cream-200 to-tofublue-100" />
                <span className="w-[20%] rounded-md bg-gradient-to-br from-coral-100 to-coral-400/60 ring-2 ring-coral-500" />
                <span className="w-[18%] rounded-md bg-gradient-to-br from-tofublue-100 to-tofublue-500/40" />
                <span className="w-[22%] rounded-md bg-gradient-to-br from-cream-100 to-amber-400/50" />
              </div>
            </div>

            {/* Captions track */}
            <div className="flex items-center gap-2">
              <span className="w-14 shrink-0 text-[10px] font-semibold uppercase tracking-wide text-brown-500">
                Captions
              </span>
              <div className="flex h-7 flex-1 gap-1">
                <span className="flex w-[28%] items-center rounded-md bg-amber-100">
                  <CaptionLines />
                </span>
                <span className="flex w-[20%] items-center rounded-md bg-amber-100">
                  <CaptionLines />
                </span>
                <span className="flex w-[32%] items-center rounded-md bg-amber-100">
                  <CaptionLines />
                </span>
                <span className="flex w-[20%] items-center rounded-md bg-amber-100">
                  <CaptionLines />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scene inspector */}
        <div className="flex items-center gap-3 rounded-xl border border-cream-200 bg-white p-3 shadow-soft">
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-semibold text-brown-900">
              Scene 4 · Golden crust close-up
            </p>
            <p className="mt-0.5 text-[10px] text-brown-500">
              Only this scene re-renders — tweaks take seconds.
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              <span className="inline-flex items-center gap-1 rounded-full border border-cream-300 bg-white px-2.5 py-1 text-[10px] font-semibold text-brown-700">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-2.5 w-2.5 text-coral-500"
                  aria-hidden="true"
                >
                  <path d="M21 12a9 9 0 1 1-2.64-6.36M21 3v6h-6" />
                </svg>
                Regenerate image
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-cream-300 bg-white px-2.5 py-1 text-[10px] font-semibold text-brown-700">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-2.5 w-2.5 text-tofublue-500"
                  aria-hidden="true"
                >
                  <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                </svg>
                Rewrite
              </span>
            </div>
          </div>
          <div className="relative w-28 shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-amber-400/70 via-coral-400/60 to-brown-700 sm:w-32">
            <div className="aspect-video" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-coral-500 shadow-soft">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="ml-0.5 h-3 w-3 text-white"
                  aria-hidden="true"
                >
                  <path d="M8 5.5v13a1 1 0 0 0 1.52.86l10.4-6.5a1 1 0 0 0 0-1.72L9.52 4.64A1 1 0 0 0 8 5.5Z" />
                </svg>
              </span>
            </span>
            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-brown-950/70 px-1.5 py-0.5 text-[8px] font-bold text-white">
              golden <span className="text-amber-400">crust</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
