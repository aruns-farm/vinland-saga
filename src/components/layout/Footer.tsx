import type { PortfolioConfig } from "@/lib/types"

function LogoMark() {
  return (
    <span
      className="w-[46px] h-[46px] rounded-full relative flex-shrink-0 inline-block"
      style={{
        background: "var(--wool)",
        boxShadow: "inset -4px -5px 0 var(--wool-shadow), 0 2px 0 var(--hoof)",
      }}
    >
      <span className="absolute w-2 h-2 rounded-full bg-cream top-[18px] left-[14px]" />
      <span className="absolute w-2 h-2 rounded-full bg-cream top-[18px] left-[24px]" />
    </span>
  )
}

export function Footer({ config }: { config: PortfolioConfig }) {
  return (
    <footer style={{ background: "var(--ink)", color: "var(--cream)" }} className="pt-12 pb-6 px-7">
      <div className="max-w-[1280px] mx-auto grid gap-10" style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr" }}>
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <LogoMark />
            <span
              className="font-[family-name:var(--font-fraunces)] font-black text-[26px] tracking-tight"
              style={{ color: "var(--cream)" }}
            >
              {config.name}
            </span>
          </div>
          <p className="text-[14px] max-w-xs font-semibold" style={{ opacity: 0.7 }}>
            {config.footer.tagline}
          </p>
        </div>

        {config.footer.columns.map(col => (
          <div key={col.heading}>
            <h4
              className="font-[family-name:var(--font-fraunces)] text-[18px] mb-3.5"
              style={{ color: "var(--sun)" }}
            >
              {col.heading}
            </h4>
            {col.links.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="block font-semibold py-1 no-underline"
                style={{ color: "var(--cream)", opacity: 0.8 }}
              >
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div
        className="max-w-[1280px] mx-auto mt-8 pt-5 flex justify-between text-[12px]"
        style={{ borderTop: "1px solid rgba(255,255,255,.15)", opacity: 0.6 }}
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
