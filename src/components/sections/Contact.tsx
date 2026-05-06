"use client"
import { useState } from "react"
import type { PortfolioConfig } from "@/lib/types"

export function Contact({ config }: { config: PortfolioConfig }) {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div
      id="contact"
      style={{ background: "var(--sun)", borderTop: "3px solid var(--ink)", borderBottom: "3px solid var(--ink)" }}
      className="py-16 px-7"
    >
      <div className="max-w-[1280px] mx-auto grid gap-10 items-center" style={{ gridTemplateColumns: "1.2fr 1fr" }}>
        <div>
          <span
            className="font-[family-name:var(--font-caveat)] text-[30px] -rotate-2 inline-block"
          >
            ~ let&apos;s talk ~
          </span>
          <h2
            className="font-[family-name:var(--font-fraunces)] font-black"
            style={{ fontSize: "clamp(40px,5vw,56px)" }}
          >
            Get in touch.
          </h2>
          <p className="font-bold text-[17px] max-w-[460px]" style={{ color: "var(--ink)" }}>
            Working on something interesting? Have a weird idea you want to build? Or just want to say hi —
            the inbox is always open.
          </p>
          <div className="mt-4 flex gap-4 flex-wrap">
            {config.links.email && (
              <a
                href={`mailto:${config.links.email}`}
                className="font-black text-ink no-underline"
              >
                ✉ {config.links.email}
              </a>
            )}
            {config.links.github && (
              <a
                href={config.links.github}
                className="font-black text-ink no-underline"
                target="_blank" rel="noreferrer"
              >
                ↗ GitHub
              </a>
            )}
          </div>
        </div>

        <form
          onSubmit={e => { e.preventDefault(); setSubmitted(true) }}
          className="flex flex-col gap-3"
        >
          {!submitted ? (
            <>
              <input
                type="text"
                placeholder="Your name"
                required
                className="w-full border-[2px] border-ink rounded-xl px-4 py-3 font-bold text-[16px] bg-white"
                style={{ fontFamily: "inherit" }}
              />
              <input
                type="email"
                placeholder="your@email.com"
                required
                className="w-full border-[2px] border-ink rounded-xl px-4 py-3 font-bold text-[16px] bg-white"
                style={{ fontFamily: "inherit" }}
              />
              <textarea
                placeholder="What's on your mind?"
                rows={4}
                required
                className="w-full border-[2px] border-ink rounded-xl px-4 py-3 font-bold text-[16px] bg-white resize-none"
                style={{ fontFamily: "inherit" }}
              />
              <button
                type="submit"
                className="font-black text-[15px] py-3 px-6 rounded-full border-[2.5px] border-ink cursor-pointer transition-transform hover:-translate-y-0.5"
                style={{
                  background: "var(--barn)", color: "white",
                  boxShadow: "0 3px 0 var(--barn-2)",
                  fontFamily: "inherit",
                }}
              >
                Send it →
              </button>
            </>
          ) : (
            <div
              className="py-8 px-6 rounded-2xl border-[2.5px] border-ink text-center"
              style={{ background: "var(--grass)", color: "white" }}
            >
              <p className="font-[family-name:var(--font-fraunces)] font-black text-[28px] mb-1">Sent! 🎉</p>
              <p className="font-bold">I&apos;ll get back to you soon.</p>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
