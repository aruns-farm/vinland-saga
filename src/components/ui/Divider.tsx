import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/cn"

export type DividerVariant = "dashed" | "ink" | "dots" | "wavy"

const hrDivider = cva("border-0 my-5", {
  variants: {
    variant: {
      dashed: "[border-top:2px_dashed_var(--rule)]",
      ink:    "[border-top:var(--b-thick)]",
    },
  },
  defaultVariants: { variant: "dashed" },
})

interface DividerProps {
  variant?:   DividerVariant
  className?: string
}

export function Divider({ variant = "dashed", className }: DividerProps) {
  if (variant === "wavy") {
    return (
      <div
        className={cn("h-[14px] my-2", className)}
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle at 7px 14px, var(--sun) 7px, transparent 8px) repeat-x",
          backgroundSize: "14px 14px",
        }}
      />
    )
  }

  if (variant === "dots") {
    return (
      <div className={cn("flex items-center justify-center gap-3 py-3", className)} aria-hidden="true">
        {[...Array(7)].map((_, i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-ink inline-block"
            style={{ opacity: 0.2 + (i % 3) * 0.15 }}
          />
        ))}
      </div>
    )
  }

  return (
    <hr className={cn(hrDivider({ variant: variant as "dashed" | "ink" }), className)} />
  )
}
