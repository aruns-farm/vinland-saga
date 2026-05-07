import type { Preview } from "@storybook/react"
import "./fonts.css"
import "../src/app/globals.css"

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "cream",
      values: [
        { name: "cream",  value: "#fbf3df" },
        { name: "cream2", value: "#f3e6c5" },
        { name: "white",  value: "#ffffff" },
        { name: "ink",    value: "#2a2418" },
        { name: "grass",  value: "#6aa84f" },
        { name: "barn",   value: "#c94a3a" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
