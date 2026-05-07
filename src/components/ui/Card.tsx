import { type ReactNode } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/cn"

const card = cva("shadow-lg", {
  variants: {
    variant: {
      solid:  "bg-wool  border-[2.5px] border-ink  rounded-card",
      dashed: "bg-cream border-[2.5px] border-dashed border-ink rounded-card",
      photo:  "bg-cream border-[2.5px] border-ink  rounded-card-lg overflow-hidden",
    },
    hover: {
      true:  "card-hover",
      false: "",
    },
  },
  defaultVariants: {
    variant: "solid",
    hover: false,
  },
})

type CardVariantProps = VariantProps<typeof card>
export type CardVariant = NonNullable<CardVariantProps["variant"]>

interface CardProps extends CardVariantProps {
  children:   ReactNode
  className?: string
}

export function Card({ children, variant, hover, className }: CardProps) {
  return (
    <div className={cn(card({ variant, hover }), className)}>
      {children}
    </div>
  )
}

interface PhotoCardProps {
  accentBg:   string
  children:   ReactNode
  className?: string
  hover?:     boolean
}

export function PhotoCard({ accentBg, children, className, hover = false }: PhotoCardProps) {
  return (
    <Card variant="photo" hover={hover} className={className}>
      {/* accentBg is a data-driven JS variable — inline style is correct here */}
      <div className="aspect-video border-b-[2.5px] border-ink" style={{ background: accentBg }} />
      <div className="p-4">{children}</div>
    </Card>
  )
}
