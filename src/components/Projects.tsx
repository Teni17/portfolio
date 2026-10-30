import { projects } from "@/data/projects";
import Blob from "@/components/decorative/Blob";

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.8 1.18 1.82 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.07.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section className="relative mx-auto max-w-5xl overflow-hidden px-6 py-24 sm:px-8">
      <Blob
        className="absolute -top-12 -right-14 -z-10 opacity-70"
        colors={["#eaf6ff", "#6fb3e0"]}
        size={220}
        duration={12}
      />
      <p className="font-display text-sm font-semibold tracking-[0.3em] text-bubblegum uppercase">
        Projects
      </p>
      <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
        Things I&rsquo;ve built
      </h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="glass-card flex flex-col rounded-3xl p-6 transition-transform hover:-translate-y-1"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-peach to-bubblegum text-cloud">
              <GithubIcon />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-ink">
              {project.title}
            </h3>
            <p className="mt-2 flex-1 text-sm text-ink-soft">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/60 px-3 py-1 font-display text-xs font-semibold text-ink-soft"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-5 flex gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-display text-sm font-bold text-ink hover:text-bubblegum"
              >
                <GithubIcon />
                Code
              </a>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-display text-sm font-bold text-ink hover:text-bubblegum"
                >
                  Live demo →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
