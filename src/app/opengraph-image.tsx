import { ImageResponse } from "next/og"

export const alt = "Ketil's Farm — a portfolio for every character."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const tokens = {
  ink: "#2a2418",
  inkSoft: "#5b5040",
  cream: "#fbf3df",
  cream2: "#f3e6c5",
  paper: "#fffaec",
  barn: "#c94a3a",
  barn2: "#a23a2c",
  sun: "#f6c14b",
  sun2: "#e69b2b",
  grass: "#6aa84f",
  grass2: "#4d8836",
  woolShadow: "#d8cbad",
} as const

async function loadGoogleFont(family: string, weight: number, text?: string) {
  const params = new URLSearchParams({ family: `${family}:wght@${weight}` })
  if (text) params.set("text", text)
  const cssUrl = `https://fonts.googleapis.com/css2?${params.toString()}`
  const css = await (await fetch(cssUrl)).text()
  const match = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)
  if (!match) throw new Error(`Failed to resolve font URL for ${family} ${weight}`)
  return fetch(match[1]).then((r) => r.arrayBuffer())
}

export default async function Image() {
  const [fraunces, caveat, nunito] = await Promise.all([
    loadGoogleFont("Fraunces", 800),
    loadGoogleFont("Caveat", 700),
    loadGoogleFont("Nunito", 800),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: tokens.cream,
          fontFamily: "Nunito",
          color: tokens.ink,
          position: "relative",
          padding: "72px 80px",
        }}
      >
        {/* Sun ornament — top right */}
        <div
          style={{
            position: "absolute",
            top: 56,
            right: 72,
            width: 140,
            height: 140,
            borderRadius: 999,
            background: tokens.sun,
            border: `4px solid ${tokens.ink}`,
            boxShadow: `0 8px 0 ${tokens.sun2}`,
            display: "flex",
          }}
        />

        {/* Grass strip — bottom */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 56,
            background: tokens.grass,
            borderTop: `4px solid ${tokens.ink}`,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 56,
            height: 14,
            background: tokens.grass2,
            display: "flex",
          }}
        />

        {/* Pill tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            alignSelf: "flex-start",
            padding: "10px 22px",
            background: tokens.paper,
            border: `3px solid ${tokens.ink}`,
            borderRadius: 999,
            boxShadow: `0 4px 0 ${tokens.woolShadow}`,
            fontFamily: "Nunito",
            fontWeight: 800,
            fontSize: 22,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: tokens.ink,
          }}
        >
          Portfolio
        </div>

        {/* Wordmark */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 56,
          }}
        >
          <div
            style={{
              fontFamily: "Fraunces",
              fontWeight: 800,
              fontSize: 140,
              lineHeight: 0.95,
              letterSpacing: -2,
              color: tokens.ink,
              display: "flex",
            }}
          >
            Ketil's Farm
          </div>

          {/* Handwritten subtitle */}
          <div
            style={{
              fontFamily: "Caveat",
              fontWeight: 700,
              fontSize: 56,
              color: tokens.barn,
              marginTop: 24,
              transform: "rotate(-1.5deg)",
              display: "flex",
            }}
          >
            a portfolio for every character.
          </div>
        </div>

        {/* URL chip — bottom left, above grass */}
        <div
          style={{
            position: "absolute",
            left: 80,
            bottom: 110,
            display: "flex",
            alignItems: "center",
            padding: "12px 24px",
            background: tokens.barn,
            color: tokens.paper,
            border: `3px solid ${tokens.ink}`,
            borderRadius: 12,
            boxShadow: `0 4px 0 ${tokens.barn2}`,
            fontFamily: "Nunito",
            fontWeight: 800,
            fontSize: 26,
            letterSpacing: 0.5,
          }}
        >
          ketils.farm
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: fraunces, weight: 800, style: "normal" },
        { name: "Caveat", data: caveat, weight: 700, style: "normal" },
        { name: "Nunito", data: nunito, weight: 800, style: "normal" },
      ],
    },
  )
}
