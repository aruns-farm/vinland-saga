import { type ReactNode } from "react"

interface BadgeProps {
  children: ReactNode
  variant?: "barn" | "sun"
  rotate?: number
  className?: string
}

const variantStyles = {
  barn: "bg-barn text-cream border-ink",
  sun:  "bg-sun  text-ink  border-ink",
}

export function Badge({ children, variant = "barn", rotate = -3, className = "" }: BadgeProps) {
  return (
    <span
      className={`
        inline-block px-3 py-1
        rounded-lg border-[2.5px]
        font-hand text-[18px] font-bold
        ${variantStyles[variant]}
        ${className}
      `}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </span>
  )
}
