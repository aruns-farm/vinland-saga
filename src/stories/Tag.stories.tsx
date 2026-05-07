import type { Meta, StoryObj } from "@storybook/react"
import { Eyebrow, StickerTag, TagPill, type TagVariant } from "@/components/ui/Tag"

function TagDemo() { return <TagPill>Tag</TagPill> }

const meta: Meta<typeof TagDemo> = {
  title:      "UI / Tag",
  component:  TagDemo,
  tags:       ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof TagDemo>

export const EyebrowStory: Story = {
  name: "Eyebrow — handwritten kicker",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: 24, background: "var(--cream)" }}>
      <Eyebrow>~ things I've built ~</Eyebrow>
      <Eyebrow color="barn">~ from the desk ~</Eyebrow>
      <Eyebrow color="sun">~ straight from the stage ~</Eyebrow>
      <Eyebrow color="ink">~ where I've been ~</Eyebrow>
    </div>
  ),
}

export const StickerTagStory: Story = {
  name: "StickerTag — card corner sticker",
  render: () => (
    <div style={{ display: "flex", gap: 20, padding: 32, background: "var(--cream2)" }}>
      {(["sun", "barn", "grass"] as const).map(v => (
        <div
          key={v}
          style={{ position: "relative", width: 140, height: 100, background: "var(--wool)", border: "2.5px solid var(--ink)", borderRadius: 18, boxShadow: "var(--sh-lg)" }}
        >
          <StickerTag variant={v}>{v}</StickerTag>
          <div style={{ padding: "16px 14px", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 15 }}>
            Card
          </div>
        </div>
      ))}
    </div>
  ),
}

export const TagPillStory: Story = {
  name: "TagPill — all variants",
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10, padding: 24, background: "var(--cream)" }}>
      {(["default", "sun", "barn", "grass", "dash"] as TagVariant[]).map(v => (
        <TagPill key={v} variant={v}>{v}</TagPill>
      ))}
    </div>
  ),
}

export const AllTags: Story = {
  name: "All tag components",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 32, background: "var(--cream)" }}>
      <div>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--ink-soft)", marginBottom: 8 }}>Eyebrow</div>
        <Eyebrow>~ things I've built ~</Eyebrow>
      </div>
      <div>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--ink-soft)", marginBottom: 8 }}>TagPill variants</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          <TagPill>default</TagPill>
          <TagPill variant="sun">sun</TagPill>
          <TagPill variant="barn">barn</TagPill>
          <TagPill variant="grass">grass</TagPill>
          <TagPill variant="dash">dash link</TagPill>
        </div>
      </div>
      <div>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--ink-soft)", marginBottom: 8 }}>StickerTag (placed in context)</div>
        <div style={{ display: "flex", gap: 16 }}>
          {(["sun", "barn", "grass"] as const).map(v => (
            <div key={v} style={{ position: "relative", width: 120, height: 80, background: "var(--wool)", border: "2.5px solid var(--ink)", borderRadius: 18, boxShadow: "var(--sh-md)" }}>
              <StickerTag variant={v}>{v}</StickerTag>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
}
