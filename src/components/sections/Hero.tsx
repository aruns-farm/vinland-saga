import type { HeroConfig } from "@/lib/types"
import { Button } from "@/components/ui/Button"
import { SpeechBubble } from "@/components/ui/SpeechBubble"
import { cn } from "@/lib/cn"

function parseHeadline(text: string) {
  const parts = text.split(/(\*[^*]+\*)/)
  return parts.map((p, i) =>
    p.startsWith("*")
      ? <em key={i} className="not-italic text-barn italic">{p.slice(1, -1)}</em>
      : p
  )
}

function Sun() {
  return (
    <div
      className="absolute rounded-full right-[120px] top-[60px] w-[130px] h-[130px] bg-sun"
      style={{
        boxShadow: "0 0 0 14px color-mix(in oklab, var(--sun) 40%, transparent), 0 0 0 28px color-mix(in oklab, var(--sun) 20%, transparent)",
        animation: "spin 40s linear infinite",
      }}
      aria-hidden="true"
    />
  )
}

function Cloud({ className, style }: { className: string; style?: React.CSSProperties }) {
  return (
    <div
      className={cn("absolute rounded-pill bg-white", className)}
      style={{ boxShadow: "inset -4px -6px 0 rgba(0,0,0,.06)", ...style }}
      aria-hidden="true"
    />
  )
}

function BarnSVG() {
  return (
    <svg className="absolute left-[48px] bottom-[80px] w-[220px] h-[220px]" viewBox="0 0 220 220" aria-hidden="true">
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

function PersonSVG() {
  return (
    <svg width="180" height="220" viewBox="0 0 180 220" aria-hidden="true">
      <rect x="60" y="100" width="60" height="80" rx="6" fill="#4d6d99" stroke="#2a2418" strokeWidth="3" />
      <circle cx="90" cy="76" r="32" fill="#ffd9b0" stroke="#2a2418" strokeWidth="3" />
      <path d="M 62 68 Q 62 42 90 40 Q 118 42 118 68 Q 110 54 90 52 Q 70 54 62 68 Z" fill="#2a2418" />
      <circle cx="80" cy="76" r="3" fill="#2a2418" />
      <circle cx="100" cy="76" r="3" fill="#2a2418" />
      <path d="M 82 88 Q 90 95 98 88" stroke="#2a2418" strokeWidth="2.5" fill="none" />
      <rect x="20" y="100" width="44" height="16" rx="8" fill="#4d6d99" stroke="#2a2418" strokeWidth="3" />
      <rect x="116" y="100" width="44" height="16" rx="8" fill="#4d6d99" stroke="#2a2418" strokeWidth="3" />
      <rect x="24" y="116" width="36" height="24" rx="4" fill="#2a2418" stroke="#2a2418" strokeWidth="2" />
      <rect x="26" y="118" width="32" height="18" rx="2" fill="#bce3ef" />
      <line x1="29" y1="122" x2="48" y2="122" stroke="#2a2418" strokeWidth="2" strokeLinecap="round" />
      <line x1="29" y1="127" x2="44" y2="127" stroke="#4d8836" strokeWidth="2" strokeLinecap="round" />
      <line x1="29" y1="132" x2="40" y2="132" stroke="#c94a3a" strokeWidth="2" strokeLinecap="round" />
      <rect x="68" y="178" width="18" height="36" rx="4" fill="#2a2418" stroke="#2a2418" strokeWidth="2" />
      <rect x="94" y="178" width="18" height="36" rx="4" fill="#2a2418" stroke="#2a2418" strokeWidth="2" />
    </svg>
  )
}

/* Woolly — classic white sheep, right-facing */
function WoollyShape() {
  return (
    <svg width="120" height="94" viewBox="0 0 120 94" aria-hidden="true">
      <circle cx="50" cy="46" r="24" fill="#f6efe1" stroke="#2a2418" strokeWidth="2.5"/>
      <circle cx="30" cy="52" r="17" fill="#f6efe1" stroke="#2a2418" strokeWidth="2.5"/>
      <circle cx="70" cy="52" r="17" fill="#f6efe1" stroke="#2a2418" strokeWidth="2.5"/>
      <circle cx="36" cy="33" r="15" fill="#f6efe1" stroke="#2a2418" strokeWidth="2.5"/>
      <circle cx="64" cy="33" r="15" fill="#f6efe1" stroke="#2a2418" strokeWidth="2.5"/>
      <circle cx="50" cy="26" r="13" fill="#f6efe1" stroke="#2a2418" strokeWidth="2.5"/>
      <ellipse cx="88" cy="54" rx="15" ry="13" fill="#3a3024" stroke="#2a2418" strokeWidth="2.5"/>
      <ellipse cx="83" cy="50" rx="3.5" ry="4" fill="#fbf3df"/>
      <ellipse cx="93" cy="50" rx="3.5" ry="4" fill="#fbf3df"/>
      <circle cx="84" cy="51" r="1.8" fill="#2a2418"/>
      <circle cx="94" cy="51" r="1.8" fill="#2a2418"/>
      <ellipse cx="88" cy="61" rx="7" ry="5" fill="#5b4a38"/>
      <rect x="34" y="65" width="9" height="25" rx="4" fill="#3a3024" stroke="#2a2418" strokeWidth="2"/>
      <rect x="46" y="67" width="9" height="23" rx="4" fill="#3a3024" stroke="#2a2418" strokeWidth="2"/>
      <rect x="60" y="67" width="9" height="23" rx="4" fill="#3a3024" stroke="#2a2418" strokeWidth="2"/>
      <rect x="72" y="65" width="9" height="25" rx="4" fill="#3a3024" stroke="#2a2418" strokeWidth="2"/>
    </svg>
  )
}

/* Pip — smaller adventurous sheep, right-facing */
function PipShape() {
  return (
    <svg width="90" height="70" viewBox="0 0 120 94" aria-hidden="true">
      <circle cx="50" cy="46" r="24" fill="#f6efe1" stroke="#2a2418" strokeWidth="2.5"/>
      <circle cx="30" cy="52" r="17" fill="#f6efe1" stroke="#2a2418" strokeWidth="2.5"/>
      <circle cx="70" cy="52" r="17" fill="#f6efe1" stroke="#2a2418" strokeWidth="2.5"/>
      <circle cx="36" cy="33" r="15" fill="#f6efe1" stroke="#2a2418" strokeWidth="2.5"/>
      <circle cx="64" cy="33" r="15" fill="#f6efe1" stroke="#2a2418" strokeWidth="2.5"/>
      <circle cx="50" cy="26" r="13" fill="#f6efe1" stroke="#2a2418" strokeWidth="2.5"/>
      <ellipse cx="88" cy="54" rx="15" ry="13" fill="#3a3024" stroke="#2a2418" strokeWidth="2.5"/>
      <ellipse cx="83" cy="50" rx="3.5" ry="4" fill="#fbf3df"/>
      <ellipse cx="93" cy="50" rx="3.5" ry="4" fill="#fbf3df"/>
      <circle cx="84" cy="51" r="1.8" fill="#2a2418"/>
      <circle cx="94" cy="51" r="1.8" fill="#2a2418"/>
      <ellipse cx="88" cy="61" rx="7" ry="5" fill="#5b4a38"/>
      <rect x="34" y="65" width="9" height="25" rx="4" fill="#3a3024" stroke="#2a2418" strokeWidth="2"/>
      <rect x="46" y="67" width="9" height="23" rx="4" fill="#3a3024" stroke="#2a2418" strokeWidth="2"/>
      <rect x="60" y="67" width="9" height="23" rx="4" fill="#3a3024" stroke="#2a2418" strokeWidth="2"/>
      <rect x="72" y="65" width="9" height="25" rx="4" fill="#3a3024" stroke="#2a2418" strokeWidth="2"/>
    </svg>
  )
}

/* Rosie — pink-tinted wool, left-facing (mirrored) */
function RosieShape() {
  return (
    <svg width="110" height="88" viewBox="0 0 120 94" aria-hidden="true">
      <g transform="scale(-1,1) translate(-120,0)">
        <circle cx="50" cy="46" r="24" fill="#f6dfe8" stroke="#2a2418" strokeWidth="2.5"/>
        <circle cx="30" cy="52" r="17" fill="#f6dfe8" stroke="#2a2418" strokeWidth="2.5"/>
        <circle cx="70" cy="52" r="17" fill="#f6dfe8" stroke="#2a2418" strokeWidth="2.5"/>
        <circle cx="36" cy="33" r="15" fill="#f6dfe8" stroke="#2a2418" strokeWidth="2.5"/>
        <circle cx="64" cy="33" r="15" fill="#f6dfe8" stroke="#2a2418" strokeWidth="2.5"/>
        <circle cx="50" cy="26" r="13" fill="#f6dfe8" stroke="#2a2418" strokeWidth="2.5"/>
        <ellipse cx="88" cy="54" rx="15" ry="13" fill="#3a3024" stroke="#2a2418" strokeWidth="2.5"/>
        <ellipse cx="83" cy="50" rx="3.5" ry="4" fill="#fbf3df"/>
        <ellipse cx="93" cy="50" rx="3.5" ry="4" fill="#fbf3df"/>
        <circle cx="84" cy="51" r="1.8" fill="#2a2418"/>
        <circle cx="94" cy="51" r="1.8" fill="#2a2418"/>
        <ellipse cx="88" cy="61" rx="7" ry="5" fill="#5b4a38"/>
        <rect x="34" y="65" width="9" height="25" rx="4" fill="#3a3024" stroke="#2a2418" strokeWidth="2"/>
        <rect x="46" y="67" width="9" height="23" rx="4" fill="#3a3024" stroke="#2a2418" strokeWidth="2"/>
        <rect x="60" y="67" width="9" height="23" rx="4" fill="#3a3024" stroke="#2a2418" strokeWidth="2"/>
        <rect x="72" y="65" width="9" height="25" rx="4" fill="#3a3024" stroke="#2a2418" strokeWidth="2"/>
      </g>
    </svg>
  )
}

export function Hero({ config, name }: { config: HeroConfig; name: string }) {
  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-[520px] sm:h-[760px]"
      style={{
        background: "linear-gradient(to bottom, var(--sky) 0%, var(--sky-2) 55%, var(--grass) 55%, var(--grass-2) 100%)",
      }}
    >
      <div className="hidden sm:block"><Sun /></div>
      <Cloud className="top-[90px] -left-[40px] w-[180px] h-[44px]" style={{ animation: "drift 60s linear infinite" }} />
      <Cloud className="top-[40px] left-[380px] w-[120px] h-[32px]" style={{ animation: "drift 80s linear infinite reverse" }} />

      <div className="max-w-[1280px] mx-auto sm:h-full relative px-7 pt-12 pb-20 sm:pb-0">
        {/* Copy */}
        <div className="relative z-[3] max-w-[640px]">
          <span className="font-hand text-[32px] mb-2.5 -rotate-2 inline-block px-3.5 py-0.5 rounded-lg border-2 border-ink bg-sun">
            {config.kicker}
          </span>
          <h1
            className="font-display font-black leading-[.9] text-ink mt-2 text-[clamp(44px,8vw,100px)] max-w-[620px]"
            style={{ textShadow: "0 3px 0 rgba(0,0,0,.06)" }}
          >
            {parseHeadline(config.headline)}
          </h1>
          <p
            className="font-semibold text-[18px] text-ink inline-block mt-5 rounded-[14px] border-2 border-ink shadow-sm max-w-[480px] px-[18px] py-[14px]"
            style={{ background: "color-mix(in oklab, var(--cream) 92%, transparent)" }}
          >
            {config.subtext}
          </p>
          <div className="mt-5 flex gap-3 flex-wrap">
            <Button variant="primary" href={config.primaryCta.href}>{config.primaryCta.label}</Button>
            <Button variant="ghost"   href={config.secondaryCta.href}>{config.secondaryCta.label}</Button>
          </div>
        </div>

        <div className="hidden sm:block">
          <BarnSVG />
        </div>

        {/* Sheep characters — rendered before hills so feet appear in grass */}
        <div className="hidden sm:block char-hover absolute left-[285px] bottom-[68px]" aria-label="Woolly">
          <div className="char-speech"><SpeechBubble rotate={-3}>Clean code! 🐑</SpeechBubble></div>
          <WoollyShape />
        </div>

        <div className="hidden sm:block char-hover absolute left-[440px] bottom-[63px]" aria-label="Pip">
          <div className="char-speech"><SpeechBubble rotate={2} variant="sun">Ship it! 🚀</SpeechBubble></div>
          <PipShape />
        </div>

        <div className="hidden sm:block char-hover absolute right-[350px] bottom-[65px]" aria-label="Rosie">
          <div className="char-speech"><SpeechBubble rotate={-2}>Good design ✨</SpeechBubble></div>
          <RosieShape />
        </div>

        {/* Arun — person character */}
        <div className="hidden sm:block char-hover absolute right-[180px] bottom-[40px]">
          <div className="char-speech">
            <SpeechBubble rotate={-4}>{`Hi! I'm ${name.split(" ")[0]}.`}</SpeechBubble>
          </div>
          <PersonSVG />
        </div>

        {/* Hills — rendered after characters; covers feet for "standing in grass" effect */}
        <div className="hidden sm:block absolute left-0 right-0 bottom-0 h-[360px] pointer-events-none" aria-hidden="true">
          <div className="absolute bottom-0 rounded-[50%_50%_0_0/70%_70%_0_0] bg-grass left-[-8%] w-[70%] h-[220px]" />
          <div className="absolute bottom-0 rounded-[50%_50%_0_0/70%_70%_0_0] right-[-10%] w-[60%] h-[180px]"
            style={{ background: "color-mix(in oklab, var(--grass) 80%, black 6%)" }} />
          <div className="absolute left-[30%] bottom-[110px] w-[600px] h-[60px] opacity-90"
            style={{
              background: `repeating-linear-gradient(to right, transparent 0, transparent 40px, var(--wool-shadow) 40px, var(--wool-shadow) 46px, transparent 46px, transparent 80px),
                           linear-gradient(to bottom, transparent 0, transparent 18px, var(--wool-shadow) 18px, var(--wool-shadow) 26px, transparent 26px, transparent 38px, var(--wool-shadow) 38px, var(--wool-shadow) 46px, transparent 46px)`,
            }}
          />
        </div>
      </div>
    </section>
  )
}
