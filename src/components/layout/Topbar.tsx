"use client"
import { useState, useEffect } from "react"
import type { PortfolioConfig } from "@/lib/types"

/* Sheep face logo mark */
function LogoMark() {
  return (
    <span
      className="w-[46px] h-[46px] rounded-full relative flex-shrink-0"
      style={{
        background: "var(--wool)",
        boxShadow: "inset -4px -5px 0 var(--wool-shadow), 0 2px 0 var(--hoof)",
      }}
    >
      <span className="absolute w-2 h-2 rounded-full bg-ink top-[18px] left-[14px]" />
      <span className="absolute w-2 h-2 rounded-full bg-ink top-[18px] left-[24px]" />
      <span
        className="absolute w-3.5 h-3.5 rounded-full"
        style={{ background: "var(--wool)", boxShadow: "inset -2px -2px 0 var(--wool-shadow)", top: -4, left: 10 }}
      />
      <span
        className="absolute w-3.5 h-3.5 rounded-full"
        style={{ background: "var(--wool)", boxShadow: "inset -2px -2px 0 var(--wool-shadow)", top: -6, left: 22 }}
      />
      <span
        className="absolute w-3.5 h-3.5 rounded-full"
        style={{ background: "var(--wool)", boxShadow: "inset -2px -2px 0 var(--wool-shadow)", top: -2, left: 32 }}
      />
    </span>
  )
}

export function Topbar({ config }: { config: PortfolioConfig }) {
  const [active, setActive] = useState("#hero")

  useEffect(() => {
    const handler = () => {
      const sections = config.nav.links.map(l => l.href.replace("#", ""))
      for (const id of sections.slice().reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(`#${id}`)
          break
        }
      }
    }
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [config.nav.links])

  function scrollTo(href: string) {
    if (!href.startsWith("#")) return
    const el = document.getElementById(href.slice(1))
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" })
  }

  return (
    <header
      className="sticky top-0 z-40 border-b-2 border-dashed"
      style={{
        background: "color-mix(in oklab, var(--cream) 85%, transparent)",
        backdropFilter: "blur(8px)",
        borderColor: "color-mix(in oklab, var(--ink) 15%, transparent)",
      }}
    >
      <div className="max-w-[1280px] mx-auto flex items-center gap-7 px-7 py-3.5">
        <a
          href="#hero"
          onClick={e => { e.preventDefault(); scrollTo("#hero") }}
          className="flex items-center gap-2.5 font-[family-name:var(--font-fraunces)] font-black text-[26px] tracking-tight no-underline text-ink"
        >
          <LogoMark />
          {config.name}
        </a>

        <nav className="ml-auto">
          <ul className="list-none flex gap-1.5 p-0 m-0">
            {config.nav.links.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={e => { e.preventDefault(); scrollTo(link.href) }}
                  className="inline-block px-4 py-2.5 rounded-full font-black text-[15px] no-underline text-ink transition-[transform,background] duration-[120ms] hover:bg-cream2 hover:-translate-y-0.5 hover:-rotate-1"
                  style={active === link.href ? { background: "var(--barn)", color: "white" } : {}}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={config.nav.cta.href}
          onClick={e => { e.preventDefault(); scrollTo(config.nav.cta.href) }}
          className="font-black px-[18px] py-2.5 rounded-full no-underline text-ink border-2 border-ink"
          style={{ background: "var(--sun)", boxShadow: "0 3px 0 var(--sun-2), 0 6px 0 rgba(0,0,0,.1)" }}
        >
          {config.nav.cta.label}
        </a>
      </div>
    </header>
  )
}
