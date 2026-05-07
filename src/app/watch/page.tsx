import { config } from "@/lib/site-config"
import { getFeaturedTalk, talks } from "../../../portfolios/arun/talks"
import { Topbar } from "@/components/layout/Topbar"
import { Footer } from "@/components/layout/Footer"
import { Ticker } from "@/components/layout/Ticker"
import WatchClient from "./WatchClient"
import Link from "next/link"
import type { Metadata } from "next"
import type { Talk } from "@/lib/types"

export const metadata: Metadata = {
  title: `Watch · ${config.name}`,
  description: "Conference talks, screencasts, and recorded sessions by Arun.",
}

/* ── YT-style related card ── */
function YtCard({ talk, nth }: { talk: Talk; nth: number }) {
  const gradients = [
    "linear-gradient(180deg, #bce3ef, #6aa84f)",
    "linear-gradient(180deg, #f6c14b, #c94a3a)",
    "linear-gradient(180deg, #ef9fb0, #c94a3a)",
    "linear-gradient(180deg, #94cfe1, #4d8836)",
  ]
  const bg = gradients[nth % gradients.length]

  return (
    <article
      className="rounded-[20px] border-[2.5px] border-ink overflow-hidden cursor-pointer card-hover"
      style={{ background: "var(--wool)", boxShadow: "0 6px 0 var(--wool-shadow)" }}
    >
      {/* Thumbnail */}
      <div className="relative border-b-[2.5px] border-ink" style={{ aspectRatio: "16/9", background: bg }}>
        {/* YouTube badge */}
        <span
          className="absolute top-[10px] left-[10px] bg-white text-ink border-2 border-ink rounded-[6px] px-2 py-0.5 text-[11px] font-black inline-flex items-center gap-1.5"
        >
          <span className="inline-block w-[14px] h-[10px] rounded-[2px] bg-barn"/>
          YouTube
        </span>

        {/* Play mini */}
        <div
          className="yt-play-mini absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-barn border-[3px] border-ink flex items-center justify-center"
          style={{ boxShadow: "0 4px 0 var(--ink)" }}
        />

        {/* Duration */}
        <span className="absolute bottom-2 right-2 bg-ink text-white text-[12px] font-black px-2 py-0.5 rounded">
          {talk.duration}
        </span>
      </div>

      {/* Body */}
      <div className="p-[14px] pb-4">
        <h4 className="font-display font-black text-[17px] text-ink leading-[1.2] mb-1.5">
          {talk.title}
        </h4>
        <div className="font-bold text-[12px] flex gap-2" style={{ color: "color-mix(in oklab, var(--ink) 65%, transparent)" }}>
          <span>{talk.event}</span>
          <span>·</span>
          <span>{talk.year}</span>
        </div>
      </div>
    </article>
  )
}

export default function WatchPage() {
  const featured = getFeaturedTalk()
  const otherTalks = talks.filter(t => t.id !== featured.id)

  return (
    <>
      <Topbar config={config} />

      <main className="min-h-screen bg-cream">

        {/* ── Title band ── */}
        <div
          className="relative border-b-[3px] border-ink overflow-hidden"
          style={{
            background: "linear-gradient(180deg, var(--sky) 0%, var(--sky-2) 100%)",
            padding: "50px 28px 80px",
          }}
        >
          {/* Cloud 1 */}
          <div className="cloud absolute" style={{ top: 30, right: 120, width: 140, height: 34 }}>
            <span className="absolute rounded-full bg-white" style={{ width: 60, height: 60, top: -28, left: 24 }}/>
            <span className="absolute rounded-full bg-white" style={{ width: 46, height: 46, top: -22, left: 72 }}/>
          </div>
          {/* Cloud 2 */}
          <div className="cloud absolute" style={{ top: 90, right: 380, width: 90, height: 24 }}>
            <span className="absolute rounded-full bg-white" style={{ width: 42, height: 42, top: -20, left: 14 }}/>
            <span className="absolute rounded-full bg-white" style={{ width: 0, height: 0 }}/>
          </div>

          {/* Peeking sheep */}
          <svg
            className="absolute"
            style={{ bottom: -2, right: 60 }}
            width="160" height="120"
            viewBox="0 0 160 120"
            aria-hidden="true"
          >
            <ellipse cx="80" cy="120" rx="80" ry="14" fill="rgba(0,0,0,.08)"/>
            <circle cx="36" cy="78" r="14" fill="#f6efe1" stroke="#2a2418" strokeWidth="3"/>
            <circle cx="56" cy="64" r="16" fill="#f6efe1" stroke="#2a2418" strokeWidth="3"/>
            <circle cx="80" cy="58" r="18" fill="#f6efe1" stroke="#2a2418" strokeWidth="3"/>
            <circle cx="106" cy="64" r="16" fill="#f6efe1" stroke="#2a2418" strokeWidth="3"/>
            <circle cx="126" cy="78" r="14" fill="#f6efe1" stroke="#2a2418" strokeWidth="3"/>
            <ellipse cx="82" cy="86" rx="22" ry="20" fill="#3a3024" stroke="#2a2418" strokeWidth="3"/>
            <ellipse cx="74" cy="84" rx="4" ry="5" fill="#fbf3df"/>
            <ellipse cx="90" cy="84" rx="4" ry="5" fill="#fbf3df"/>
            <circle cx="74" cy="86" r="2" fill="#2a2418"/>
            <circle cx="90" cy="86" r="2" fill="#2a2418"/>
            <ellipse cx="82" cy="98" rx="9" ry="5" fill="#5b4a38"/>
          </svg>

          <div className="max-w-[1280px] mx-auto relative z-10">
            {/* Breadcrumbs */}
            <div className="font-bold text-[14px] mb-3" style={{ color: "color-mix(in oklab, var(--ink) 80%, transparent)" }}>
              <Link href="/" className="text-inherit underline decoration-wavy decoration-barn underline-offset-[4px]">Home</Link>
              {" "}&nbsp;›&nbsp;{" "}
              <Link href="/watch" className="text-inherit underline decoration-wavy decoration-barn underline-offset-[4px]">Watch</Link>
              {" "}&nbsp;›&nbsp;{" "}
              <span>{featured.event} · {featured.year}</span>
            </div>

            {/* Kicker */}
            <span
              className="font-hand text-[30px] inline-block mb-[14px] px-[14px] py-[2px] rounded-[8px] border-2 border-ink"
              style={{ background: "var(--sun)", transform: "rotate(-2deg)" }}
            >
              Now playing 🐑
            </span>

            {/* H1 */}
            <h1
              className="font-display font-black text-ink"
              style={{ fontSize: "clamp(56px, 7.2vw, 96px)", lineHeight: 0.9 }}
            >
              {featured.title.includes(":")
                ? <>{featured.title.split(":")[0]}:<br/><em className="italic text-barn">{featured.title.split(":")[1]?.trim()}</em></>
                : <>{featured.title}</>
              }
            </h1>
          </div>
        </div>

        {/* ── Player + sidebar (WatchClient) ── */}
        <WatchClient talk={featured} otherTalks={otherTalks} />

        {/* ── Related talks grid ── */}
        <section className="mt-[60px] max-w-[1280px] mx-auto px-7 pb-20">
          <div className="flex items-end justify-between mb-7 flex-wrap gap-4">
            <div>
              <span className="font-hand text-[28px] text-grass2 block" style={{ transform: "rotate(-2deg)" }}>
                straight from the channel
              </span>
              <h2
                className="font-display font-black text-ink"
                style={{ fontSize: "clamp(36px, 4.5vw, 56px)", lineHeight: 0.95 }}
              >
                More <em className="italic text-barn">Episodes.</em>
              </h2>
            </div>
            <Link
              href="/watch"
              className="inline-flex items-center gap-2 bg-white text-ink border-[2.5px] border-ink rounded-full px-[18px] py-2 font-black text-[14px] no-underline hover:bg-cream2 transition-colors"
              style={{ boxShadow: "0 3px 0 var(--wool-shadow)" }}
            >
              View all episodes →
            </Link>
          </div>

          <div className="grid gap-[18px]" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
            {talks.map((t, i) => (
              <YtCard key={t.id} talk={t} nth={i} />
            ))}
            {/* pad to 4 columns */}
            {Array.from({ length: Math.max(0, 4 - talks.length) }).map((_, i) => (
              <div key={`pad-${i}`} className="rounded-[20px] border-[2.5px] border-dashed border-ink opacity-30"
                style={{ aspectRatio: "16/9", background: "var(--cream-2)" }}/>
            ))}
          </div>
        </section>

      </main>

      <Ticker items={config.ticker} />
      <Footer config={config} />
    </>
  )
}
