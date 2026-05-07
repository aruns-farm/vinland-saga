import type { Meta, StoryObj } from "@storybook/react"

const tokens = [
  { name: "ink",         hex: "#2a2418", tailwind: "bg-ink",         label: "Ink — body text, borders" },
  { name: "ink-soft",    hex: "#5b5040", tailwind: "bg-ink-soft",    label: "Ink Soft — secondary text" },
  { name: "cream",       hex: "#fbf3df", tailwind: "bg-cream",       label: "Cream — page background" },
  { name: "cream2",      hex: "#f3e6c5", tailwind: "bg-cream2",      label: "Cream 2 — section backgrounds" },
  { name: "paper",       hex: "#fffaec", tailwind: "bg-paper",       label: "Paper — card / form backgrounds" },
  { name: "grass",       hex: "#6aa84f", tailwind: "bg-grass",       label: "Grass — primary green" },
  { name: "grass2",      hex: "#4d8836", tailwind: "bg-grass2",      label: "Grass 2 — darker green" },
  { name: "grass3",      hex: "#3a6a28", tailwind: "bg-grass3",      label: "Grass 3 — darkest green" },
  { name: "sky",         hex: "#bce3ef", tailwind: "bg-sky",         label: "Sky — light blue" },
  { name: "sky2",        hex: "#94cfe1", tailwind: "bg-sky2",        label: "Sky 2 — mid blue" },
  { name: "barn",        hex: "#c94a3a", tailwind: "bg-barn",        label: "Barn — primary red/accent" },
  { name: "barn2",       hex: "#a23a2c", tailwind: "bg-barn2",       label: "Barn 2 — dark red" },
  { name: "sun",         hex: "#f6c14b", tailwind: "bg-sun",         label: "Sun — yellow/CTA" },
  { name: "sun2",        hex: "#e69b2b", tailwind: "bg-sun2",        label: "Sun 2 — golden yellow" },
  { name: "wool",        hex: "#f6efe1", tailwind: "bg-wool",        label: "Wool — card backgrounds" },
  { name: "wool-shadow", hex: "#d8cbad", tailwind: "bg-wool-shadow", label: "Wool Shadow — card shadows" },
  { name: "hoof",        hex: "#3a3024", tailwind: "bg-hoof",        label: "Hoof — deep dark brown" },
  { name: "dirt",        hex: "#8b6a45", tailwind: "bg-dirt",        label: "Dirt — warm brown" },
  { name: "pink",        hex: "#ef9fb0", tailwind: "bg-pink",        label: "Pink — accent / Rosie" },
]

const typeSamples = [
  { family: "Fraunces", cssVar: "var(--font-display)", role: "Display / Headings", sample: "The quick brown fox" },
  { family: "Nunito",   cssVar: "var(--font-body)",    role: "Body / UI",          sample: "The quick brown fox" },
  { family: "Caveat",   cssVar: "var(--font-hand)",    role: "Handwritten / Kicker", sample: "The quick brown fox" },
]

const shadowTokens = [
  { name: "--sh-sm",   value: "0 2px 0 var(--wool-shadow)", label: "Small",      demo: "0 2px 0 #d8cbad" },
  { name: "--sh-md",   value: "0 4px 0 var(--wool-shadow)", label: "Medium",     demo: "0 4px 0 #d8cbad" },
  { name: "--sh-lg",   value: "0 6px 0 var(--wool-shadow)", label: "Large",      demo: "0 6px 0 #d8cbad" },
  { name: "--sh-xl",   value: "0 8px 0 var(--wool-shadow)", label: "X-Large",    demo: "0 8px 0 #d8cbad" },
  { name: "--sh-barn", value: "0 4px 0 var(--barn-2)",      label: "Barn/accent",demo: "0 4px 0 #a23a2c" },
  { name: "--sh-sun",  value: "0 3px 0 var(--sun-2)",       label: "Sun/yellow", demo: "0 3px 0 #e69b2b" },
]

const borderTokens = [
  { name: "--b-thin",  value: "2px solid var(--ink)",   label: "Thin border" },
  { name: "--b",       value: "2.5px solid var(--ink)", label: "Default border" },
  { name: "--b-thick", value: "3px solid var(--ink)",   label: "Thick border" },
  { name: "--b-dash",  value: "2px dashed var(--ink)",  label: "Dashed border" },
]

const radiusTokens = [
  { name: "--r-tag",     value: "8px",   label: "Tag" },
  { name: "--r-card",    value: "18px",  label: "Card" },
  { name: "--r-card-lg", value: "24px",  label: "Card large" },
  { name: "--r-pill",    value: "999px", label: "Pill / full-round" },
]

const spacingTokens = [
  { name: "--s-1", value: "4px" },
  { name: "--s-2", value: "8px" },
  { name: "--s-3", value: "12px" },
  { name: "--s-4", value: "16px" },
  { name: "--s-5", value: "24px" },
  { name: "--s-6", value: "32px" },
  { name: "--s-7", value: "48px" },
  { name: "--s-8", value: "64px" },
  { name: "--s-9", value: "96px" },
]

const SectionHeader = ({ title, sub }: { title: string; sub: string }) => (
  <h2 style={{ fontFamily: "var(--font-display, Georgia)", fontSize: 32, fontWeight: 900, margin: "48px 0 8px", color: "#2a2418" }}>
    {title} <em style={{ color: "#c94a3a", fontStyle: "italic" }}>{sub}</em>
  </h2>
)

const TokenLabel = ({ text }: { text: string }) => (
  <div style={{ fontSize: 11, fontWeight: 700, color: "#c94a3a", fontFamily: "monospace" }}>{text}</div>
)

function Palette() {
  return (
    <div style={{ background: "#fbf3df", padding: 40, fontFamily: "var(--font-body, system-ui)" }}>

      {/* Colors */}
      <SectionHeader title="Woolly & Co." sub="Color Tokens" />
      <p style={{ color: "#2a2418", opacity: 0.65, marginBottom: 32, fontWeight: 700 }}>
        {tokens.length} design tokens — use via Tailwind class (<code>bg-barn</code>) or CSS variable (<code>var(--barn)</code>)
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
        {tokens.map(t => (
          <div key={t.name} style={{ borderRadius: 16, overflow: "hidden", border: "2.5px solid #2a2418", boxShadow: "0 4px 0 #d8cbad" }}>
            <div style={{ height: 80, background: t.hex }} />
            <div style={{ padding: "12px 14px", background: "white" }}>
              <div style={{ fontFamily: "var(--font-display, Georgia)", fontWeight: 900, fontSize: 15, color: "#2a2418" }}>{t.name}</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#2a2418", opacity: 0.55, marginTop: 2 }}>{t.hex}</div>
              <TokenLabel text={t.tailwind} />
              <div style={{ fontSize: 11, color: "#2a2418", opacity: 0.65, marginTop: 4, fontWeight: 600 }}>{t.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Typography */}
      <SectionHeader title="Typography" sub="Scale" />
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {typeSamples.map(t => (
          <div key={t.family} style={{ background: "white", border: "2.5px solid #2a2418", borderRadius: 16, padding: 24, boxShadow: "0 4px 0 #d8cbad" }}>
            <TokenLabel text={`${t.family} — ${t.role}`} />
            <div style={{ fontFamily: t.cssVar, fontSize: 48, fontWeight: 900, color: "#2a2418", lineHeight: 1, marginTop: 4 }}>{t.sample}</div>
            <div style={{ fontFamily: t.cssVar, fontSize: 28, fontWeight: 700, color: "#2a2418", lineHeight: 1.2, marginTop: 8 }}>{t.sample}</div>
            <div style={{ fontFamily: t.cssVar, fontSize: 16, fontWeight: 600, color: "#2a2418", marginTop: 8 }}>{t.sample} — body size</div>
          </div>
        ))}
      </div>

      {/* Shadows */}
      <SectionHeader title="Shadow" sub="Tokens" />
      <p style={{ color: "#2a2418", opacity: 0.65, marginBottom: 24, fontWeight: 700 }}>
        Flat offset shadows — use via <code>boxShadow: var(--sh-md)</code>
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {shadowTokens.map(s => (
          <div key={s.name} style={{ background: "white", border: "2.5px solid #2a2418", borderRadius: 16, padding: 20, boxShadow: s.demo }}>
            <TokenLabel text={s.name} />
            <div style={{ fontSize: 13, fontWeight: 700, color: "#2a2418", marginTop: 6 }}>{s.label}</div>
            <div style={{ fontSize: 11, color: "#2a2418", opacity: 0.55, marginTop: 4, fontFamily: "monospace" }}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* Borders */}
      <SectionHeader title="Border" sub="Tokens" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
        {borderTokens.map(b => (
          <div key={b.name} style={{ background: "white", borderRadius: 16, padding: 20, border: "2.5px solid #2a2418", boxShadow: "0 4px 0 #d8cbad" }}>
            <div style={{ height: 40, borderRadius: 8, border: b.value.replace("var(--ink)", "#2a2418") }} />
            <TokenLabel text={b.name} />
            <div style={{ fontSize: 13, fontWeight: 700, color: "#2a2418", marginTop: 4 }}>{b.label}</div>
            <div style={{ fontSize: 11, color: "#2a2418", opacity: 0.55, marginTop: 2, fontFamily: "monospace" }}>{b.value}</div>
          </div>
        ))}
      </div>

      {/* Radius */}
      <SectionHeader title="Radius" sub="Tokens" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
        {radiusTokens.map(r => (
          <div key={r.name} style={{ background: "white", border: "2.5px solid #2a2418", borderRadius: 16, padding: 20, boxShadow: "0 4px 0 #d8cbad" }}>
            <div style={{ height: 56, background: "#f3e6c5", border: "2.5px solid #2a2418", borderRadius: r.value }} />
            <TokenLabel text={r.name} />
            <div style={{ fontSize: 13, fontWeight: 700, color: "#2a2418", marginTop: 4 }}>{r.label}</div>
            <div style={{ fontSize: 11, color: "#2a2418", opacity: 0.55, marginTop: 2, fontFamily: "monospace" }}>{r.value}</div>
          </div>
        ))}
      </div>

      {/* Spacing */}
      <SectionHeader title="Spacing" sub="Scale" />
      <p style={{ color: "#2a2418", opacity: 0.65, marginBottom: 24, fontWeight: 700 }}>
        9-step scale — use via <code>padding: var(--s-4)</code> or <code>gap: var(--s-3)</code>
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {spacingTokens.map(s => (
          <div key={s.name} style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 80, flexShrink: 0 }}>
              <TokenLabel text={s.name} />
              <div style={{ fontSize: 11, color: "#2a2418", opacity: 0.55, fontFamily: "monospace" }}>{s.value}</div>
            </div>
            <div style={{ height: 24, background: "#c94a3a", borderRadius: 4, width: s.value }} />
          </div>
        ))}
      </div>

    </div>
  )
}

const meta: Meta<typeof Palette> = {
  title: "Design System/Tokens",
  component: Palette,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
}

export default meta

export const Colors: StoryObj<typeof Palette> = {
  name: "Color Palette & Typography",
}

export const Shadows: StoryObj<typeof Palette> = {
  name: "Shadows, Borders & Radius",
}

export const Spacing: StoryObj<typeof Palette> = {
  name: "Spacing Scale",
}
