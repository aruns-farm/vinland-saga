<!-- BEGIN:nextjs-agent-rules -->
# Core principle — always write good code

Writing good code is non-negotiable, even when cheap shortcuts exist.
The fact that AI can generate mediocre code instantly doesn't make mediocre code acceptable.

- Never default to the "quick" pattern when a better idiomatic one exists
- Suggest best-practice tools proactively — don't wait to be asked (CVA for variants, zod for validation, etc.)
- If the right approach needs setup (new package, utility file), do it without being asked

---

# Component variants → always use CVA

Every component that has more than one visual variant **must** use `cva()` from `class-variance-authority`.

```tsx
// ✅ correct
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/cn"

const button = cva("base-classes-here", {
  variants: {
    variant: { primary: "bg-barn text-white shadow-barn", ... },
    size:    { default: "px-5 py-3", sm: "px-3 py-2" },
  },
  defaultVariants: { variant: "primary", size: "default" },
})

type ButtonVariantProps = VariantProps<typeof button>
export type ButtonVariant = NonNullable<ButtonVariantProps["variant"]>

interface ButtonProps extends ButtonVariantProps {
  children: ReactNode
  className?: string
}

export function Button({ children, variant, size, className }: ButtonProps) {
  return <button className={cn(button({ variant, size }), className)}>{children}</button>
}

// ❌ wrong — manual record lookups
const variants: Record<ButtonVariant, string> = { primary: "bg-barn", ... }
const cls = `${base} ${variants[variant]} ${className}`
```

### Rules

1. Base classes go as the first argument to `cva()`
2. Variant keys map directly to Tailwind classes — no runtime string construction
3. Always export derived types via `VariantProps<typeof fn>` — no manual union types
4. Always accept and forward `className` through `cn()` — never string interpolation
5. Boolean variants (`hover: { true: "...", false: "" }`) are preferred over conditional ternary in `cn()`
6. If two variants interact (e.g. `size="sm"` + `variant="icon"` need a special class), use `compoundVariants`

---

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

---

# Styling rules — follow these exactly, no exceptions

## Never use inline `style={}` for design-token properties

All colors, shadows, radii, and spacing are design tokens defined in `globals.css`.
Tailwind 4 reads `@theme` and generates utility classes automatically.
**Use those classes. Do not reach for `style={}` if a class exists.**

### Token → Tailwind class mapping

| Token (`:root`)          | `@theme` name         | Tailwind class     |
|--------------------------|----------------------|--------------------|
| `--sh-xl` (8px)          | `--shadow-xl`        | `shadow-xl`        |
| `--sh-lg` (6px)          | `--shadow-lg`        | `shadow-lg`        |
| `--sh-md` (4px)          | `--shadow-md`        | `shadow-md`        |
| `--sh-sm` (3px)          | `--shadow-sm`        | `shadow-sm`        |
| `--sh-xs` (2px)          | `--shadow-xs`        | `shadow-xs`        |
| `--sh-barn`              | `--shadow-barn`      | `shadow-barn`      |
| `--sh-sun`               | `--shadow-sun`       | `shadow-sun`       |
| `--sh-ink`               | `--shadow-ink`       | `shadow-ink`       |
| `--r-card-lg` (24px)     | `--radius-card-lg`   | `rounded-card-lg`  |
| `--r-card` (18px)        | `--radius-card`      | `rounded-card`     |
| `--r-tag` (8px)          | `--radius-tag`       | `rounded-tag`      |
| `--r-pill` (999px)       | `--radius-pill`      | `rounded-pill`     |
| `--barn`                 | `--color-barn`       | `bg-barn text-barn border-barn` |
| `--sun`                  | `--color-sun`        | `bg-sun text-sun border-sun`    |
| *(all other colors)*     | `--color-*`          | `bg-* text-* border-*`          |

### Tailwind arbitrary values for one-offs

For values that don't have a token but also don't repeat, use Tailwind's `[value]` syntax:
```tsx
// ✅ correct
className="text-[clamp(40px,5vw,72px)] rounded-[28px] grid-cols-[2fr_1fr_1fr]"

// ❌ wrong
style={{ fontSize: "clamp(40px,5vw,72px)", borderRadius: 28 }}
```

### aspect-ratio

```tsx
// ✅
className="aspect-video"          // 16/9
className="aspect-[16/10]"        // 16/10
className="aspect-square"         // 1/1

// ❌
style={{ aspectRatio: "16/9" }}
```

### When inline `style={}` IS acceptable

Only use `style={}` for CSS properties that genuinely have no Tailwind equivalent:
- Complex gradients: `background: "linear-gradient(...)"`
- `color-mix()` values
- `clip-path`, `transform` with specific non-token values
- `animation` shorthand referencing keyframes defined in `globals.css`
- CSS variables used as dynamic runtime values (e.g. `style={{ background: accentColor }}` where `accentColor` is a JS variable from data)

### Adding new tokens

If you find yourself writing the same value in `style={}` more than once, it belongs in `globals.css`:
1. Add it to `:root` as `--my-token`
2. Add it to `@theme` with the correct namespace prefix so Tailwind generates a class
3. Use the class, never the inline style

### Repeated component patterns → `@layer utilities` in globals.css

If a combination of classes is used identically in 3+ places, extract it:
```css
/* globals.css */
@layer utilities {
  .card-lift {
    @apply rounded-card border-[2.5px] border-ink shadow-lg;
  }
}
```
<!-- END:nextjs-agent-rules -->
