import type { WorkEntry } from "@/lib/types"
import { Eyebrow } from "@/components/ui/Tag"

function WorkCard({ entry, big }: { entry: WorkEntry; big?: boolean }) {
  return (
    <article
      className="card-hover-straight rounded-3xl border-[2.5px] border-ink overflow-hidden flex flex-col shadow-lg"
      style={{
        background: "var(--cream-2, var(--cream2))",
      }}
    >
      {/* Thumbnail — coloured gradient like ep-thumb */}
      <div
        className="relative border-b-[2.5px] border-ink flex items-center justify-center"
        style={{
          background: entry.accentColor,
          aspectRatio: big ? "16/10" : "16/9",
        }}
      >
        <div
          className="w-[72px] h-[72px] rounded-full border-[2.5px] border-ink flex items-center justify-center shadow-ink"
          style={{ background: "white" }}
        >
          <span className="text-[28px]">💼</span>
        </div>
        <span
          className="absolute bottom-2.5 right-2.5 font-black text-[13px] px-2.5 py-0.5 rounded bg-ink"
          style={{ color: "var(--cream)" }}
        >
          {entry.period}
        </span>
        <span
          className="absolute top-2.5 left-2.5 font-black text-[12px] px-2.5 py-1 rounded-full border-2 border-ink uppercase tracking-[.08em] bg-barn"
          style={{ color: "white" }}
        >
          {entry.company}
        </span>
      </div>

      <div className="p-4 pb-5">
        <h3
          className="font-[family-name:var(--font-fraunces)] mb-1"
          style={{ fontSize: big ? 30 : 22 }}
        >
          {entry.role}
        </h3>
        <p className="text-[14px] font-semibold m-0" style={{ color: "color-mix(in oklab, var(--ink) 75%, transparent)" }}>
          {entry.description}
        </p>
      </div>
    </article>
  )
}

export function Work({ entries }: { entries: WorkEntry[] }) {
  const [featured, ...rest] = entries

  return (
    <section
      id="work"
      style={{ background: "var(--cream-2, var(--cream2))", padding: "80px 0" }}
    >
      <div className="max-w-[1280px] mx-auto px-7">
        <div className="flex items-end justify-between mb-9 gap-5 flex-wrap">
          <div>
            <Eyebrow>~ where I&apos;ve been ~</Eyebrow>
            <h2
              className="font-[family-name:var(--font-fraunces)] font-black leading-[.95]"
              style={{ fontSize: "clamp(40px,5vw,72px)" }}
            >
              Work{" "}
              <em style={{ fontStyle: "italic", color: "var(--barn)" }}>Experience</em>
            </h2>
          </div>
          <a
            href="mailto:arun.vinland@gmail.com"
            className="font-black text-ink underline decoration-wavy decoration-barn underline-offset-[5px]"
          >
            Full résumé →
          </a>
        </div>

        {/* Primary layout: big + smaller cards */}
        <div className="grid gap-5 grid-cols-1 md:grid-cols-[2fr_1fr_1fr]">
          {featured && <WorkCard entry={featured} big />}
          {rest.map(e => <WorkCard key={e.id} entry={e} />)}
        </div>
      </div>
    </section>
  )
}
