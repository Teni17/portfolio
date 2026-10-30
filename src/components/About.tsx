import Blob from "@/components/decorative/Blob";

export default function About() {
  return (
    <section className="relative mx-auto max-w-5xl overflow-hidden px-6 py-24 sm:px-8">
      <Blob
        className="absolute -top-10 -right-16 -z-10 opacity-70"
        colors={["#eaf6ff", "#6fb3e0"]}
        size={220}
        duration={11}
      />
      <div className="grid gap-10 sm:grid-cols-[1fr_1.4fr] sm:items-center">
        <div className="glass-card mx-auto flex h-40 w-40 items-center justify-center rounded-[2.5rem] sm:h-full sm:w-full">
          <span className="text-chrome font-display text-6xl font-bold">
            TO
          </span>
        </div>

        <div>
          <p className="font-display text-sm font-semibold tracking-[0.3em] text-bubblegum uppercase">
            About Me
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
            A little about me
          </h2>
          <p className="mt-5 text-ink-soft">
            Placeholder bio paragraph — introduce yourself, your CS
            background, and what drew you into AI. Mention the kind of
            problems you like solving and any standout experience.
          </p>
          <p className="mt-4 text-ink-soft">
            Placeholder paragraph two — talk about your current master&rsquo;s
            focus area, research interests, or the tools and frameworks you
            reach for most.
          </p>
          <p className="mt-4 text-ink-soft">
            Placeholder paragraph three — a note on what you&rsquo;re looking
            for next, whether that&rsquo;s research, industry roles, or
            collaboration.
          </p>
        </div>
      </div>
    </section>
  );
}
