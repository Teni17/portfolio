import Blob from "@/components/decorative/Blob";

const timeline = [
  {
    period: "2024 — Present",
    title: "M.S. in Artificial Intelligence",
    place: "University Name",
    detail: "Placeholder — coursework, thesis focus, or standout projects.",
  },
  {
    period: "2020 — 2024",
    title: "B.S. in Computer Science",
    place: "University Name",
    detail: "Placeholder — honors, relevant coursework, or activities.",
  },
  {
    period: "Summer 2023",
    title: "Software Engineering Intern",
    place: "Company Name",
    detail: "Placeholder — one line on scope and impact.",
  },
];

export default function Resume() {
  return (
    <section className="relative mx-auto max-w-5xl overflow-hidden px-6 py-24 sm:px-8">
      <Blob
        className="absolute -top-14 -left-20 -z-10 opacity-70"
        colors={["#f5f9fd", "#b8c9e8"]}
        size={240}
        duration={13}
      />
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-display text-sm font-semibold tracking-[0.3em] text-bubblegum uppercase">
            Resume
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
            Education &amp; experience
          </h2>
        </div>
        <a
          href="/resume.pdf"
          download
          className="rounded-full bg-ink px-6 py-3 font-display text-sm font-bold text-cloud shadow-[0_10px_30px_-10px_rgba(16,24,38,0.5)] transition-transform hover:-translate-y-0.5"
        >
          Download Resume
        </a>
      </div>

      <ol className="mt-12 space-y-8 border-l-2 border-lavender/60 pl-8">
        {timeline.map((item) => (
          <li key={item.title} className="relative">
            <span className="absolute top-1.5 -left-[2.35rem] h-4 w-4 rounded-full border-2 border-cloud bg-bubblegum" />
            <p className="font-display text-xs font-bold tracking-wide text-ink-soft uppercase">
              {item.period}
            </p>
            <h3 className="mt-1 font-display text-lg font-bold text-ink">
              {item.title}
            </h3>
            <p className="font-display text-sm font-semibold text-ink-soft">
              {item.place}
            </p>
            <p className="mt-1 text-ink-soft">{item.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
