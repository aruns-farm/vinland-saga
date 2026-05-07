import type { Meta, StoryObj } from "@storybook/react"
import { LogoMark } from "@/components/ui/LogoMark"

const meta: Meta<typeof LogoMark> = {
  title:      "UI / LogoMark",
  component:  LogoMark,
  tags:       ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    size: { control: { type: "range", min: 24, max: 120, step: 4 } },
  },
}

export default meta
type Story = StoryObj<typeof LogoMark>

export const Default: Story = {
  args: { size: 46 },
}

export const Sizes: Story = {
  name: "Size scale",
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 20, padding: 32, background: "var(--cream)" }}>
      {[24, 32, 46, 64, 80, 96].map(s => (
        <div key={s} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <LogoMark size={s} />
          <span style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, color: "var(--ink-soft)" }}>{s}px</span>
        </div>
      ))}
    </div>
  ),
}

export const WithBrandName: Story = {
  name: "Lockup — with brand name",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: 32, background: "var(--cream)" }}>
      {[38, 46, 56].map(s => (
        <div
          key={s}
          style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "var(--font-display)", fontWeight: 900, fontSize: s * 0.56, color: "var(--ink)", letterSpacing: "-0.02em" }}
        >
          <LogoMark size={s} />
          Woolly &amp; Co.
        </div>
      ))}
    </div>
  ),
}

export const OnDarkBg: Story = {
  name: "On dark background",
  parameters: { backgrounds: { default: "ink" } },
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 10, padding: 24, fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 26, color: "var(--cream)", letterSpacing: "-0.02em" }}>
      <LogoMark size={46} />
      Woolly &amp; Co.
    </div>
  ),
}
