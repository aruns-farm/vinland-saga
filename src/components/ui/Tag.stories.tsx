import type { Meta, StoryObj } from "@storybook/react"
import { Eyebrow, StickerTag, TagPill } from "./Tag"

/* ─── Eyebrow ─────────────────────────────────────────────── */
const eyebrowMeta: Meta<typeof Eyebrow> = {
  title: "Design System/Tag/Eyebrow",
  component: Eyebrow,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}
export default eyebrowMeta

export const Default: StoryObj<typeof Eyebrow> = {
  args: { children: "~ things I've built ~" },
}

/* ─── Tag Pill ─────────────────────────────────────────────── */
export const Pills: StoryObj<typeof Eyebrow> = {
  name: "TagPill — all variants",
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10, padding: 24, background: "#fbf3df", borderRadius: 16 }}>
      <TagPill variant="default">Default</TagPill>
      <TagPill variant="sun">Sun</TagPill>
      <TagPill variant="barn">Barn</TagPill>
      <TagPill variant="grass">Grass</TagPill>
      <TagPill variant="dash">Wavy link</TagPill>
    </div>
  ),
}

/* ─── Sticker Tag ──────────────────────────────────────────── */
export const Sticker: StoryObj<typeof Eyebrow> = {
  name: "StickerTag (card label)",
  render: () => (
    <div style={{ position: "relative", width: 200, height: 80, background: "#f6efe1", border: "2.5px solid #2a2418", borderRadius: 16 }}>
      <StickerTag>this site</StickerTag>
    </div>
  ),
}
