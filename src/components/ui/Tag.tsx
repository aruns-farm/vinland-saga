interface TagProps {
  children: React.ReactNode
  className?: string
}

export function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={`
        absolute top-2.5 right-2.5
        bg-sun border-2 border-ink rounded-md
        font-[family-name:var(--font-caveat)] text-[18px]
        px-2 py-0 rotate-[6deg]
        ${className}
      `}
    >
      {children}
    </span>
  )
}

export function Eyebrow({ children, className = "" }: TagProps) {
  return (
    <span
      className={`
        font-[family-name:var(--font-caveat)] text-[28px] text-grass2
        -rotate-2 inline-block
        ${className}
      `}
    >
      {children}
    </span>
  )
}

export function NewsTag({ children }: TagProps) {
  return (
    <span className="inline-block bg-sun px-2.5 py-0.5 rounded-full text-[12px] font-black uppercase tracking-[.06em] border-2 border-ink">
      {children}
    </span>
  )
}
