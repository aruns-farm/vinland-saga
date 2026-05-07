interface DividerProps {
  variant?: "dashed" | "ink" | "dots"
  className?: string
}

export function Divider({ variant = "dashed", className = "" }: DividerProps) {
  if (variant === "dots") {
    return (
      <div
        className={`flex items-center justify-center gap-3 py-3 ${className}`}
        aria-hidden="true"
      >
        {[...Array(7)].map((_, i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-ink inline-block"
            style={{ opacity: 0.2 + (i % 3) * 0.15 }}
          />
        ))}
      </div>
    )
  }

  return (
    <hr
      className={`border-0 my-5 ${className}`}
      style={{
        borderTop: variant === "ink"
          ? "3px solid var(--ink)"
          : "2px dashed color-mix(in oklab, var(--ink) 18%, transparent)",
      }}
    />
  )
}
