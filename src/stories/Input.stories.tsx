import type { Meta, StoryObj } from "@storybook/react"
import { Input, Textarea, Field, Checkbox } from "@/components/ui/Input"

/* Use a generic wrapper component for the meta since we're showing multiple */
function InputDemo() { return <Input placeholder="your@email.com" /> }

const meta: Meta<typeof InputDemo> = {
  title:      "UI / Input",
  component:  InputDemo,
  tags:       ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof InputDemo>

export const TextInput: Story = {
  name: "Input — text",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 360, padding: 24, background: "var(--cream)" }}>
      <Input placeholder="Your name" />
      <Input type="email" placeholder="your@email.com" />
      <Input type="password" placeholder="••••••••" />
    </div>
  ),
}

export const TextareaStory: Story = {
  name: "Textarea",
  render: () => (
    <div style={{ width: 360, padding: 24, background: "var(--cream)" }}>
      <Textarea placeholder="What's on your mind?" rows={4} />
    </div>
  ),
}

export const WithField: Story = {
  name: "Field — with Caveat label",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, width: 360, padding: 24, background: "var(--cream)" }}>
      <Field label="Your name">
        <Input placeholder="Woolly McSheep" />
      </Field>
      <Field label="Email address" hint="We'll never share it.">
        <Input type="email" placeholder="woolly@ketils.farm" />
      </Field>
      <Field label="Message">
        <Textarea placeholder="What's on your mind?" rows={3} />
      </Field>
    </div>
  ),
}

export const CheckboxStory: Story = {
  name: "Checkbox",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: 24, background: "var(--cream)" }}>
      <Checkbox label="I accept the terms" checked={false} />
      <Checkbox label="Remember me" checked={true} />
      <Checkbox label="Round variant" checked={true} round />
      <Checkbox label="Round unchecked" checked={false} round />
    </div>
  ),
}

export const FullForm: Story = {
  name: "Full contact form",
  render: () => (
    <form
      style={{ display: "flex", flexDirection: "column", gap: 16, width: 400, padding: 32, background: "var(--sun)", border: "3px solid var(--ink)", borderRadius: 24, boxShadow: "var(--sh-xl)" }}
      onSubmit={e => e.preventDefault()}
    >
      <Field label="Your name">
        <Input placeholder="Woolly McSheep" />
      </Field>
      <Field label="Email">
        <Input type="email" placeholder="woolly@ketils.farm" />
      </Field>
      <Field label="Message">
        <Textarea placeholder="What's on your mind?" rows={4} />
      </Field>
      <button
        type="submit"
        style={{ padding: "12px 20px", borderRadius: 999, background: "var(--barn)", color: "white", border: "2.5px solid var(--ink)", fontWeight: 900, fontSize: 15, cursor: "pointer", boxShadow: "var(--sh-barn)" }}
      >
        Send it →
      </button>
    </form>
  ),
}
