"use client"
import { useState } from "react"
import type { PortfolioConfig } from "@/lib/types"
import { Input, Textarea } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"

export function Contact({ config }: { config: PortfolioConfig }) {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div
      id="contact"
      className="py-16 px-7 bg-sun"
      style={{ borderTop: "3px solid var(--ink)", borderBottom: "3px solid var(--ink)" }}
    >
      <div className="max-w-[1280px] mx-auto grid gap-10 items-center grid-cols-1 md:grid-cols-[1.2fr_1fr]">
        <div>
          <span className="font-hand text-[30px] -rotate-2 inline-block">
            ~ let&apos;s talk ~
          </span>
          <h2
            className="font-display font-black text-ink"
            style={{ fontSize: "clamp(40px,5vw,56px)" }}
          >
            Get in touch.
          </h2>
          <p className="font-bold text-[17px] max-w-[460px] text-ink">
            Working on something interesting? Have a weird idea you want to build? Or just want to say hi —
            the inbox is always open.
          </p>
          <div className="mt-4 flex gap-4 flex-wrap">
            {config.links.email && (
              <a href={`mailto:${config.links.email}`} className="font-black text-ink no-underline">
                ✉ {config.links.email}
              </a>
            )}
            {config.links.github && (
              <a href={config.links.github} className="font-black text-ink no-underline" target="_blank" rel="noreferrer">
                ↗ GitHub
              </a>
            )}
          </div>
        </div>

        <form onSubmit={e => { e.preventDefault(); setSubmitted(true) }} className="flex flex-col gap-3">
          {!submitted ? (
            <>
              <Input type="text"   placeholder="Your name"          required />
              <Input type="email"  placeholder="your@email.com"     required />
              <Textarea            placeholder="What's on your mind?" rows={4} required />
              <Button type="submit" variant="primary">Send it →</Button>
            </>
          ) : (
            <div className="py-8 px-6 rounded-2xl border-[2.5px] border-ink text-center bg-grass text-white">
              <p className="font-display font-black text-[28px] mb-1">Sent! 🎉</p>
              <p className="font-bold">I&apos;ll get back to you soon.</p>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
