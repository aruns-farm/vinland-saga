import type { PortfolioConfig } from "@/lib/types"
import { talks } from "./talks"

export const config: PortfolioConfig = {
  id:        "arun",
  subdomain: "arun",
  name:      "Arun Negi",
  handle:    "@aruns-farm",
  location:  "New Delhi, India",
  bio:       "Builder of things. Fan of good design, weird anime arcs, and clean code. Currently at the farm.",
  links: {
    github:  "https://github.com/aruns-farm",
    email:   "arun.vinland@gmail.com",
  },

  nav: {
    links: [
      { label: "Home",    href: "/" },
      { label: "Writing", href: "/blog" },
      { label: "Watch",   href: "/watch" },
    ],
    cta: { label: "✉ Get in touch", href: "#contact" },
  },

  hero: {
    kicker:      "Hello there! 👋",
    headline:    "I build things *people* love to use.",
    subtext:     "Full-stack developer with a taste for thoughtful interfaces, well-structured systems, and the occasional absurd side-project. Welcome to the farm.",
    primaryCta:  { label: "▶ See my work",  href: "#projects" },
    secondaryCta:{ label: "About me",       href: "#skills" },
  },

  ticker: [
    { emoji: "⚡", em: "TYPESCRIPT",  text: "— typed all the way down" },
    { emoji: "🌾", text: "Next.js · React · Node.js" },
    { emoji: "🏆", em: "OPEN SOURCE", text: "— contributor" },
    { emoji: "🎨", text: "Design systems & component libraries" },
    { emoji: "🐑", em: "AVAILABLE",   text: "for interesting projects" },
    { emoji: "📍", text: "New Delhi, India" },
  ],

  projects: [
    {
      id:          "ketils-farm",
      title:       "Ketil's Farm",
      description: "Multi-persona portfolio platform. Multiple subdomains, one codebase, infinite characters.",
      tag:         "this site",
      accentColor: "#bce3ef",
      tags:        ["Next.js", "Vercel", "TypeScript"],
    },
    {
      id:          "p2",
      title:       "Project Two",
      description: "Something interesting you built that solves a real problem elegantly.",
      tag:         "product",
      accentColor: "#ffe38b",
      tags:        ["React", "Node.js"],
    },
    {
      id:          "p3",
      title:       "Project Three",
      description: "A tool, library, or experiment worth showing off.",
      tag:         "open source",
      accentColor: "#ef9fb0",
      tags:        ["Python", "API"],
    },
    {
      id:          "p4",
      title:       "Project Four",
      description: "Another piece of work you're proud of.",
      tag:         "client work",
      accentColor: "#6aa84f",
      tags:        ["TypeScript", "Tailwind"],
    },
    {
      id:          "p5",
      title:       "Project Five",
      description: "Design, engineering, or something in between.",
      tag:         "design",
      accentColor: "#f6c14b",
      tags:        ["Figma", "React"],
    },
    {
      id:          "p6",
      title:       "Project Six",
      description: "Side quest you shipped and actually use yourself.",
      tag:         "side project",
      accentColor: "#c94a3a",
      tags:        ["Go", "CLI"],
    },
  ],

  work: [
    {
      id:          "job1",
      role:        "Senior Frontend Engineer",
      company:     "Company Name",
      period:      "2023 – Present",
      description: "Leading the frontend architecture for a consumer product used by millions. Built the design system from scratch, improved core web vitals, shipped a dozen major features.",
      accentColor: "linear-gradient(180deg, #bce3ef 0 55%, #6aa84f 55% 100%)",
      featured:    true,
    },
    {
      id:          "job2",
      role:        "Full-Stack Developer",
      company:     "Previous Company",
      period:      "2021 – 2023",
      description: "Worked across the stack on a B2B SaaS product. Owned the data pipeline, revamped the dashboard, and mentored two junior developers.",
      accentColor: "linear-gradient(180deg, #f6c14b 0 55%, #8b6a45 55% 100%)",
    },
    {
      id:          "job3",
      role:        "Freelance Developer",
      company:     "Independent",
      period:      "2019 – 2021",
      description: "Shipped websites, apps, and tools for a range of clients. Learned to read a brief, manage expectations, and deliver on time.",
      accentColor: "linear-gradient(180deg, #6a7fb0 0 55%, #3a6a28 55% 100%)",
    },
  ],

  panels: [
    {
      eyebrow: "~ what I work with ~",
      heading: "Technical *Skills*",
      subtext: "Languages and frameworks I use daily, or at least weekly.",
      items: [
        { icon: "⚡", label: "TypeScript" },
        { icon: "⚛️", label: "React / Next.js" },
        { icon: "🟢", label: "Node.js" },
        { icon: "🐍", label: "Python" },
        { icon: "🗄️", label: "PostgreSQL" },
        { icon: "🔴", label: "Redis" },
      ],
    },
    {
      eyebrow: "~ the rest of the stack ~",
      heading: "Tools & Craft",
      subtext: "Things that make the work better or faster.",
      dark: true,
      items: [
        { icon: "🖌️", label: "Figma" },
        { icon: "▲",   label: "Vercel" },
        { icon: "🐳", label: "Docker" },
        { icon: "🔧", label: "GitHub Actions" },
        { icon: "🧪", label: "Vitest / Testing Library" },
        { icon: "📦", label: "Turborepo" },
      ],
    },
  ],

  writing: [
    {
      slug:           "utility-classes-inline",
      title:          "Why I stopped writing utility classes inline",
      tag:            "Engineering",
      summary:        "A practical case for co-locating styles with logic, and what I learned after three years of Tailwind.",
      accentGradient: "linear-gradient(135deg, #bce3ef, #6aa84f)",
    },
    {
      slug:           "quiet-joy-small-tools",
      title:          "The quiet joy of small tools",
      tag:            "Craft",
      summary:        "On building things that do one thing well, and why side projects are where I actually learn.",
      accentGradient: "linear-gradient(135deg, #ef9fb0, #c94a3a)",
    },
    {
      slug:           "ketils-farm-multi-persona-web",
      title:          "Ketil's Farm and the multi-persona web",
      tag:            "Meta",
      summary:        "The idea behind this portfolio site, and why I think the subdomain-per-character model is genuinely interesting.",
      accentGradient: "linear-gradient(135deg, #f6c14b, #e69b2b)",
    },
  ],

  talks,

  footer: {
    tagline: "A builder living at the farm. Making things on the internet since 2019.",
    columns: [
      {
        heading: "Work",
        links: [
          { label: "Projects",   href: "#projects" },
          { label: "Experience", href: "#work" },
          { label: "Skills",     href: "#skills" },
        ],
      },
      {
        heading: "Connect",
        links: [
          { label: "Email",     href: "mailto:arun.vinland@gmail.com" },
          { label: "GitHub",    href: "https://github.com/aruns-farm" },
          { label: "Writing",   href: "#writing" },
        ],
      },
      {
        heading: "The Farm",
        links: [
          { label: "ketils.farm",          href: "https://ketils.farm" },
          { label: "thorfinn.ketils.farm", href: "https://thorfinn.ketils.farm" },
        ],
      },
    ],
    legal: "© 2026 Arun Negi · arun.ketils.farm",
  },
}
