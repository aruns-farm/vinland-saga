import { type ReactNode } from "react"

/* ─── Eyebrow ───────────────────────────────────────────────── */
interface EyebrowProps {
  children: ReactNode
  className?: string
}

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <span className={`font-hand text-[28px] text-grass2 -rotate-2 inline-block ${className}`}>
      {children}
    </span>
  )
}

/* ─── StickerTag — tilted label, used on cards ───────────────── */
interface StickerTagProps {
  children: ReactNode
  className?: string
}

export function StickerTag({ children, className = "" }: StickerTagProps) {
  return (
    <span
      className={`
        absolute top-2.5 right-2.5
        bg-sun border-2 border-ink rounded-md
        font-hand text-[18px]
        px-2 py-0 rotate-[6deg]
        ${className}
      `}
    >
      {children}
    </span>
  )
}

/* kept for backwards compat — alias for StickerTag */
export const Tag = StickerTag

/* ─── TagPill — pill-shaped label with variants ─────────────── */
type TagVariant = "default" | "sun" | "barn" | "grass" | "dash"

interface TagPillProps {
  children: ReactNode
  variant?: TagVariant
  className?: string
}

const pillVariants: Record<TagVariant, string> = {
  default: "bg-cream border-[2px] border-dashed border-ink text-ink",
  sun:     "bg-sun   border-[2px] border-ink text-ink",
  barn:    "bg-barn  border-[2px] border-ink text-white",
  grass:   "bg-grass border-[2px] border-ink text-white",
  dash:    "bg-transparent border-0 text-barn underline decoration-wavy decoration-barn underline-offset-[4px]",
}

export function TagPill({ children, variant = "default", className = "" }: TagPillProps) {
  return (
    <span
      className={`
        inline-block px-3 py-0.5
        rounded-full font-black text-[12px] uppercase tracking-[.06em]
        ${pillVariants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  )
}

/* kept for backwards compat — NewsTag maps to TagPill with sun variant */
export function NewsTag({ children, className = "" }: TagPillProps) {
  return <TagPill variant="sun" className={className}>{children}</TagPill>
}
