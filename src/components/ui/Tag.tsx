import { type ReactNode } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/cn"

/* ─── Eyebrow — handwritten kicker above headings ───────────── */
const eyebrow = cva("font-hand text-[28px] -rotate-2 inline-block", {
  variants: {
    color: {
      barn:  "text-barn",
      grass: "text-grass2",
      sun:   "text-sun2",
      ink:   "text-ink-soft",
    },
  },
  defaultVariants: { color: "grass" },
})

type EyebrowVariantProps = VariantProps<typeof eyebrow>

interface EyebrowProps extends EyebrowVariantProps {
  children:   ReactNode
  className?: string
}

export function Eyebrow({ children, color, className }: EyebrowProps) {
  return (
    <span className={cn(eyebrow({ color }), className)}>{children}</span>
  )
}

/* ─── StickerTag — tilted sticker on card corners ───────────── */
const sticker = cva(
  "absolute top-2.5 right-2.5 border-[2px] rounded-tag font-hand text-[18px] px-2 py-0 rotate-[6deg]",
  {
    variants: {
      variant: {
        sun:   "bg-sun   border-ink text-ink",
        barn:  "bg-barn  border-ink text-white",
        grass: "bg-grass border-ink text-white",
      },
    },
    defaultVariants: { variant: "sun" },
  }
)

type StickerVariantProps = VariantProps<typeof sticker>

interface StickerTagProps extends StickerVariantProps {
  children:   ReactNode
  className?: string
}

export function StickerTag({ children, variant, className }: StickerTagProps) {
  return (
    <span className={cn(sticker({ variant }), className)}>{children}</span>
  )
}

/** Backwards-compat alias */
export const Tag = StickerTag

/* ─── TagPill — pill label with colour variants ─────────────── */
const pill = cva(
  "inline-block px-3 py-0.5 rounded-full font-black text-[12px] uppercase tracking-[.06em]",
  {
    variants: {
      variant: {
        default: "bg-cream  border-[2px] border-dashed border-ink text-ink",
        sun:     "bg-sun    border-[2px] border-ink               text-ink",
        barn:    "bg-barn   border-[2px] border-ink               text-white",
        grass:   "bg-grass  border-[2px] border-ink               text-white",
        dash:    "bg-transparent border-0 text-barn underline decoration-wavy decoration-barn underline-offset-[4px]",
      },
    },
    defaultVariants: { variant: "default" },
  }
)

type PillVariantProps = VariantProps<typeof pill>
export type TagVariant     = NonNullable<PillVariantProps["variant"]>
export type TagPillVariant = TagVariant

interface TagPillProps extends PillVariantProps {
  children:   ReactNode
  className?: string
}

export function TagPill({ children, variant, className }: TagPillProps) {
  return (
    <span className={cn(pill({ variant }), className)}>{children}</span>
  )
}

/** Backwards-compat alias */
export function NewsTag({ children, className }: { children: ReactNode; className?: string }) {
  return <TagPill variant="sun" className={className}>{children}</TagPill>
}
