import type { Meta, StoryObj } from "@storybook/react"
import { SpeechBubble } from "./SpeechBubble"

const meta: Meta<typeof SpeechBubble> = {
  title: "Design System/SpeechBubble",
  component: SpeechBubble,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    variant: { control: "select", options: ["white", "sun"] },
    rotate:  { control: { type: "range", min: -10, max: 10 } },
  },
}

export default meta
type Story = StoryObj<typeof SpeechBubble>

export const Default: Story = {
  args: { children: "Hi! I'm Arun.", variant: "white", rotate: -4 },
}

export const Sun: Story = {
  args: { children: "Ship it! 🚀", variant: "sun", rotate: 2 },
}

export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 40, padding: "60px 40px 40px", background: "#fbf3df", borderRadius: 16 }}>
      <SpeechBubble variant="white" rotate={-4}>Hi! I&apos;m Arun.</SpeechBubble>
      <SpeechBubble variant="sun"   rotate={2}>Ship it! 🚀</SpeechBubble>
      <SpeechBubble variant="white" rotate={3}>Clean code! 🐑</SpeechBubble>
      <SpeechBubble variant="sun"   rotate={-2}>Good design ✨</SpeechBubble>
    </div>
  ),
}
