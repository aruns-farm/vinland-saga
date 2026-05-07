import type { Meta, StoryObj } from "@storybook/react"
import { Divider, type DividerVariant } from "@/components/ui/Divider"

function DividerDemo() { return <Divider /> }

const meta: Meta<typeof DividerDemo> = {
  title:      "UI / Divider",
  component:  DividerDemo,
  tags:       ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof DividerDemo>

export const AllVariants: Story = {
  name: "All variants",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 4, width: 480, padding: "32px 40px", background: "var(--cream)" }}>
      {(["dashed", "ink", "dots", "wavy"] as DividerVariant[]).map(v => (
        <div key={v}>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--ink-soft)", margin: "16px 0 4px" }}>
            {v}
          </div>
          <Divider variant={v} />
        </div>
      ))}
    </div>
  ),
}

export const Dashed: Story = {
  render: () => (
    <div style={{ width: 480, padding: "24px 40px", background: "var(--cream)" }}>
      <p style={{ fontFamily: "var(--font-body)", fontSize: 15, margin: "0 0 8px" }}>Section above</p>
      <Divider variant="dashed" />
      <p style={{ fontFamily: "var(--font-body)", fontSize: 15, margin: "8px 0 0" }}>Section below</p>
    </div>
  ),
}

export const Wavy: Story = {
  name: "Wavy — sun bumps",
  render: () => (
    <div style={{ width: 480, padding: "24px 40px", background: "var(--cream)" }}>
      <p style={{ fontFamily: "var(--font-body)", fontSize: 15, margin: "0 0 12px" }}>Before the wavy divider</p>
      <Divider variant="wavy" />
      <p style={{ fontFamily: "var(--font-body)", fontSize: 15, margin: "12px 0 0" }}>After the wavy divider</p>
    </div>
  ),
}
