const renders = [
  {
    src: "/demo/coldbrew-16x9.mp4",
    poster: "/demo/coldbrew-poster.jpg",
    topic: "How to make cold brew coffee at home",
    meta: ["YouTube 16:9", "1:09", "stock photos + avatar presenter"],
    vertical: false,
  },
  {
    src: "/demo/blackcats-9x16.mp4",
    poster: "/demo/blackcats-poster.jpg",
    topic: "Are black cats good as pets?",
    meta: ["Shorts 9:16", "2:06", "burned word-highlight captions"],
    vertical: true,
  },
];

export default function RealRenders() {
  return (
    <section className="bg-cream-100 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-coral-600">
            Straight from the engine
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-brown-900 sm:text-5xl">
            Real renders, unedited
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brown-700">
            No usage charts, no testimonials — this project is early. Instead, here are two
            actual MP4s the pipeline produced from a one-line topic. Script, visuals,
            voiceover, music, and captions: exactly as they came out.
          </p>
        </div>

        <div className="mt-14 flex flex-col justify-center gap-6 lg:flex-row lg:items-start">
          {renders.map((r) => (
            <figure
              key={r.src}
              className={`flex flex-col rounded-3xl border border-cream-200 bg-white p-4 shadow-soft ${
                r.vertical ? "lg:w-[320px]" : "lg:flex-1 lg:max-w-2xl"
              }`}
            >
              <video
                src={r.src}
                poster={r.poster}
                controls
                preload="metadata"
                playsInline
                className={`w-full rounded-2xl bg-brown-950 ${
                  r.vertical ? "aspect-[9/16]" : "aspect-video"
                }`}
              />
              <figcaption className="flex flex-1 flex-col px-2 pt-4 pb-1">
                <p className="font-display text-base font-bold text-brown-900">
                  “{r.topic}”
                </p>
                <p className="mt-1 text-xs text-brown-500">
                  The full prompt. Everything else was the pipeline.
                </p>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
                  {r.meta.map((m) => (
                    <span
                      key={m}
                      className="rounded-full bg-coral-100 px-2.5 py-0.5 text-[11px] font-semibold text-coral-700"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-xl text-center text-sm text-brown-500">
          Rendered with free-tier providers — local LLM script, stock + AI visuals, local
          voices. With paid keys plugged in, quality goes up from here.
        </p>
      </div>
    </section>
  );
}
