import type { HeroConfig } from "@/lib/types"
import { Button } from "@/components/ui/Button"

/* Parse *word* → <em>word</em> */
function parseHeadline(text: string) {
  const parts = text.split(/(\*[^*]+\*)/)
  return parts.map((p, i) =>
    p.startsWith("*") ? <em key={i} style={{ fontStyle: "italic", color: "var(--barn)" }}>{p.slice(1, -1)}</em> : p
  )
}

/* Animated SVG sun */
function Sun() {
  return (
    <div
      className="absolute"
      style={{
        right: 120, top: 60, width: 130, height: 130, borderRadius: "50%",
        background: "var(--sun)",
        boxShadow: "0 0 0 14px color-mix(in oklab, var(--sun) 40%, transparent), 0 0 0 28px color-mix(in oklab, var(--sun) 20%, transparent)",
        animation: "spin 40s linear infinite",
      }}
      aria-hidden="true"
    />
  )
}

/* Drifting cloud */
function Cloud({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute"
      style={{
        background: "white", borderRadius: 999,
        boxShadow: "inset -4px -6px 0 rgba(0,0,0,.06)",
        ...style,
      }}
      aria-hidden="true"
    />
  )
}

/* Person SVG — represents the portfolio owner */
function PersonSVG() {
  return (
    <svg width="180" height="220" viewBox="0 0 180 220" aria-hidden="true">
      {/* body */}
      <rect x="60" y="100" width="60" height="80" rx="6" fill="#4d6d99" stroke="#2a2418" strokeWidth="3" />
      {/* head */}
      <circle cx="90" cy="76" r="32" fill="#ffd9b0" stroke="#2a2418" strokeWidth="3" />
      {/* hair */}
      <path d="M 62 68 Q 62 42 90 40 Q 118 42 118 68 Q 110 54 90 52 Q 70 54 62 68 Z" fill="#2a2418" />
      {/* eyes */}
      <circle cx="80" cy="76" r="3" fill="#2a2418" />
      <circle cx="100" cy="76" r="3" fill="#2a2418" />
      {/* smile */}
      <path d="M 82 88 Q 90 95 98 88" stroke="#2a2418" strokeWidth="2.5" fill="none" />
      {/* arms */}
      <rect x="20" y="100" width="44" height="16" rx="8" fill="#4d6d99" stroke="#2a2418" strokeWidth="3" />
      <rect x="116" y="100" width="44" height="16" rx="8" fill="#4d6d99" stroke="#2a2418" strokeWidth="3" />
      {/* laptop */}
      <rect x="24" y="116" width="36" height="24" rx="4" fill="#2a2418" stroke="#2a2418" strokeWidth="2" />
      <rect x="26" y="118" width="32" height="18" rx="2" fill="#bce3ef" />
      {/* code lines on laptop */}
      <line x1="29" y1="122" x2="48" y2="122" stroke="#2a2418" strokeWidth="2" strokeLinecap="round" />
      <line x1="29" y1="127" x2="44" y2="127" stroke="#4d8836" strokeWidth="2" strokeLinecap="round" />
      <line x1="29" y1="132" x2="40" y2="132" stroke="#c94a3a" strokeWidth="2" strokeLinecap="round" />
      {/* legs */}
      <rect x="68" y="178" width="18" height="36" rx="4" fill="#2a2418" stroke="#2a2418" strokeWidth="2" />
      <rect x="94" y="178" width="18" height="36" rx="4" fill="#2a2418" stroke="#2a2418" strokeWidth="2" />
    </svg>
  )
}

/* Barn SVG from original design */
function BarnSVG() {
  return (
    <svg className="absolute" style={{ left: 48, bottom: 80, width: 220, height: 220 }} viewBox="0 0 220 220" aria-hidden="true">
      <polygon points="20,90 110,20 200,90" fill="#c94a3a" stroke="#2a2418" strokeWidth="4" />
      <polygon points="25,90 110,28 195,90" fill="none" stroke="#a23a2c" strokeWidth="2" />
      <rect x="30" y="90" width="160" height="110" fill="#e16451" stroke="#2a2418" strokeWidth="4" />
      <line x1="30" y1="90" x2="190" y2="200" stroke="#fbf3df" strokeWidth="4" />
      <line x1="190" y1="90" x2="30" y2="200" stroke="#fbf3df" strokeWidth="4" />
      <rect x="30" y="90" width="160" height="110" fill="none" stroke="#fbf3df" strokeWidth="4" />
      <rect x="90" y="140" width="40" height="60" fill="#2a2418" />
      <circle cx="122" cy="170" r="2" fill="#f6c14b" />
      <rect x="98" y="100" width="24" height="24" fill="#fbf3df" stroke="#2a2418" strokeWidth="3" />
      <line x1="110" y1="100" x2="110" y2="124" stroke="#2a2418" strokeWidth="2" />
      <line x1="98" y1="112" x2="122" y2="112" stroke="#2a2418" strokeWidth="2" />
      <line x1="110" y1="0" x2="110" y2="28" stroke="#2a2418" strokeWidth="3" />
      <polygon points="110,6 128,12 110,18" fill="#2a2418" />
    </svg>
  )
}

/* Speech bubble */
function SpeechBubble({ text }: { text: string }) {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        bottom: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%) rotate(-4deg)",
        background: "white", border: "2.5px solid var(--ink)",
        padding: "6px 14px", borderRadius: 18,
        fontFamily: "var(--font-caveat, 'Caveat', cursive)", fontSize: 22, whiteSpace: "nowrap",
        boxShadow: "0 3px 0 var(--wool-shadow)",
      }}
    >
      {text}
      <span
        style={{
          content: "", position: "absolute", bottom: -9, left: "30%",
          width: 14, height: 14, background: "white",
          borderRight: "2.5px solid var(--ink)", borderBottom: "2.5px solid var(--ink)",
          transform: "rotate(45deg)", display: "block",
        }}
      />
    </div>
  )
}

export function Hero({ config, name }: { config: HeroConfig; name: string }) {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{
        height: 640,
        background: "linear-gradient(to bottom, var(--sky) 0%, var(--sky-2) 55%, var(--grass) 55%, var(--grass-2) 100%)",
      }}
    >
      <Sun />
      <Cloud style={{ top: 90, left: -40, width: 180, height: 44, animation: "drift 60s linear infinite" }} />
      <Cloud style={{ top: 40, left: 380, width: 120, height: 32, animation: "drift 80s linear infinite reverse" }} />

      <div className="max-w-[1280px] mx-auto h-full relative px-7 pt-12">
        {/* Copy */}
        <div className="relative z-[3] max-w-[640px]">
          <span
            className="font-[family-name:var(--font-caveat)] text-[32px] mb-2.5 -rotate-2 inline-block px-3.5 py-0.5 rounded-lg border-2 border-ink"
            style={{ background: "var(--sun)" }}
          >
            {config.kicker}
          </span>
          <h1
            className="font-[family-name:var(--font-fraunces)] font-black leading-[.9] text-ink mt-2"
            style={{ fontSize: "clamp(56px, 8vw, 100px)", textShadow: "0 3px 0 rgba(0,0,0,.06)", maxWidth: 620 }}
          >
            {parseHeadline(config.headline)}
          </h1>
          <p
            style={{
              fontWeight: 700, fontSize: 18, maxWidth: 480, margin: "20px 0 0",
              background: "color-mix(in oklab, var(--cream) 92%, transparent)",
              padding: "14px 18px", borderRadius: 14, border: "2px solid var(--ink)",
              boxShadow: "0 3px 0 var(--wool-shadow)", color: "var(--ink)", display: "inline-block",
            }}
          >
            {config.subtext}
          </p>
          <div className="mt-5 flex gap-3 flex-wrap">
            <Button variant="primary" href={config.primaryCta.href}>{config.primaryCta.label}</Button>
            <Button variant="ghost"   href={config.secondaryCta.href}>{config.secondaryCta.label}</Button>
          </div>
        </div>

        {/* Barn */}
        <BarnSVG />

        {/* Person character */}
        <div
          className="absolute group cursor-pointer"
          style={{ right: 180, bottom: 40, transition: "transform .3s cubic-bezier(.2,1.3,.4,1)" }}
        >
          <SpeechBubble text={`Hi! I'm ${name.split(" ")[0]}.`} />
          <PersonSVG />
        </div>

        {/* Hills */}
        <div className="absolute left-0 right-0 bottom-0 h-[360px] pointer-events-none" aria-hidden="true">
          <div className="absolute bottom-0 rounded-[50%_50%_0_0/70%_70%_0_0]"
            style={{ left: "-8%", width: "70%", height: 220, background: "var(--grass)" }} />
          <div className="absolute bottom-0 rounded-[50%_50%_0_0/70%_70%_0_0]"
            style={{ right: "-10%", width: "60%", height: 180, background: "color-mix(in oklab, var(--grass) 80%, black 6%)" }} />
          <div className="absolute"
            style={{
              left: "30%", bottom: 110, width: 600, height: 60, borderRadius: 0,
              background: `repeating-linear-gradient(to right, transparent 0, transparent 40px, var(--wool-shadow) 40px, var(--wool-shadow) 46px, transparent 46px, transparent 80px),
                           linear-gradient(to bottom, transparent 0, transparent 18px, var(--wool-shadow) 18px, var(--wool-shadow) 26px, transparent 26px, transparent 38px, var(--wool-shadow) 38px, var(--wool-shadow) 46px, transparent 46px)`,
              opacity: 0.9,
            }}
          />
        </div>
      </div>
    </section>
  )
}
