import type { Meta, StoryObj } from "@storybook/react"
import { LogoMark } from "./LogoMark"

const meta: Meta<typeof LogoMark> = {
  title: "Design System/LogoMark",
  component: LogoMark,
  tags: ["autodocs"],
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
  name: "Size Scale",
  render: () => (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 24, padding: 32, background: "#fbf3df", borderRadius: 16 }}>
      <LogoMark size={24} />
      <LogoMark size={36} />
      <LogoMark size={46} />
      <LogoMark size={64} />
      <LogoMark size={96} />
    </div>
  ),
}

export const InTopbar: Story = {
  name: "In Context (Topbar)",
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 24px", background: "#fbf3df", border: "2px dashed rgba(42,36,24,.2)", borderRadius: 12 }}>
      <LogoMark size={46} />
      <span style={{ fontFamily: "var(--font-display, Georgia)", fontWeight: 900, fontSize: 26, color: "#2a2418" }}>
        Arun Negi
      </span>
    </div>
  ),
}
