import type { BlogPost } from "@/lib/types"

export const posts: BlogPost[] = [
  {
    slug:           "utility-classes-inline",
    title:          "Why I stopped writing utility classes inline",
    tag:            "Engineering",
    date:           "April 14, 2025",
    readTime:       "6 min read",
    accentGradient: "linear-gradient(135deg, #bce3ef, #6aa84f)",
    summary:        "A practical case for co-locating styles with logic, and what I learned after three years of Tailwind.",
    toc: [
      { label: "The problem isn't the utility classes", id: "s1" },
      { label: "Co-location without the noise",         id: "s2" },
      { label: "What I'd tell past me",                 id: "s3" },
    ],
    content: [
      {
        type: "p-lead",
        text: "Three years ago I was all-in on utility-first CSS. I had the Tailwind docs bookmarked, I'd written a company-internal talk about it, and I was refactoring every component I touched to strip out .css files. I was, in short, a true believer.",
      },
      {
        type: "p",
        text: "Then I had to debug a button that broke in production. Finding the styles meant reading 47 class names in sequence. I fixed the bug in four minutes and spent twenty minutes afterwards staring at the markup trying to understand what I'd changed.",
      },
      { type: "h2", num: 1, id: "s1", text: "The problem isn't the *utility classes*" },
      {
        type: "p",
        text: "Utility classes aren't the problem. The problem is the habit of reaching for them inline for every style decision, including ones that have semantic meaning — hover states, focus rings, theme-specific colours — that belong to a component's contract, not its implementation.",
      },
      {
        type: "quote",
        text: "Components should own their visual contract. Inline utilities work for layout and spacing. They fall apart for anything stateful or variant-driven.",
        cite: "— a lesson from six months of regret",
      },
      {
        type: "p",
        text: "What I've landed on: use Tailwind for layout, spacing, and responsive behaviour. Extract everything else — variants, states, conditional logic — into a typed component interface. The Button should accept variant=\"primary\", not className=\"bg-[#c94a3a] border-2 border-ink shadow-[0_4px_0_#a23a2c]\".",
      },
      { type: "h2", num: 2, id: "s2", text: "Co-location *without* the noise" },
      {
        type: "p",
        text: "The pattern that works best for me is a const map of variant strings at the top of the component file. The logic stays in TypeScript where it's type-safe, and the markup stays clean enough to read in a code review.",
      },
      {
        type: "code",
        language: "ts",
        text: `const variantClasses = {\n  primary: "bg-barn text-white",\n  sun:     "bg-sun  text-ink",\n  ghost:   "bg-white text-ink",\n} satisfies Record<Variant, string>`,
      },
      {
        type: "callout",
        icon: "📐",
        title: "~ a note on Tailwind v4 ~",
        text: "In Tailwind v4, tokens defined in @theme (--color-barn, etc.) become first-class utility classes. You can write bg-barn instead of bg-[#c94a3a]. The variant map approach still applies — the point is that the variant logic lives in TypeScript, not in the JSX.",
      },
      {
        type: "p",
        text: "This is not a revolutionary idea. But it took me three years of Tailwind to stop feeling like extracting variant logic into a map was somehow \"less Tailwind\" and start treating it as the natural extension of the tool the authors always intended.",
      },
      { type: "h2", num: 3, id: "s3", text: "What I'd tell *past me*" },
      {
        type: "p",
        text: "Tailwind is an excellent design token system and a decent layout language. It is not a substitute for component thinking. Use it for the former, delegate the latter to TypeScript, and your future self will thank you at 11pm when something breaks in staging.",
      },
      {
        type: "ul",
        items: [
          "Use Tailwind for layout, spacing, responsive, and animation classes.",
          "Use variant maps or cva for anything with states or named variants.",
          "Never put a raw hex value in a className — if it's not a token, make it one.",
          "Write the types first. The CSS will follow.",
        ],
      },
    ],
  },
  {
    slug:           "quiet-joy-small-tools",
    title:          "The quiet joy of small tools",
    tag:            "Craft",
    date:           "March 3, 2025",
    readTime:       "4 min read",
    accentGradient: "linear-gradient(135deg, #ef9fb0, #c94a3a)",
    summary:        "On building things that do one thing well, and why side projects are where I actually learn.",
    toc: [
      { label: "The learning multiplier", id: "s1" },
      { label: "The only rule",           id: "s2" },
    ],
    content: [
      {
        type: "p-lead",
        text: "The best thing I shipped last year was a 200-line Node script that watches a folder and auto-renames screenshots based on their content using a local vision model. Nobody asked for it. It doesn't have tests. The README is a single line. It runs every time I take a screenshot and I never think about it.",
      },
      {
        type: "p",
        text: "That's the thing about small tools: when they work, they disappear.",
      },
      { type: "h2", num: 1, id: "s1", text: "The *learning* multiplier" },
      {
        type: "p",
        text: "Big projects teach you coordination. Small tools teach you craft. There's no committee to defer decisions to, no deadline that justifies cutting a corner, no existing architecture to blame for a weird tradeoff. It's just you, the problem, and the implementation.",
      },
      {
        type: "callout",
        icon: "🛠️",
        title: "~ tools from last year ~",
        text: "A local bookmark deduplicator. A markdown-to-structured-JSON transformer. A tiny Express wrapper for consistent error envelopes. The screenshot renamer. None on GitHub. All used daily.",
      },
      {
        type: "quote",
        text: "A tool that does one thing well is worth more than a platform that does ten things adequately.",
        cite: "— the Unix philosophy, still holding up",
      },
      { type: "h2", num: 2, id: "s2", text: "The *only* rule" },
      {
        type: "p",
        text: "I have one rule for personal tools: they have to be useful to me within the first ten minutes. If I'm still fighting the implementation when the itch they were supposed to scratch is already fading, I stop. This is the opposite of how I approach work projects, which is probably why it's enjoyable.",
      },
      {
        type: "p",
        text: "Side projects that stay small and serve a real personal need are how I remember that programming can be fun. Not as a career move. Not as a portfolio piece. Just a thing that did not exist, and now it does, and it makes the folder full of screenshots slightly less chaotic.",
      },
    ],
  },
  {
    slug:           "ketils-farm-multi-persona-web",
    title:          "Ketil's Farm and the multi-persona web",
    tag:            "Meta",
    date:           "May 1, 2025",
    readTime:       "5 min read",
    accentGradient: "linear-gradient(135deg, #f6c14b, #e69b2b)",
    summary:        "The idea behind this portfolio site, and why I think the subdomain-per-character model is genuinely interesting.",
    toc: [
      { label: "The technical model",  id: "s1" },
      { label: "What I actually learned", id: "s2" },
    ],
    content: [
      {
        type: "p-lead",
        text: "This portfolio is running on a platform I built called Ketil's Farm. The premise is simple: one codebase, multiple characters, each with their own subdomain. arun.ketils.farm is me. thorfinn.ketils.farm is a Viking. The farm is a shared world, but each character has their own voice.",
      },
      {
        type: "p",
        text: "I built it because I was tired of portfolio sites that read like resumes. The format is deeply conservative — hero section, projects, experience, contact. Every developer's portfolio looks like a variation on the same template. I wanted to try something more expressive.",
      },
      { type: "h2", num: 1, id: "s1", text: "The *technical* model" },
      {
        type: "p",
        text: "The implementation is a Next.js app with middleware that inspects the subdomain and routes to the right config. Each portfolio is a TypeScript config file that defines the content, colours, and copy. The UI components are shared; the personality isn't.",
      },
      {
        type: "code",
        language: "ts",
        text: `// portfolios/arun/config.ts\nexport const config: PortfolioConfig = {\n  id: "arun",\n  name: "Arun Negi",\n  bio: "Builder of things. Fan of good design...",\n  // each portfolio gets its own blog posts, talks, projects\n}`,
      },
      {
        type: "ol",
        items: [
          "Config file defines: name, bio, hero copy, projects, work, writing, talks.",
          "Shared UI components render the design system — same layout, different data.",
          "Subdomain middleware (or direct deployment) routes to the right config.",
          "Blog posts and talks live alongside the config — per-portfolio, not global.",
        ],
      },
      { type: "h2", num: 2, id: "s2", text: "What I *actually* learned" },
      {
        type: "p",
        text: "The most interesting design challenge was building a system flexible enough to express different personalities without becoming a theming engine with infinite knobs. The constraint that helped most: each config can only set content and accent colours. Layout and spacing are fixed.",
      },
      {
        type: "quote",
        text: "The best constraint is one that eliminates a whole category of bad decisions.",
        cite: "— the design system, implicitly",
      },
      {
        type: "callout",
        icon: "🐑",
        title: "~ a note on the design ~",
        text: "The Woolly & Co. design system was built alongside this portfolio. Everything you see — the cream background, the barn-red accents, the chunky ink borders — comes from a single design language with 14 colour tokens and a strict set of component rules.",
      },
      {
        type: "p",
        text: "The second thing I learned: a portfolio site is never really about the portfolio. It's about the person. Whether it's a Viking who takes on impossible raids or a developer who writes 200-line scripts for folder hygiene, the character is the point.",
      },
    ],
  },
]

export function getPost(slug: string): BlogPost | undefined {
  return posts.find(p => p.slug === slug)
}

export function getSlugs(): string[] {
  return posts.map(p => p.slug)
}
