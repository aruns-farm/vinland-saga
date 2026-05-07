"use client"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import type { PortfolioConfig } from "@/lib/types"
import { LogoMark } from "@/components/ui/LogoMark"

export function Topbar({ config }: { config: PortfolioConfig }) {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  function isActive(href: string) {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  function handleCtaClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    if (!href.startsWith("#")) return
    e.preventDefault()
    setMenuOpen(false)
    const el = document.getElementById(href.slice(1))
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" })
  }

  return (
    <>
      <header
        className="sticky top-0 z-50 border-b-2 border-dashed"
        style={{
          background: "color-mix(in oklab, var(--cream) 85%, transparent)",
          backdropFilter: "blur(8px)",
          borderColor: "color-mix(in oklab, var(--ink) 15%, transparent)",
        }}
      >
        <div className="max-w-[1280px] mx-auto flex items-center gap-7 px-7 py-3.5">
          <a
            href="/"
            className="flex items-center gap-2.5 font-display font-black text-[26px] tracking-tight no-underline text-ink"
          >
            <LogoMark size={46} />
            {config.name}
          </a>

          {/* Desktop nav */}
          <nav className="ml-auto hidden md:block">
            <ul className="list-none flex gap-1.5 p-0 m-0">
              {config.nav.links.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-block px-4 py-2.5 rounded-full font-black text-[15px] no-underline text-ink transition-[transform,background] duration-[120ms] hover:bg-cream2 hover:-translate-y-0.5 hover:-rotate-1"
                    style={isActive(link.href) ? { background: "var(--barn)", color: "white" } : {}}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <a
            href={config.nav.cta.href}
            onClick={e => handleCtaClick(e, config.nav.cta.href)}
            className="hidden md:inline-block font-black px-[18px] py-2.5 rounded-full no-underline text-ink border-[2.5px] border-ink bg-sun cursor-pointer"
            style={{ boxShadow: "0 3px 0 var(--sun-2), 0 6px 0 rgba(0,0,0,.1)" }}
          >
            {config.nav.cta.label}
          </a>

          {/* Mobile hamburger */}
          <button
            className="ml-auto md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[6px] cursor-pointer bg-transparent border-none p-0"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(v => !v)}
          >
            <span
              className="block h-[2.5px] w-6 bg-ink rounded-full transition-transform duration-300 origin-center"
              style={{ transform: menuOpen ? "translateY(8.5px) rotate(45deg)" : "" }}
            />
            <span
              className="block h-[2.5px] w-6 bg-ink rounded-full transition-opacity duration-200"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block h-[2.5px] w-6 bg-ink rounded-full transition-transform duration-300 origin-center"
              style={{ transform: menuOpen ? "translateY(-8.5px) rotate(-45deg)" : "" }}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay — clips from top, reveals downward */}
      <div
        className="fixed inset-0 z-40 md:hidden flex flex-col"
        style={{
          background: "var(--cream)",
          clipPath: menuOpen ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
          transition: "clip-path 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        {/* Spacer matching header height */}
        <div className="h-[74px] flex-shrink-0" />
        <div
          className="mx-7 mb-5"
          style={{ borderTop: "2px dashed color-mix(in oklab, var(--ink) 20%, transparent)" }}
        />

        {/* Nav links */}
        <nav className="px-7 flex flex-col gap-1 flex-1">
          {config.nav.links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="font-display font-black text-[32px] text-ink no-underline py-2 leading-tight hover:text-barn transition-colors"
              style={isActive(link.href) ? { color: "var(--barn)" } : {}}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile CTA */}
        <div className="px-7 pb-10 pt-6">
          <a
            href={config.nav.cta.href}
            onClick={e => handleCtaClick(e, config.nav.cta.href)}
            className="block text-center font-black text-[17px] px-[18px] py-4 rounded-full no-underline text-ink border-[2.5px] border-ink bg-sun shadow-sun"
          >
            {config.nav.cta.label}
          </a>
        </div>
      </div>
    </>
  )
}
