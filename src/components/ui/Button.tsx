import { type ReactNode } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/cn"

const button = cva(
  "inline-flex items-center gap-2 font-black no-underline cursor-pointer select-none " +
  "border-[2.5px] border-ink rounded-full " +
  "transition-transform duration-100 ease-in-out " +
  "hover:-translate-x-px hover:-translate-y-0.5 hover:-rotate-1 active:translate-y-0",
  {
    variants: {
      variant: {
        primary: "bg-barn  text-white  shadow-barn",
        sun:     "bg-sun   text-ink    shadow-sun",
        ghost:   "bg-white text-ink    shadow-md",
        ink:     "bg-ink   text-cream  shadow-ink",
      },
      size: {
        default: "px-5 py-3 text-[15px]",
        sm:      "px-[14px] py-2 text-[13px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

type ButtonVariantProps = VariantProps<typeof button>
export type ButtonVariant = NonNullable<ButtonVariantProps["variant"]>
export type ButtonSize    = NonNullable<ButtonVariantProps["size"]>

interface ButtonProps extends ButtonVariantProps {
  children:   ReactNode
  href?:      string
  onClick?:   () => void
  className?: string
  type?:      "button" | "submit"
}

export function Button({
  children, variant, size, href, onClick, className, type = "button",
}: ButtonProps) {
  const cls = cn(button({ variant, size }), className)
  if (href) return <a href={href} className={cls}>{children}</a>
  return <button type={type} onClick={onClick} className={cls}>{children}</button>
}
