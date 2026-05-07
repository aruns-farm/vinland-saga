import type { Project } from "@/lib/types"
import { StickerTag, Eyebrow } from "@/components/ui/Tag"

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="card-hover relative rounded-3xl border-[2.5px] border-ink p-5 text-center overflow-hidden bg-wool shadow-lg"
    >
      <StickerTag>{project.tag}</StickerTag>

      <div
        className="w-full aspect-square rounded-[18px] border-2 border-dashed mb-3.5 flex items-center justify-center overflow-hidden"
        style={{
          background: project.accentColor,
          borderColor: "color-mix(in oklab, var(--ink) 30%, transparent)",
        }}
      >
        <span
          className="font-display font-black text-[64px] leading-none"
          style={{ color: "color-mix(in oklab, var(--ink) 20%, transparent)" }}
        >
          {project.title.charAt(0)}
        </span>
      </div>

      <h3 className="font-display text-[26px] font-[800]">
        {project.title}
      </h3>
      <p
        className="text-[14px] mt-1 font-semibold"
        style={{ color: "color-mix(in oklab, var(--ink) 75%, white)" }}
      >
        {project.description}
      </p>

      {project.tags && (
        <div className="flex flex-wrap gap-1.5 justify-center mt-3">
          {project.tags.map(t => (
            <span
              key={t}
              className="text-[12px] font-bold px-2 py-0.5 rounded-md border border-ink bg-cream2"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="py-20 px-7 max-w-[1280px] mx-auto">
      <div className="flex items-end justify-between mb-9 gap-5 flex-wrap">
        <div>
          <Eyebrow>~ things I&apos;ve built ~</Eyebrow>
          <h2
            className="font-display font-black leading-[.95]"
            style={{ fontSize: "clamp(40px,5vw,72px)" }}
          >
            Selected{" "}
            <em className="italic text-barn">Projects</em>
          </h2>
        </div>
        <a
          href="https://github.com/aruns-farm"
          className="font-black text-ink underline decoration-wavy decoration-barn underline-offset-[5px]"
          target="_blank" rel="noreferrer"
        >
          All on GitHub →
        </a>
      </div>

      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  )
}
