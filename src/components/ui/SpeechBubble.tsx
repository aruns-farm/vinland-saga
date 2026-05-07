import { type ReactNode } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/cn"

const bubble = cva(
  "relative inline-block px-[14px] py-[6px] border-[2.5px] border-ink rounded-[18px] font-hand text-[22px] whitespace-nowrap shadow-xs",
  {
    variants: {
      variant: {
        white: "bg-white text-ink",
        sun:   "bg-sun   text-ink",
        barn:  "bg-barn  text-white",
      },
    },
    defaultVariants: { variant: "white" },
  }
)

const tail = cva(
  "absolute border-r-[2.5px] border-b-[2.5px] border-ink w-[14px] h-[14px] bottom-[-9px] left-[30%] rotate-45 block",
  {
    variants: {
      variant: {
        white: "bg-white",
        sun:   "bg-sun",
        barn:  "bg-barn",
      },
    },
    defaultVariants: { variant: "white" },
  }
)

type BubbleVariantProps = VariantProps<typeof bubble>
export type SpeechBubbleVariant = NonNullable<BubbleVariantProps["variant"]>

interface SpeechBubbleProps extends BubbleVariantProps {
  children:   ReactNode
  rotate?:    number
  className?: string
}

export function SpeechBubble({ children, variant, rotate = -4, className }: SpeechBubbleProps) {
  return (
    <div
      className={cn(bubble({ variant }), className)}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
      <span className={tail({ variant })} aria-hidden="true" />
    </div>
  )
}
