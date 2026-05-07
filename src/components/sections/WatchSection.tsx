import Link from "next/link"
import type { Talk } from "@/lib/types"

const gradients = [
  "linear-gradient(180deg, #bce3ef 0%, #6aa84f 100%)",
  "linear-gradient(180deg, #f6c14b 0%, #c94a3a 100%)",
  "linear-gradient(180deg, #ef9fb0 0%, #c94a3a 100%)",
  "linear-gradient(180deg, #94cfe1 0%, #4d8836 100%)",
]

function FeaturedTalkCard({ talk }: { talk: Talk }) {
  return (
    <Link href="/watch" className="block no-underline group">
      <article
        className="card-hover-straight rounded-[24px] border-[2.5px] border-ink overflow-hidden bg-wool shadow-xl"
      >
        {/* Thumbnail */}
        <div
          className="relative border-b-[2.5px] border-ink aspect-video"
          style={{ background: gradients[0] }}
        >
          <span className="absolute top-3 left-3 bg-white text-ink border-2 border-ink rounded-[6px] px-2 py-0.5 text-[11px] font-black inline-flex items-center gap-1.5">
            <span className="inline-block w-[14px] h-[10px] rounded-[2px] bg-barn" />
            YouTube
          </span>
          <div
            className="yt-play-mini absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-barn border-[3px] border-ink flex items-center justify-center shadow-ink"
          />
          <span className="absolute bottom-3 right-3 bg-ink text-white text-[13px] font-black px-2.5 py-1 rounded">
            {talk.duration}
          </span>
        </div>

        {/* Body */}
        <div className="p-5 pb-6">
          {talk.tags && (
            <div className="flex gap-2 mb-3 flex-wrap">
              {talk.tags.slice(0, 2).map(t => (
                <span key={t} className="text-[11px] font-black px-2.5 py-0.5 rounded-full border-[1.5px] border-ink bg-sun">
                  {t}
                </span>
              ))}
            </div>
          )}
          <h3 className="font-display font-black text-[26px] text-ink leading-[1.1] mb-2 group-hover:text-barn transition-colors">
            {talk.title}
          </h3>
          <div className="font-bold text-[13px] flex gap-2" style={{ color: "color-mix(in oklab, var(--ink) 65%, transparent)" }}>
            <span>{talk.event}</span>
            <span>·</span>
            <span>{talk.year}</span>
          </div>
        </div>
      </article>
    </Link>
  )
}

function TalkCard({ talk, nth }: { talk: Talk; nth: number }) {
  return (
    <Link href="/watch" className="block no-underline group">
      <article
        className="card-hover rounded-[20px] border-[2.5px] border-ink overflow-hidden bg-wool shadow-lg"
      >
        <div
          className="relative border-b-[2.5px] border-ink aspect-video"
          style={{ background: gradients[(nth + 1) % gradients.length] }}
        >
          <div
            className="yt-play-mini absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-barn border-[2.5px] border-ink flex items-center justify-center shadow-ink"
          />
          <span className="absolute bottom-2 right-2 bg-ink text-white text-[11px] font-black px-2 py-0.5 rounded">
            {talk.duration}
          </span>
        </div>
        <div className="p-4">
          <h4 className="font-display font-black text-[18px] text-ink leading-[1.2] mb-1.5 group-hover:text-barn transition-colors">
            {talk.title}
          </h4>
          <div className="font-bold text-[12px] flex gap-2" style={{ color: "color-mix(in oklab, var(--ink) 65%, transparent)" }}>
            <span>{talk.event}</span>
            <span>·</span>
            <span>{talk.year}</span>
          </div>
        </div>
      </article>
    </Link>
  )
}

export function WatchSection({ talks }: { talks: Talk[] }) {
  const featured = talks.find(t => t.featured) ?? talks[0]
  const others = talks.filter(t => t.id !== featured.id).slice(0, 2)

  return (
    <section
      id="watch"
      className="bg-cream2"
      style={{
        borderTop: "3px solid var(--ink)",
        borderBottom: "3px solid var(--ink)",
        padding: "80px 28px",
      }}
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-5">
          <div>
            <span
              className="font-hand text-[28px] text-grass2 block"
              style={{ transform: "rotate(-2deg)" }}
            >
              ~ straight from the stage ~
            </span>
            <h2
              className="font-display font-black text-ink"
              style={{ fontSize: "clamp(40px, 5vw, 56px)", lineHeight: 0.95 }}
            >
              Latest <em className="italic text-barn">Episodes.</em>
            </h2>
          </div>
          <Link
            href="/watch"
            className="inline-flex items-center gap-2 bg-white text-ink border-[2.5px] border-ink rounded-full px-[18px] py-2 font-black text-[14px] no-underline hover:bg-cream2 transition-colors shadow-sm"
          >
            View all episodes →
          </Link>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-[2fr_1fr_1fr]">
          <FeaturedTalkCard talk={featured} />
          {others.map((t, i) => (
            <TalkCard key={t.id} talk={t} nth={i} />
          ))}
          {/* Pad to 3 columns if fewer than 2 other talks */}
          {Array.from({ length: Math.max(0, 2 - others.length) }).map((_, i) => (
            <div
              key={`pad-${i}`}
              className="rounded-[20px] border-[2.5px] border-dashed border-ink opacity-30 aspect-video bg-cream"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
