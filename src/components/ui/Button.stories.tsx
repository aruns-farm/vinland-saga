import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./Button"

const meta: Meta<typeof Button> = {
  title: "Design System/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    variant: { control: "select", options: ["primary", "sun", "ghost", "ink"] },
    size:    { control: "select", options: ["default", "sm"] },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: { children: "▶ See my work", variant: "primary" },
}

export const Sun: Story = {
  args: { children: "✉ Get in touch", variant: "sun" },
}

export const Ghost: Story = {
  args: { children: "About me", variant: "ghost" },
}

export const Ink: Story = {
  args: { children: "Dark action", variant: "ink" },
}

export const Small: Story = {
  args: { children: "Small button", variant: "primary", size: "sm" },
}

export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, padding: 24, background: "#fbf3df", borderRadius: 16 }}>
      <Button variant="primary">Primary</Button>
      <Button variant="sun">Sun</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="ink">Ink</Button>
      <Button variant="primary" size="sm">Primary sm</Button>
      <Button variant="sun"     size="sm">Sun sm</Button>
      <Button variant="ghost"   size="sm">Ghost sm</Button>
      <Button variant="ink"     size="sm">Ink sm</Button>
    </div>
  ),
}
