import { type ReactNode } from "react"

type Variant = "primary" | "sun" | "ghost" | "ink"
type Size    = "default" | "sm"

interface ButtonProps {
  children:  ReactNode
  variant?:  Variant
  size?:     Size
  href?:     string
  onClick?:  () => void
  className?: string
  type?:     "button" | "submit"
}

const base =
  "inline-flex items-center gap-2 font-black no-underline cursor-pointer select-none " +
  "border-[2.5px] border-ink rounded-full " +
  "transition-transform duration-100 ease-in-out " +
  "hover:-translate-x-px hover:-translate-y-0.5 hover:-rotate-1 active:translate-y-0"

const sizeClasses: Record<Size, string> = {
  default: "px-[22px] py-[14px] text-[17px]",
  sm:      "px-[16px] py-[10px] text-[14px]",
}

const variantClasses: Record<Variant, string> = {
  primary: "bg-barn text-white",
  sun:     "bg-sun  text-ink",
  ghost:   "bg-white text-ink",
  ink:     "bg-ink  text-cream",
}

const shadowMap: Record<Variant, string> = {
  primary: "0 4px 0 var(--barn-2)",
  sun:     "0 4px 0 var(--sun-2)",
  ghost:   "0 4px 0 var(--wool-shadow)",
  ink:     "0 4px 0 rgba(0,0,0,.35)",
}

export function Button({
  children, variant = "primary", size = "default",
  href, onClick, className = "", type = "button",
}: ButtonProps) {
  const cls = `${base} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`
  const style = { boxShadow: shadowMap[variant] }

  if (href) return <a href={href} className={cls} style={style}>{children}</a>
  return <button type={type} onClick={onClick} className={cls} style={style}>{children}</button>
}
