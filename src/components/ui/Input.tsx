import { type InputHTMLAttributes, type TextareaHTMLAttributes, type ReactNode } from "react"

const inputBase =
  "w-full px-4 py-3 rounded-xl border-[2.5px] border-ink bg-white " +
  "font-body font-semibold text-[16px] text-ink " +
  "placeholder:text-ink/40 " +
  "focus:outline-none focus:ring-2 focus:ring-sun focus:border-sun " +
  "transition-shadow duration-100"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={`${inputBase} ${className}`}
      style={{ boxShadow: "0 3px 0 var(--wool-shadow)" }}
      {...props}
    />
  )
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
}

export function Textarea({ className = "", ...props }: TextareaProps) {
  return (
    <textarea
      className={`${inputBase} resize-none ${className}`}
      style={{ boxShadow: "0 3px 0 var(--wool-shadow)" }}
      {...props}
    />
  )
}

interface FieldProps {
  label: string
  hint?: string
  children: ReactNode
  className?: string
}

export function Field({ label, hint, children, className = "" }: FieldProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="font-black text-[14px] text-ink">{label}</label>
      {children}
      {hint && (
        <p className="text-[13px] font-semibold text-ink/60">{hint}</p>
      )}
    </div>
  )
}
