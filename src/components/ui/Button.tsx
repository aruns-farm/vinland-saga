import { type ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  variant?: "primary" | "ghost"
  href?: string
  onClick?: () => void
  className?: string
  type?: "button" | "submit"
}

const base =
  "inline-flex items-center gap-2 px-[22px] py-[14px] rounded-full font-black text-[17px] " +
  "border-[2.5px] border-ink no-underline cursor-pointer select-none " +
  "transition-transform duration-100 ease-in-out " +
  "hover:-translate-x-px hover:-translate-y-0.5 hover:-rotate-1 active:translate-y-0"

const variants = {
  primary: "bg-barn text-white shadow-[0_4px_0_var(--barn-2)]",
  ghost:   "bg-white text-ink shadow-[0_4px_0_var(--wool-shadow)]",
}

export function Button({ children, variant = "primary", href, onClick, className = "", type = "button" }: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`
  if (href) return <a href={href} className={cls}>{children}</a>
  return <button type={type} onClick={onClick} className={cls}>{children}</button>
}
