"use client"
import { usePathname } from "next/navigation"
import type { PortfolioConfig } from "@/lib/types"
import { LogoMark } from "@/components/ui/LogoMark"

export function Topbar({ config }: { config: PortfolioConfig }) {
  const pathname = usePathname()

  function isActive(href: string) {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  function handleCtaClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    if (!href.startsWith("#")) return
    e.preventDefault()
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
          href="/"
          className="flex items-center gap-2.5 font-display font-black text-[26px] tracking-tight no-underline text-ink"
        >
          <LogoMark size={46} />
          {config.name}
        </a>

        <nav className="ml-auto">
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

        <a
          href={config.nav.cta.href}
          onClick={e => handleCtaClick(e, config.nav.cta.href)}
          className="font-black px-[18px] py-2.5 rounded-full no-underline text-ink border-[2.5px] border-ink bg-sun cursor-pointer"
          style={{ boxShadow: "0 3px 0 var(--sun-2), 0 6px 0 rgba(0,0,0,.1)" }}
        >
          {config.nav.cta.label}
        </a>
      </div>
    </header>
  )
}
