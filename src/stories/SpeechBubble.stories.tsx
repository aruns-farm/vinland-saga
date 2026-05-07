import type { Meta, StoryObj } from "@storybook/react"
import { SpeechBubble, type SpeechBubbleVariant } from "@/components/ui/SpeechBubble"

const meta: Meta<typeof SpeechBubble> = {
  title:      "UI / SpeechBubble",
  component:  SpeechBubble,
  tags:       ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    variant: {
      control: "select",
      options: ["white", "sun", "barn"] satisfies SpeechBubbleVariant[],
    },
    rotate: { control: { type: "range", min: -15, max: 15, step: 1 } },
  },
}

export default meta
type Story = StoryObj<typeof SpeechBubble>

export const White: Story = {
  args: { children: "Clean code! 🐑", variant: "white" },
}

export const SunVariant: Story = {
  name: "Sun",
  args: { children: "Ship it! 🚀", variant: "sun", rotate: 2 },
}

export const BarnVariant: Story = {
  name: "Barn",
  args: { children: "Good design ✨", variant: "barn", rotate: -3 },
}

export const AllVariants: Story = {
  name: "All variants",
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 32, padding: "48px 40px", background: "var(--grass)" }}>
      {(["white", "sun", "barn"] as SpeechBubbleVariant[]).map((v, i) => (
        <SpeechBubble
          key={v}
          variant={v}
          rotate={[-4, 2, -3][i]}
        >
          {["Clean code! 🐑", "Ship it! 🚀", "Good design ✨"][i]}
        </SpeechBubble>
      ))}
    </div>
  ),
}

export const InContext: Story = {
  name: "In context — character scene",
  render: () => (
    <div style={{ position: "relative", padding: "48px 40px 20px", background: "linear-gradient(180deg, var(--sky) 55%, var(--grass) 55%)", width: 400, minHeight: 200 }}>
      <div style={{ position: "absolute", bottom: 30, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <SpeechBubble variant="white" rotate={-4}>Hi! I'm Arun.</SpeechBubble>
        <div style={{ width: 60, height: 80, background: "var(--barn-2)", borderRadius: "50% 50% 0 0", border: "2.5px solid var(--ink)" }} aria-hidden="true" />
      </div>
    </div>
  ),
}
