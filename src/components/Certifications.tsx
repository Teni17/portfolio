import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24 sm:px-8">
      <p className="font-display text-sm font-semibold tracking-[0.3em] text-bubblegum uppercase">
        Certifications
      </p>
      <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
        Certifications &amp; badges
      </h2>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="glass-card flex items-center gap-4 rounded-3xl p-5"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-mint to-sky">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2 15 8.5 22 9.5 17 14.5 18.2 21.5 12 18 5.8 21.5 7 14.5 2 9.5 9 8.5Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-display text-base font-bold text-ink">
                {cert.name}
              </h3>
              <p className="font-display text-sm font-semibold text-ink-soft">
                {cert.issuer} · {cert.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
