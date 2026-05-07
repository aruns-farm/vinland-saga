import type { Meta, StoryObj } from "@storybook/react"
import { Card, PhotoCard, type CardVariant } from "@/components/ui/Card"

const meta: Meta<typeof Card> = {
  title:      "UI / Card",
  component:  Card,
  tags:       ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "dashed", "photo"] satisfies CardVariant[],
    },
    hover: { control: "boolean" },
  },
}

export default meta
type Story = StoryObj<typeof Card>

export const Solid: Story = {
  args:   { variant: "solid" },
  render: args => (
    <Card {...args} className="max-w-xs w-72">
      <div className="p-5">
        <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 20, marginBottom: 6 }}>
          Woolly & Co.
        </h3>
        <p style={{ fontSize: 14, color: "var(--ink-soft)" }}>
          A solid card with woolly background and chunky border.
        </p>
      </div>
    </Card>
  ),
}

export const Dashed: Story = {
  args:   { variant: "dashed" },
  render: args => (
    <Card {...args} className="max-w-xs w-72">
      <div className="p-5">
        <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 20, marginBottom: 6 }}>
          Dashed Card
        </h3>
        <p style={{ fontSize: 14, color: "var(--ink-soft)" }}>
          Cream background with dashed border — used for placeholder / empty states.
        </p>
      </div>
    </Card>
  ),
}

export const Photo: Story = {
  render: () => (
    <PhotoCard
      accentBg="linear-gradient(180deg, #bce3ef 0%, #6aa84f 100%)"
      className="max-w-xs w-72"
    >
      <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 18, marginBottom: 4 }}>
        Episode title
      </h3>
      <p style={{ fontSize: 13, color: "var(--ink-soft)", margin: 0 }}>
        Season 2 · Episode 4
      </p>
    </PhotoCard>
  ),
}

export const WithHover: Story = {
  name: "Solid + hover",
  args: { variant: "solid", hover: true },
  render: args => (
    <Card {...args} className="max-w-xs w-72">
      <div className="p-5">
        <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 20, marginBottom: 6 }}>
          Hover me
        </h3>
        <p style={{ fontSize: 14, color: "var(--ink-soft)" }}>
          Lifts and slightly rotates on hover.
        </p>
      </div>
    </Card>
  ),
}

export const AllVariants: Story = {
  name: "All variants",
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 20, padding: 32, background: "var(--cream)", alignItems: "flex-start" }}>
      {(["solid", "dashed"] as CardVariant[]).map(v => (
        <Card key={v} variant={v} className="w-56">
          <div style={{ padding: "18px 20px" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 17, marginBottom: 4, color: "var(--ink)" }}>{v}</div>
            <div style={{ fontSize: 13, color: "var(--ink-soft)" }}>Card variant</div>
          </div>
        </Card>
      ))}
      <PhotoCard accentBg="linear-gradient(135deg, var(--sky), var(--grass))" className="w-56">
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 17, color: "var(--ink)" }}>photo</div>
        <div style={{ fontSize: 13, color: "var(--ink-soft)" }}>Card variant</div>
      </PhotoCard>
    </div>
  ),
}
