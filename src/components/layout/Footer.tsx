import type { PortfolioConfig } from "@/lib/types"
import { LogoMark } from "@/components/ui/LogoMark"

export function Footer({ config }: { config: PortfolioConfig }) {
  return (
    <footer className="bg-ink text-cream pt-12 pb-6 px-7">
      <div className="max-w-[1280px] mx-auto grid gap-10" style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr" }}>
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <LogoMark size={38} />
            <span className="font-display font-black text-[26px] tracking-tight text-cream">
              {config.name}
            </span>
          </div>
          <p className="text-[14px] max-w-xs font-semibold opacity-70">
            {config.footer.tagline}
          </p>
        </div>

        {config.footer.columns.map(col => (
          <div key={col.heading}>
            <h4 className="font-display text-[18px] mb-3.5 text-sun">
              {col.heading}
            </h4>
            {col.links.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="block font-semibold py-1 no-underline text-cream opacity-80 hover:text-sun hover:opacity-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div
        className="max-w-[1280px] mx-auto mt-8 pt-5 flex justify-between text-[12px] opacity-60"
        style={{ borderTop: "1px dashed rgba(255,255,255,.2)" }}
      >
        <span>{config.footer.legal}</span>
        <span>Built at the farm ·{" "}
          <a href="https://ketils.farm" className="no-underline hover:underline" style={{ color: "inherit" }}>
            ketils.farm
          </a>
        </span>
      </div>
    </footer>
  )
}
