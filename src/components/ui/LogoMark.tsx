interface LogoMarkProps {
  size?: number
}

export function LogoMark({ size = 46 }: LogoMarkProps) {
  const s = size
  const eyeSize = Math.round(s * 0.17)
  const eyeTop = Math.round(s * 0.39)
  const eyeL1 = Math.round(s * 0.30)
  const eyeL2 = Math.round(s * 0.52)
  const puffSize = Math.round(s * 0.30)

  return (
    <span
      className="rounded-full relative flex-shrink-0 inline-block bg-wool"
      style={{
        width: s, height: s,
        boxShadow: `inset -4px -5px 0 var(--wool-shadow), 0 2px 0 var(--hoof)`,
      }}
    >
      <span
        className="absolute rounded-full bg-ink"
        style={{ width: eyeSize, height: eyeSize, top: eyeTop, left: eyeL1 }}
      />
      <span
        className="absolute rounded-full bg-ink"
        style={{ width: eyeSize, height: eyeSize, top: eyeTop, left: eyeL2 }}
      />
      <span
        className="absolute rounded-full bg-wool"
        style={{ width: puffSize, height: puffSize, boxShadow: "inset -2px -2px 0 var(--wool-shadow)", top: -4, left: Math.round(s * 0.22) }}
      />
      <span
        className="absolute rounded-full bg-wool"
        style={{ width: puffSize, height: puffSize, boxShadow: "inset -2px -2px 0 var(--wool-shadow)", top: -6, left: Math.round(s * 0.48) }}
      />
      <span
        className="absolute rounded-full bg-wool"
        style={{ width: puffSize, height: puffSize, boxShadow: "inset -2px -2px 0 var(--wool-shadow)", top: -2, left: Math.round(s * 0.70) }}
      />
    </span>
  )
}
