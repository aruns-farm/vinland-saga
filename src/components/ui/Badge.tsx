import { type ReactNode } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/cn"

const badge = cva(
  "inline-block px-3 py-[5px] rounded-full border-[2px] font-black text-[11px] uppercase tracking-[.15em]",
  {
    variants: {
      variant: {
        barn:    "bg-barn  text-white border-ink shadow-barn",
        sun:     "bg-sun   text-ink   border-ink shadow-sun",
        outline: "bg-white text-ink   border-ink shadow-xs",
      },
    },
    defaultVariants: { variant: "barn" },
  }
)

type BadgeVariantProps = VariantProps<typeof badge>
export type BadgeVariant = NonNullable<BadgeVariantProps["variant"]>

interface BadgeProps extends BadgeVariantProps {
  children:   ReactNode
  rotate?:    number
  className?: string
}

export function Badge({ children, variant, rotate = -1.5, className }: BadgeProps) {
  return (
    <span
      className={cn(badge({ variant }), className)}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </span>
  )
}
