import { type ReactNode } from "react"

interface CardProps {
  children: ReactNode
  variant?: "solid" | "dashed" | "photo"
  hover?: boolean
  className?: string
}

const variantClasses = {
  solid:  "bg-wool border-[2.5px] border-ink rounded-[18px]",
  dashed: "bg-cream border-[2.5px] border-dashed border-ink rounded-[18px]",
  photo:  "bg-cream border-[2.5px] border-ink rounded-[20px] overflow-hidden",
}

export function Card({ children, variant = "solid", hover = false, className = "" }: CardProps) {
  return (
    <div
      className={`
        ${variantClasses[variant]}
        ${hover ? "card-hover" : ""}
        ${className}
      `}
      style={{ boxShadow: "0 6px 0 rgba(0,0,0,.15)" }}
    >
      {children}
    </div>
  )
}

interface PhotoCardProps {
  accentBg: string
  children: ReactNode
  className?: string
  hover?: boolean
}

export function PhotoCard({ accentBg, children, className = "", hover = false }: PhotoCardProps) {
  return (
    <Card variant="photo" hover={hover} className={className}>
      <div
        className="aspect-video border-b-[2.5px] border-ink"
        style={{ background: accentBg }}
      />
      <div className="p-4">{children}</div>
    </Card>
  )
}
