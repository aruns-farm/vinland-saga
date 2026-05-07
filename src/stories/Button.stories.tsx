import type { Meta, StoryObj } from "@storybook/react"
import { Button, type ButtonVariant, type ButtonSize } from "@/components/ui/Button"

const meta: Meta<typeof Button> = {
  title:      "UI / Button",
  component:  Button,
  tags:       ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "sun", "ghost", "ink"] satisfies ButtonVariant[],
    },
    size: {
      control: "radio",
      options: ["default", "sm"] satisfies ButtonSize[],
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: { children: "Get in touch ✉", variant: "primary" },
}

export const Sun: Story = {
  args: { children: "See my work →", variant: "sun" },
}

export const Ghost: Story = {
  args: { children: "Learn more", variant: "ghost" },
}

export const Ink: Story = {
  args: { children: "Download résumé", variant: "ink" },
}

export const Small: Story = {
  args: { children: "View all →", variant: "primary", size: "sm" },
}

export const AllVariants: Story = {
  name: "All variants",
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center", padding: 24, background: "var(--cream)" }}>
      <Button variant="primary">Primary</Button>
      <Button variant="sun">Sun</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="ink">Ink</Button>
      <Button variant="primary" size="sm">Primary sm</Button>
      <Button variant="sun"     size="sm">Sun sm</Button>
      <Button variant="ghost"   size="sm">Ghost sm</Button>
    </div>
  ),
}

export const AsLink: Story = {
  name: "As anchor link",
  args: { children: "Visit GitHub →", variant: "primary", href: "#" },
}
