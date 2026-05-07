import { type InputHTMLAttributes, type TextareaHTMLAttributes, type ReactNode } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/cn"

const inputBase = cva(
  "w-full px-[18px] py-3 border-[2.5px] border-ink bg-white " +
  "font-body font-bold text-[15px] text-ink " +
  "placeholder:text-ink/40 " +
  "focus:outline-none focus:bg-cream focus:border-ink " +
  "transition-colors duration-100 shadow-md",
  {
    variants: {
      shape: {
        pill:  "rounded-full",
        multi: "rounded-2xl resize-none",
      },
    },
    defaultVariants: { shape: "pill" },
  }
)

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export function Input({ className, ...props }: InputProps) {
  return <input className={cn(inputBase({ shape: "pill" }), className)} {...props} />
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
}

export function Textarea({ className, ...props }: TextareaProps) {
  return <textarea className={cn(inputBase({ shape: "multi" }), className)} {...props} />
}

/* ─── Checkbox ─────────────────────────────────────────────── */
const checkmark = cva(
  "flex-shrink-0 w-6 h-6 border-[2.5px] border-ink flex items-center justify-center text-white font-black text-[15px] shadow-xs",
  {
    variants: {
      round:   { true: "rounded-full", false: "rounded-md" },
      checked: { true: "bg-barn",      false: "bg-white"   },
    },
    defaultVariants: { round: false, checked: false },
  }
)

type CheckmarkVariantProps = VariantProps<typeof checkmark>

interface CheckboxProps {
  label:      string
  checked?:   boolean
  onChange?:  (v: boolean) => void
  round?:     boolean
  className?: string
}

export function Checkbox({ label, checked = false, onChange, round = false, className }: CheckboxProps) {
  return (
    <label className={cn("inline-flex items-center gap-2.5 font-bold cursor-pointer select-none", className)}>
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={e => onChange?.(e.target.checked)}
      />
      <span
        className={checkmark({ round, checked } as CheckmarkVariantProps)}
        aria-hidden="true"
      >
        {checked && (round ? <span className="w-2.5 h-2.5 rounded-full bg-white" /> : "✓")}
      </span>
      <span>{label}</span>
    </label>
  )
}

/* ─── Field — label + input/textarea slot ───────────────────── */
interface FieldProps {
  label:      string
  hint?:      string
  children:   ReactNode
  className?: string
}

export function Field({ label, hint, children, className }: FieldProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label className="font-hand text-[19px] text-barn pl-3.5">{label}</label>
      {children}
      {hint && <p className="text-[13px] font-semibold text-ink/60 pl-3.5">{hint}</p>}
    </div>
  )
}
