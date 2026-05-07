import type { Meta, StoryObj } from "@storybook/react"

const tokens = [
  { name: "ink",         hex: "#2a2418", tailwind: "bg-ink",         label: "Ink — body text, borders" },
  { name: "cream",       hex: "#fbf3df", tailwind: "bg-cream",       label: "Cream — page background" },
  { name: "cream2",      hex: "#f3e6c5", tailwind: "bg-cream2",      label: "Cream 2 — section backgrounds" },
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

function Palette() {
  return (
    <div style={{ background: "#fbf3df", padding: 40, fontFamily: "var(--font-body, system-ui)" }}>
      <h2 style={{ fontFamily: "var(--font-display, Georgia)", fontSize: 36, fontWeight: 900, marginBottom: 8, color: "#2a2418" }}>
        Woolly & Co. <em style={{ color: "#c94a3a", fontStyle: "italic" }}>Color Tokens</em>
      </h2>
      <p style={{ color: "#2a2418", opacity: 0.65, marginBottom: 32, fontWeight: 700 }}>
        17 design tokens — use via Tailwind class (<code>bg-barn</code>) or CSS variable (<code>var(--barn)</code>)
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
        {tokens.map(t => (
          <div key={t.name} style={{ borderRadius: 16, overflow: "hidden", border: "2.5px solid #2a2418", boxShadow: "0 4px 0 #d8cbad" }}>
            <div style={{ height: 80, background: t.hex }} />
            <div style={{ padding: "12px 14px", background: "white" }}>
              <div style={{ fontFamily: "var(--font-display, Georgia)", fontWeight: 900, fontSize: 15, color: "#2a2418" }}>
                {t.name}
              </div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#2a2418", opacity: 0.55, marginTop: 2 }}>
                {t.hex}
              </div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#c94a3a", marginTop: 4, fontFamily: "monospace" }}>
                {t.tailwind}
              </div>
              <div style={{ fontSize: 11, color: "#2a2418", opacity: 0.65, marginTop: 4, fontWeight: 600 }}>
                {t.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 style={{ fontFamily: "var(--font-display, Georgia)", fontSize: 36, fontWeight: 900, margin: "48px 0 8px", color: "#2a2418" }}>
        Typography <em style={{ color: "#c94a3a", fontStyle: "italic" }}>Scale</em>
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {typeSamples.map(t => (
          <div key={t.family} style={{ background: "white", border: "2.5px solid #2a2418", borderRadius: 16, padding: 24, boxShadow: "0 4px 0 #d8cbad" }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#c94a3a", marginBottom: 4, fontFamily: "monospace" }}>
              {t.family} — {t.role}
            </div>
            <div style={{ fontFamily: t.cssVar, fontSize: 48, fontWeight: 900, color: "#2a2418", lineHeight: 1 }}>
              {t.sample}
            </div>
            <div style={{ fontFamily: t.cssVar, fontSize: 28, fontWeight: 700, color: "#2a2418", lineHeight: 1.2, marginTop: 8 }}>
              {t.sample}
            </div>
            <div style={{ fontFamily: t.cssVar, fontSize: 16, fontWeight: 600, color: "#2a2418", marginTop: 8 }}>
              {t.sample} — body size
            </div>
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
