"use client"
import { useState, useEffect } from "react"

export function UnderConstruction() {
  const [show, setShow] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 80)
    return () => clearTimeout(t)
  }, [])

  if (dismissed) return null

  return (
    <div
      className={`uc-banner${show ? " show" : ""}`}
      role="status"
      aria-live="polite"
    >
      <div className="uc-stripes" />

      {/* 3-col grid: mascot | text | actions */}
      <div
        className="max-w-[1200px] mx-auto grid items-center gap-[22px]"
        style={{ gridTemplateColumns: "auto 1fr auto" }}
      >

        {/* Sheep in hardhat */}
        <div
          className="flex-shrink-0 relative w-[90px] h-[90px]"
          style={{
            transform: "rotate(-6deg)",
            animation: show ? "ucWiggle 2.4s ease-in-out infinite" : undefined,
            animationDelay: ".55s",
          }}
          aria-hidden="true"
        >
          <div className="uc-hardhat" />
          <svg width="90" height="90" viewBox="0 0 150 150">
            <ellipse cx="75" cy="92" rx="50" ry="34" fill="#f6efe1" stroke="#2a2418" strokeWidth="3"/>
            <circle cx="38" cy="80" r="14" fill="#f6efe1" stroke="#2a2418" strokeWidth="3"/>
            <circle cx="50" cy="66" r="14" fill="#f6efe1" stroke="#2a2418" strokeWidth="3"/>
            <circle cx="100" cy="66" r="14" fill="#f6efe1" stroke="#2a2418" strokeWidth="3"/>
            <circle cx="112" cy="80" r="14" fill="#f6efe1" stroke="#2a2418" strokeWidth="3"/>
            <ellipse cx="75" cy="100" rx="22" ry="22" fill="#3a3024" stroke="#2a2418" strokeWidth="3"/>
            <ellipse cx="68" cy="96" rx="4" ry="5" fill="#fbf3df"/>
            <ellipse cx="82" cy="96" rx="4" ry="5" fill="#fbf3df"/>
            <circle cx="68" cy="97" r="2" fill="#2a2418"/>
            <circle cx="82" cy="97" r="2" fill="#2a2418"/>
            <path d="M 70 108 Q 75 112 80 108" stroke="#2a2418" strokeWidth="2" fill="none" strokeLinecap="round"/>
          </svg>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-1 min-w-0">
          <span
            className="font-hand text-[22px] text-barn leading-none self-start"
            style={{ transform: "rotate(-1deg)" }}
          >
            ~ pardon the mess ~
          </span>
          <h2
            className="font-display font-black text-ink leading-[1.1]"
            style={{ fontSize: "clamp(22px, 2.4vw, 30px)", letterSpacing: "-0.015em" }}
          >
            Our farm is <em className="italic text-barn">under construction.</em>
          </h2>
          <p className="text-[14px] font-semibold text-ink/70 leading-[1.4] max-w-[560px]">
            We&apos;re rebuilding fences, painting barns, and teaching the sheep new tricks.
            Some pages may be a bit dusty — check back next week for the full opening.
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-[10px] flex-shrink-0">
          {/* Tape badge */}
          <span
            className="hidden md:inline-flex items-center gap-2 bg-ink text-cream px-[14px] py-[7px] rounded-[6px] font-mono text-[11px] font-bold tracking-[.15em] uppercase border-[2.5px] border-ink"
            style={{ transform: "rotate(1.5deg)" }}
          >
            <span
              className="w-2 h-2 rounded-full bg-barn"
              style={{ animation: "ucBlink 1.6s ease-in-out infinite" }}
            />
            Building · v0.4
          </span>

          {/* Close */}
          <button
            className="w-[38px] h-[38px] bg-white border-[2.5px] border-ink rounded-full inline-flex items-center justify-center cursor-pointer"
            style={{ boxShadow: "0 3px 0 var(--wool-shadow)", transition: "transform .12s ease" }}
            onClick={() => setDismissed(true)}
            aria-label="Dismiss banner"
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-2px) rotate(8deg)"
              e.currentTarget.style.background = "var(--cream-2)"
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = ""
              e.currentTarget.style.background = "white"
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#2a2418" strokeWidth="2.5" strokeLinecap="round">
              <path d="M3 3 L11 11 M11 3 L3 11"/>
            </svg>
          </button>
        </div>

      </div>
    </div>
  )
}
