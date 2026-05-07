"use client"
import { useState, useEffect, useRef } from "react"
import type { Talk } from "@/lib/types"

interface Props {
  talk: Talk
  otherTalks: Talk[]
}

function fmt(s: number) {
  s = Math.max(0, Math.floor(s))
  const m = Math.floor(s / 60), r = s % 60
  return `${String(m).padStart(2, "0")}:${String(r).padStart(2, "0")}`
}

const SPEEDS = ["0.5×", "1.0×", "1.25×", "1.5×", "2.0×"]

export default function WatchClient({ talk, otherTalks }: Props) {
  const total = talk.totalSeconds ?? 1824
  const [playing, setPlaying]     = useState(false)
  const [pct, setPct]             = useState(0.28)
  const [volume, setVolume]       = useState(0.7)
  const [speedIdx, setSpeedIdx]   = useState(1)
  const [activeChap, setActiveChap] = useState(0)
  const [ccOn, setCcOn]           = useState(true)
  const progressRef = useRef<HTMLDivElement>(null)
  const volRef      = useRef<HTMLDivElement>(null)
  const scrubbing   = useRef(false)
  const vScrubbing  = useRef(false)

  useEffect(() => {
    if (!playing) return
    const id = setInterval(() => {
      setPct(p => {
        if (p >= 1) { setPlaying(false); return 0 }
        return Math.min(1, p + 1 / total)
      })
    }, 1000)
    return () => clearInterval(id)
  }, [playing, total])

  useEffect(() => {
    if (!talk.chapters) return
    const currentSec = pct * total
    let idx = 0
    talk.chapters.forEach((ch, i) => {
      const [m, s] = ch.timecode.split(":").map(Number)
      if (currentSec >= m * 60 + s) idx = i
    })
    setActiveChap(idx)
  }, [pct, total, talk.chapters])

  function seekFromEvt(e: MouseEvent | React.MouseEvent) {
    const el = progressRef.current; if (!el) return
    const r = el.getBoundingClientRect()
    setPct(Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)))
  }
  function volFromEvt(e: MouseEvent | React.MouseEvent) {
    const el = volRef.current; if (!el) return
    const r = el.getBoundingClientRect()
    setVolume(Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)))
  }

  useEffect(() => {
    const mm = (e: MouseEvent) => {
      if (scrubbing.current) seekFromEvt(e)
      if (vScrubbing.current) volFromEvt(e)
    }
    const mu = () => { scrubbing.current = false; vScrubbing.current = false }
    window.addEventListener("mousemove", mm)
    window.addEventListener("mouseup", mu)
    return () => { window.removeEventListener("mousemove", mm); window.removeEventListener("mouseup", mu) }
  }, [])

  function jumpTo(timecode: string) {
    const [m, s] = timecode.split(":").map(Number)
    setPct((m * 60 + s) / total)
    setPlaying(true)
  }

  const chapterTicks = (talk.chapters ?? []).map(ch => {
    const [m, s] = ch.timecode.split(":").map(Number)
    return ((m * 60 + s) / total) * 100
  })

  /* ── Icon helpers ── */
  const IconSkipPrev = () => (
    <svg viewBox="0 0 18 18" width="18" height="18"><path d="M5 4v10M14 4L7 9l7 5V4z" fill="currentColor"/></svg>
  )
  const IconSkipNext = () => (
    <svg viewBox="0 0 18 18" width="18" height="18"><path d="M13 4v10M4 4l7 5-7 5V4z" fill="currentColor"/></svg>
  )
  const IconVolume = () => (
    <svg viewBox="0 0 18 18" width="18" height="18"><path d="M3 7v4h3l4 3V4L6 7H3z M12 6c1.5 1.5 1.5 4.5 0 6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round"/></svg>
  )
  const IconPip = () => (
    <svg viewBox="0 0 18 18" width="18" height="18"><rect x="2" y="3" width="14" height="11" stroke="currentColor" strokeWidth="1.5" fill="none" rx="1.5"/><rect x="9" y="8" width="6" height="5" fill="currentColor" rx="1"/></svg>
  )
  const IconSettings = () => (
    <svg viewBox="0 0 18 18" width="18" height="18"><circle cx="9" cy="9" r="2.4" fill="currentColor"/><circle cx="9" cy="9" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2"/></svg>
  )
  const IconFullscreen = () => (
    <svg viewBox="0 0 18 18" width="18" height="18"><path d="M2 6V2h4M16 6V2h-4M2 12v4h4M16 12v4h-4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round"/></svg>
  )

  const ctlBtn = "w-[42px] h-[42px] rounded-full border-[2.5px] border-ink flex items-center justify-center cursor-pointer hover:-translate-y-px hover:rotate-[-3deg] transition-transform"

  return (
    <div
      className="max-w-[1280px] mx-auto px-7 pb-20 grid gap-7 grid-cols-1 xl:grid-cols-[1fr_360px]"
      style={{ marginTop: -40, position: "relative", zIndex: 5 }}
    >

      {/* ══ LEFT COLUMN ══ */}
      <div>

        {/* Player card */}
        <div className="rounded-[28px] border-[3px] border-ink overflow-hidden bg-wool"
          style={{ boxShadow: "0 10px 0 var(--wool-shadow)" }}>

          {/* Video area */}
          <div className="relative bg-ink aspect-video">
            {/* Farm scene poster */}
            <div className="absolute inset-0">
              <svg width="100%" height="100%" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="wSky" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0" stopColor="#bce3ef"/>
                    <stop offset="1" stopColor="#94cfe1"/>
                  </linearGradient>
                </defs>
                <rect width="1600" height="540" fill="url(#wSky)"/>
                <circle cx="1320" cy="180" r="80" fill="#f6c14b"/>
                <circle cx="1320" cy="180" r="100" fill="#f6c14b" opacity=".25"/>
                <ellipse cx="280" cy="150" rx="120" ry="32" fill="white"/>
                <ellipse cx="700" cy="100" rx="90" ry="24" fill="white"/>
                <path d="M 0 540 Q 400 420 800 500 Q 1200 580 1600 480 L 1600 600 L 0 600 Z" fill="#6aa84f"/>
                <rect x="0" y="600" width="1600" height="300" fill="#4d8836"/>
                {/* Barn */}
                <g transform="translate(180 380)">
                  <polygon points="20,90 130,20 240,90" fill="#c94a3a" stroke="#2a2418" strokeWidth="6"/>
                  <rect x="40" y="90" width="180" height="130" fill="#e16451" stroke="#2a2418" strokeWidth="6"/>
                  <rect x="120" y="150" width="40" height="70" fill="#2a2418"/>
                  <line x1="40" y1="90" x2="220" y2="220" stroke="#fbf3df" strokeWidth="6"/>
                  <line x1="220" y1="90" x2="40" y2="220" stroke="#fbf3df" strokeWidth="6"/>
                </g>
                {/* Hay bales */}
                <g transform="translate(900 620)">
                  <ellipse cx="60" cy="100" rx="80" ry="50" fill="#f6c14b" stroke="#2a2418" strokeWidth="5"/>
                  <line x1="0" y1="100" x2="120" y2="100" stroke="#2a2418" strokeWidth="3"/>
                  <line x1="10" y1="78" x2="110" y2="78" stroke="#2a2418" strokeWidth="3"/>
                  <line x1="10" y1="122" x2="110" y2="122" stroke="#2a2418" strokeWidth="3"/>
                </g>
                <g transform="translate(1100 660)">
                  <ellipse cx="60" cy="80" rx="60" ry="38" fill="#f6c14b" stroke="#2a2418" strokeWidth="5"/>
                  <line x1="5" y1="80" x2="115" y2="80" stroke="#2a2418" strokeWidth="3"/>
                </g>
                {/* Sneaky sheep */}
                <g transform="translate(560 660)">
                  <rect x="36" y="92" width="8" height="22" fill="#3a3024"/>
                  <rect x="64" y="92" width="8" height="22" fill="#3a3024"/>
                  <ellipse cx="55" cy="80" rx="40" ry="26" fill="#f6efe1" stroke="#2a2418" strokeWidth="4"/>
                  <circle cx="22" cy="68" r="12" fill="#f6efe1" stroke="#2a2418" strokeWidth="4"/>
                  <circle cx="36" cy="56" r="12" fill="#f6efe1" stroke="#2a2418" strokeWidth="4"/>
                  <circle cx="56" cy="48" r="14" fill="#f6efe1" stroke="#2a2418" strokeWidth="4"/>
                  <circle cx="78" cy="56" r="12" fill="#f6efe1" stroke="#2a2418" strokeWidth="4"/>
                  <ellipse cx="58" cy="86" rx="18" ry="16" fill="#3a3024" stroke="#2a2418" strokeWidth="4"/>
                  <ellipse cx="51" cy="84" rx="3" ry="4" fill="#fbf3df"/>
                  <ellipse cx="65" cy="84" rx="3" ry="4" fill="#fbf3df"/>
                  <circle cx="51" cy="85" r="1.5" fill="#2a2418"/>
                  <circle cx="65" cy="85" r="1.5" fill="#2a2418"/>
                </g>
              </svg>
            </div>

            {/* Big play */}
            {!playing && (
              <button
                className="big-play-btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110px] h-[110px] rounded-full border-[4px] border-ink flex items-center justify-center cursor-pointer z-10 hover:-translate-y-[calc(50%+3px)] hover:-rotate-3 transition-transform bg-sun"
                style={{ boxShadow: "0 6px 0 var(--ink)" }}
                onClick={() => setPlaying(true)}
                aria-label="Play talk"
              />
            )}

            {/* Control overlay */}
            <div
              className="absolute left-0 right-0 bottom-0 px-[18px] pb-4 pt-8 z-10"
              style={{
                background: "linear-gradient(180deg, transparent, rgba(0,0,0,.6) 60%)",
                opacity: playing ? 1 : 0.9,
                transition: "opacity .2s ease",
              }}
            >
              {/* Progress bar */}
              <div
                ref={progressRef}
                className="relative h-[14px] rounded-full border-2 border-ink mb-3 cursor-pointer"
                style={{ background: "white", boxShadow: "0 2px 0 var(--ink)" }}
                onMouseDown={e => { scrubbing.current = true; seekFromEvt(e) }}
              >
                <div className="absolute inset-0 rounded-full" style={{ background: "var(--cream-2)", width: "65%" }}/>
                <div className="absolute inset-0 rounded-full bg-barn" style={{ width: `${pct * 100}%` }}/>
                {chapterTicks.map((t, i) => (
                  <span key={i} className="absolute top-0 bottom-0 w-[3px] bg-ink opacity-65" style={{ left: `${t}%` }}/>
                ))}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-[22px] h-[22px] rounded-full bg-sun border-[2.5px] border-ink pointer-events-none"
                  style={{ left: `${pct * 100}%`, boxShadow: "0 2px 0 var(--ink)" }}/>
              </div>

              {/* Controls row */}
              <div className="flex items-center gap-2.5">
                {/* Play/Pause (barn) */}
                <button
                  className={`${ctlBtn} bg-barn text-white border-barn ${playing ? "ctl-pause" : "ctl-play"}`}
                  style={{ boxShadow: "0 3px 0 var(--ink)" }}
                  onClick={() => setPlaying(!playing)}
                  aria-label={playing ? "Pause" : "Play"}
                />
                {/* Skip prev */}
                <button className={`${ctlBtn} bg-cream text-ink`} style={{ boxShadow: "0 3px 0 var(--ink)" }} aria-label="Previous">
                  <IconSkipPrev/>
                </button>
                {/* Skip next */}
                <button className={`${ctlBtn} bg-cream text-ink`} style={{ boxShadow: "0 3px 0 var(--ink)" }} aria-label="Next">
                  <IconSkipNext/>
                </button>

                <div className="font-display font-black text-[16px] text-cream" style={{ textShadow: "0 1px 0 rgba(0,0,0,.4)", letterSpacing: "0.02em" }}>
                  {fmt(pct * total)}<span className="opacity-55 mx-1">/</span>{fmt(total)}
                </div>

                <div className="flex-1"/>

                {/* Volume icon */}
                <button className={`hidden sm:flex ${ctlBtn} bg-cream text-ink`} style={{ boxShadow: "0 3px 0 var(--ink)" }} aria-label="Volume">
                  <IconVolume/>
                </button>

                {/* Volume slider */}
                <div
                  ref={volRef}
                  className="hidden sm:block relative h-[14px] w-[110px] rounded-full border-2 border-ink cursor-pointer"
                  style={{ background: "white", boxShadow: "0 2px 0 var(--ink)" }}
                  onMouseDown={e => { vScrubbing.current = true; volFromEvt(e) }}
                >
                  <div className="absolute inset-0 rounded-full bg-grass" style={{ width: `${volume * 100}%` }}/>
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-[18px] h-[18px] rounded-full bg-sun border-[2.5px] border-ink" style={{ left: `${volume * 100}%` }}/>
                </div>

                {/* Speed */}
                <button
                  className="hidden sm:inline-flex h-9 px-[14px] rounded-full border-[2.5px] border-ink items-center gap-2 font-black text-ink text-[14px] cursor-pointer bg-cream"
                  style={{ boxShadow: "0 3px 0 var(--ink)" }}
                  onClick={() => setSpeedIdx(i => (i + 1) % SPEEDS.length)}
                >
                  <span className="font-hand text-[18px] text-barn-2 mr-[2px]">at</span>{SPEEDS[speedIdx]}
                </button>

                {/* CC */}
                <button
                  className={`hidden sm:inline-flex h-[42px] px-3 rounded-[14px] border-[2.5px] border-ink font-display font-black text-[13px] cursor-pointer transition-colors items-center justify-center`}
                  style={{
                    background: ccOn ? "var(--sun)" : "var(--cream)",
                    boxShadow: "0 3px 0 var(--ink)",
                    width: "auto",
                    borderRadius: 14,
                  }}
                  onClick={() => setCcOn(v => !v)}
                  aria-label="Captions"
                >
                  CC
                </button>

                {/* PiP */}
                <button className={`hidden sm:flex ${ctlBtn} bg-cream text-ink`} style={{ boxShadow: "0 3px 0 var(--ink)" }} aria-label="Picture-in-picture">
                  <IconPip/>
                </button>

                {/* Settings */}
                <button className={`hidden sm:flex ${ctlBtn} bg-cream text-ink`} style={{ boxShadow: "0 3px 0 var(--ink)" }} aria-label="Settings">
                  <IconSettings/>
                </button>

                {/* Fullscreen */}
                <button className={`${ctlBtn} bg-cream text-ink`} style={{ boxShadow: "0 3px 0 var(--ink)" }} aria-label="Fullscreen">
                  <IconFullscreen/>
                </button>
              </div>
            </div>
          </div>

          {/* Episode meta */}
          <div className="px-[30px] py-[26px] pb-[30px] bg-cream" style={{ borderTop: "3px solid var(--ink)" }}>
            <div className="flex items-center gap-[14px] mb-[14px] flex-wrap">
              <span className="bg-barn text-white text-[12px] font-black uppercase tracking-[.08em] px-3 py-1 rounded-full border-2 border-ink">
                {talk.event}
              </span>
              <span className="bg-white text-ink text-[12px] font-black px-3 py-1 rounded-full border-2 border-ink">
                {talk.year}
              </span>
              {talk.featured && (
                <span className="bg-sun text-ink text-[12px] font-black px-3 py-1 rounded-full border-2 border-ink">
                  ★ Featured
                </span>
              )}
            </div>
            <h2
              className="font-display font-black text-ink leading-[1] mb-[10px]"
              style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
            >
              {talk.title.includes(":")
                ? <>{talk.title.split(":")[0]}:<br/><em className="italic text-barn">{talk.title.split(":")[1]?.trim()}</em></>
                : talk.title
              }
            </h2>
            <p className="font-semibold text-[17px] leading-[1.55] text-ink max-w-[680px] mb-4">
              {talk.description}
            </p>
            <div className="flex gap-6 flex-wrap font-bold text-[14px] mt-4" style={{ color: "color-mix(in oklab, var(--ink) 75%, transparent)" }}>
              {[talk.duration, talk.event, talk.year, ...talk.tags].map(s => (
                <span key={s} className="before:content-['●'] before:text-barn before:mr-2 before:text-[8px] before:align-[3px]">
                  {s}
                </span>
              ))}
            </div>
            <div className="flex gap-2.5 flex-wrap mt-[22px]">
              {talk.videoUrl && (
                <a href={talk.videoUrl} target="_blank" rel="noreferrer"
                  className="chip primary inline-flex items-center gap-2 bg-barn text-white border-[2.5px] border-ink rounded-full px-4 py-2.5 font-black text-[14px] no-underline hover:-translate-x-px hover:-translate-y-0.5 transition-transform shadow-barn">
                  ▶ Watch on YouTube
                </a>
              )}
              {talk.slidesUrl && (
                <a href={talk.slidesUrl} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-sun text-ink border-[2.5px] border-ink rounded-full px-4 py-2.5 font-black text-[14px] no-underline hover:-translate-x-px hover:-translate-y-0.5 transition-transform shadow-sun">
                  ↗ Slides
                </a>
              )}
              {["♥ Save", "↗ Share", "＋ Playlist"].map(label => (
                <button key={label}
                  className="inline-flex items-center gap-2 bg-white text-ink border-[2.5px] border-ink rounded-full px-4 py-2.5 font-black text-[14px] cursor-pointer hover:-translate-x-px hover:-translate-y-0.5 transition-transform shadow-md">
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Chapters ── */}
        {talk.chapters && (
          <div className="mt-7 rounded-[24px] border-[3px] border-ink overflow-hidden bg-cream2 shadow-xl">
            <h3 className="font-display text-[24px] text-ink px-6 py-[18px] flex items-center gap-[10px]"
              style={{ borderBottom: "2px dashed color-mix(in oklab, var(--ink) 25%, transparent)" }}>
              <span className="font-hand text-grass2 text-[24px] -rotate-3 inline-block">jump to</span>
              Chapters
            </h3>
            {talk.chapters.map((ch, i) => (
              <div
                key={ch.num}
                onClick={() => { jumpTo(ch.timecode); setActiveChap(i) }}
                className="grid gap-4 px-6 py-[14px] items-center cursor-pointer transition-colors grid-cols-[48px_1fr] sm:grid-cols-[60px_100px_1fr_80px]"
                style={{
                  borderBottom: i < talk.chapters!.length - 1 ? "1px solid color-mix(in oklab, var(--ink) 15%, transparent)" : undefined,
                  background: activeChap === i ? "var(--sun)" : undefined,
                }}
                onMouseEnter={e => { if (activeChap !== i) e.currentTarget.style.background = "var(--wool)" }}
                onMouseLeave={e => { if (activeChap !== i) e.currentTarget.style.background = "" }}
              >
                <span className="font-display font-black text-[28px] text-center"
                  style={{ color: activeChap === i ? "var(--ink)" : "var(--barn)" }}>
                  {ch.num}
                </span>
                <div className="hidden sm:block rounded-[10px] border-[2.5px] border-ink overflow-hidden aspect-[16/10]"
                  style={{ background: ch.accent }}/>
                <div>
                  <h4 className="font-display font-black text-[18px] text-ink mb-0.5">{ch.title}</h4>
                  <div className="text-[13px] font-semibold" style={{ color: "color-mix(in oklab, var(--ink) 75%, transparent)" }}>{ch.subtitle}</div>
                  <div className="sm:hidden font-display font-black text-[13px] text-ink mt-0.5">{ch.timecode}</div>
                </div>
                <div className="hidden sm:block font-display font-black text-right text-ink">{ch.timecode}</div>
              </div>
            ))}
          </div>
        )}

        {/* ── Speaker's note (styled as blog card) ── */}
        {talk.speakerNote && (
          <article
            className="mt-7 rounded-[24px] border-[3px] border-ink p-[30px] pb-9 bg-cream shadow-xl"
          >
            <div className="flex gap-3 items-center flex-wrap mb-[14px] font-black text-[13px]" style={{ color: "color-mix(in oklab, var(--ink) 70%, transparent)" }}>
              <span className="bg-barn text-white border-2 border-ink rounded-full px-3 py-0.5 text-[12px] uppercase tracking-[.08em]">Speaker&apos;s Note</span>
              <span>By {talk.event.split(" ").slice(0, 2).join(" ")}</span>
              <span>· 6 min read</span>
            </div>
            <h2 className="font-display font-black text-ink leading-[1.05] mb-[18px]"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.05 }}>
              How we built{" "}
              <em className="italic text-barn">&ldquo;{talk.title.split(":")[0]}&rdquo;</em>{" "}
              — and what I got wrong the first time.
            </h2>
            <p className="font-semibold text-[18px] leading-[1.65] text-ink mb-4">{talk.speakerNote}</p>
            <p className="text-[16px] leading-[1.65] font-[500] text-ink mb-4">
              The talk ended up being about three things at once: the patterns themselves, the team dynamics that make you need them, and the moment you realise your types are doing work you should be doing in product design. That third thing surprised me when I found it during prep.
            </p>
            <div className="border-l-4 border-barn pl-5 my-6 font-display italic font-semibold text-[22px] text-ink leading-[1.35]">
              &ldquo;Half of the type errors we fixed were symptoms. The real problem was that the data model didn&apos;t match the domain.&rdquo;
            </div>
            <div className="flex gap-2 flex-wrap mt-7">
              {talk.tags.map(t => (
                <span key={t} className="bg-wool text-ink border-2 border-ink rounded-full px-3 py-1 font-black text-[12px]">
                  {t}
                </span>
              ))}
            </div>
          </article>
        )}

        {/* ── Transcript ── */}
        {talk.transcript && (
          <div className="mt-7 rounded-[24px] border-[3px] border-ink p-6 pb-7 bg-wool shadow-xl">
            <h3 className="font-display font-black text-[24px] text-ink mb-[18px]">
              Transcript &nbsp;
              <span className="font-hand text-[22px] font-normal" style={{ color: "var(--barn-2)" }}>
                — click a timecode to jump
              </span>
            </h3>
            {talk.transcript.map((line, i) => (
              <div key={i}
                className="grid gap-4 py-2 text-[15px] font-semibold leading-[1.5] grid-cols-[60px_1fr] sm:grid-cols-[70px_1fr]"
                style={{
                  borderBottom: i < talk.transcript!.length - 1 ? "1px dashed color-mix(in oklab, var(--ink) 18%, transparent)" : undefined,
                }}
              >
                <button
                  className="font-display font-black text-left cursor-pointer bg-transparent border-0 p-0 underline decoration-wavy decoration-barn underline-offset-[3px] hover:text-barn transition-colors"
                  style={{ color: "var(--barn-2)" }}
                  onClick={() => jumpTo(line.timecode)}
                >
                  {line.timecode}
                </button>
                <span>
                  {line.speaker && <strong className="font-black text-grass3 mr-1.5">{line.speaker}:</strong>}
                  {line.text}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ══ SIDEBAR ══ */}
      <aside className="flex flex-col gap-[22px]">

        {/* About the speaker */}
        <div className="rounded-[24px] border-[3px] border-ink p-[22px] pb-6 bg-cream2 shadow-xl">
          <div className="flex items-center gap-[14px] mb-[14px]">
            <div className="w-[60px] h-[60px] rounded-full border-[2.5px] border-ink flex-shrink-0 flex items-center justify-center font-display font-black text-[22px] text-ink bg-sun"
              style={{ boxShadow: "0 3px 0 var(--ink)" }}>
              AN
            </div>
            <div>
              <h3 className="font-display text-[22px] text-ink leading-[1]">Arun&apos;s Episodes</h3>
              <p className="font-bold text-[13px] mt-1" style={{ color: "color-mix(in oklab, var(--ink) 70%, transparent)" }}>
                Developer · speaker · sheep enthusiast
              </p>
            </div>
          </div>
          <p className="font-semibold text-[14px] leading-[1.5] mb-4" style={{ color: "color-mix(in oklab, var(--ink) 70%, transparent)" }}>
            Conference talks on TypeScript, design systems, and building things that last.
          </p>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {[["3", "Episodes"], ["2", "Events"], ["450+", "Attendees"]].map(([v, l]) => (
              <div key={l} className="bg-white border-2 border-ink rounded-[12px] p-[10px] text-center"
                style={{ boxShadow: "0 3px 0 var(--ink)" }}>
                <div className="font-display font-black text-[22px] text-ink">{v}</div>
                <div className="text-[11px] font-black uppercase tracking-[.06em]" style={{ color: "color-mix(in oklab, var(--ink) 65%, transparent)" }}>{l}</div>
              </div>
            ))}
          </div>
          <button className="block text-center w-full bg-barn text-white border-[2.5px] border-ink rounded-full py-3 font-black text-[15px] cursor-pointer hover:-translate-y-px transition-transform shadow-barn">
            ▶ Subscribe on YouTube
          </button>
        </div>

        {/* Up next */}
        <div className="rounded-[24px] border-[3px] border-ink overflow-hidden bg-wool shadow-xl">
          <div className="bg-barn text-white border-b-[3px] border-ink px-[22px] py-4 flex justify-between items-center">
            <h3 className="font-display text-[22px]">More Episodes</h3>
            <span className="bg-sun text-ink text-[12px] font-black px-3 py-0.5 rounded-full border-2 border-ink">
              {otherTalks.length} more
            </span>
          </div>
          {otherTalks.map((t, i) => (
            <div key={t.id}
              className="grid gap-[14px] p-[14px] cursor-pointer transition-colors grid-cols-[100px_1fr] sm:grid-cols-[130px_1fr]"
              style={{
                borderBottom: i < otherTalks.length - 1 ? "1px dashed color-mix(in oklab, var(--ink) 25%, transparent)" : undefined,
              }}
              onMouseEnter={e => e.currentTarget.style.background = "var(--cream-2)"}
              onMouseLeave={e => e.currentTarget.style.background = ""}
            >
              <div className="rounded-[12px] border-[2.5px] border-ink overflow-hidden relative aspect-[16/10]"
                style={{ background: t.accentColor }}>
                <span className="absolute bottom-1.5 right-1.5 bg-ink text-white text-[11px] font-black px-2 rounded">
                  {t.duration}
                </span>
              </div>
              <div>
                <h4 className="font-display font-black text-[16px] text-ink leading-[1.15] mb-1">
                  {t.title.split(":")[0]}
                </h4>
                <div className="font-bold text-[12px]" style={{ color: "color-mix(in oklab, var(--ink) 65%, transparent)" }}>
                  {t.event} · {t.year}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="rounded-[24px] border-[3px] border-ink overflow-hidden bg-sun shadow-xl">
          <div className="border-b-[3px] border-ink px-[22px] py-4 bg-sun">
            <h3 className="font-display text-[22px] text-ink">The Weekly Bleat</h3>
          </div>
          <div className="p-[18px] pb-[22px]">
            <p className="font-semibold text-[14px] leading-[1.5] mb-[14px]" style={{ color: "color-mix(in oklab, var(--ink) 75%, transparent)" }}>
              New posts and talks monthly. We won&apos;t send you four emails.
            </p>
            <form className="flex gap-2"
              onSubmit={e => {
                e.preventDefault()
                const btn = e.currentTarget.querySelector("button") as HTMLButtonElement
                btn.textContent = "Subscribed ✓"
                btn.style.background = "var(--grass-2)"
              }}
            >
              <input type="email" required placeholder="you@hilltop.farm"
                className="flex-1 border-[2.5px] border-ink rounded-full px-4 py-2.5 font-bold text-[14px] text-ink bg-white outline-none"
              />
              <button type="submit"
                className="bg-barn text-white border-[2.5px] border-ink rounded-full px-4 py-2.5 font-black text-[14px] cursor-pointer"
                style={{ boxShadow: "0 3px 0 var(--barn-2)" }}>
                Sign me up
              </button>
            </form>
          </div>
        </div>
      </aside>
    </div>
  )
}
