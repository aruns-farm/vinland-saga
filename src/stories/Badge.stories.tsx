import type { Meta, StoryObj } from "@storybook/react"
import { Badge, type BadgeVariant } from "@/components/ui/Badge"

const meta: Meta<typeof Badge> = {
  title:      "UI / Badge",
  component:  Badge,
  tags:       ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    variant: {
      control: "select",
      options: ["barn", "sun", "outline"] satisfies BadgeVariant[],
    },
    rotate:  { control: { type: "range", min: -10, max: 10, step: 0.5 } },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Barn: Story = {
  args: { children: "New", variant: "barn" },
}

export const Sun: Story = {
  args: { children: "Featured", variant: "sun" },
}

export const Outline: Story = {
  args: { children: "Draft", variant: "outline" },
}

export const Flat: Story = {
  name: "Flat (no rotation)",
  args: { children: "S2 · E4", variant: "barn", rotate: 0 },
}

export const AllVariants: Story = {
  name: "All variants",
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", padding: 32, background: "var(--cream)" }}>
      <Badge variant="barn">Barn</Badge>
      <Badge variant="sun">Sun</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="barn" rotate={0}>S2 · E4</Badge>
      <Badge variant="sun"  rotate={2}>Featured</Badge>
      <Badge variant="barn" rotate={-3}>New</Badge>
    </div>
  ),
}
