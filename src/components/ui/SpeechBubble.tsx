interface SpeechBubbleProps {
  children: React.ReactNode
  variant?: "white" | "sun"
  rotate?: number
  className?: string
}

export function SpeechBubble({ children, variant = "white", rotate = -4, className = "" }: SpeechBubbleProps) {
  const bg = variant === "sun" ? "var(--sun)" : "white"

  return (
    <div
      className={`relative inline-block px-[14px] py-[6px] border-[2.5px] border-ink rounded-[18px] font-hand text-[22px] whitespace-nowrap ${className}`}
      style={{
        background: bg,
        boxShadow: "0 3px 0 var(--wool-shadow)",
        transform: `rotate(${rotate}deg)`,
      }}
    >
      {children}
      {/* tail */}
      <span
        className="absolute border-r-[2.5px] border-b-[2.5px] border-ink"
        style={{
          bottom: -9, left: "30%",
          width: 14, height: 14,
          background: bg,
          transform: "rotate(45deg)",
          display: "block",
        }}
      />
    </div>
  )
}
