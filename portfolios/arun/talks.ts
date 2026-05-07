import type { Talk } from "@/lib/types"

export const talks: Talk[] = [
  {
    id:           "ts-at-scale",
    title:        "TypeScript at Scale: Patterns That Don't Break in Year Three",
    event:        "CityJS New Delhi",
    year:         "2024",
    duration:     "30:24",
    totalSeconds: 1824,
    accentColor:  "#bce3ef",
    tags:         ["TypeScript", "Architecture"],
    description:  "How to structure TypeScript in a codebase that grows past the point where 'just add a type' stops working. Covers discriminated unions, branded types, and module boundaries.",
    featured:     true,
    speakerNote:  "This talk came from eighteen months of watching a mid-size codebase slowly become impossible to refactor. Not because the developers were bad — they were excellent — but because the TypeScript patterns they'd chosen in year one had invisible load-bearing assumptions that broke under team growth. What follows is what we changed, and why.",
    chapters: [
      { num: 1, title: "The scale problem",        subtitle: "Why most TS patterns break after year two.",    timecode: "00:00", accent: "var(--sky)" },
      { num: 2, title: "Discriminated unions",     subtitle: "The pattern I reach for first, every time.",   timecode: "08:30", accent: "var(--sun)" },
      { num: 3, title: "Branded types",            subtitle: "Type-safe IDs that prevent entire bug classes.", timecode: "15:44", accent: "var(--barn)" },
      { num: 4, title: "Module boundaries",        subtitle: "Where to draw the lines in large codebases.",  timecode: "22:10", accent: "var(--pink)" },
      { num: 5, title: "Q&A",                      subtitle: "Audience questions, some very hard ones.",     timecode: "27:30", accent: "var(--sky-2)" },
    ],
    transcript: [
      { timecode: "00:14", speaker: "ARUN", text: "Right. Let's talk about what happens when TypeScript gets big." },
      { timecode: "00:42", speaker: "ARUN", text: "In year one, you add types to your JavaScript. In year two, you fix the any. In year three, you realise the types were all wrong to begin with." },
      { timecode: "08:30", speaker: "ARUN", text: "Discriminated unions. Specifically: every non-trivial state machine in your app should be one." },
      { timecode: "15:44", speaker: "ARUN", text: "UserId is not a string. It's a branded string — and that distinction saves you from an entire class of runtime bugs the compiler would otherwise miss." },
      { timecode: "22:10", speaker: "ARUN", text: "Module boundaries are where most teams give up. I want to talk about why, and what to do instead." },
      { timecode: "27:42", speaker: "Q", text: "How do you handle branded types across API boundaries — serialisation and deserialisation?" },
      { timecode: "28:01", speaker: "ARUN", text: "Great question. You validate at the edge. Zod, or a type guard. Inside the boundary everything is already branded — you trust it." },
    ],
  },
  {
    id:          "design-systems",
    title:       "Design Systems Without the Ceremony",
    event:       "ReactIndia 2024",
    year:        "2024",
    duration:    "25:00",
    accentColor: "#f6c14b",
    tags:        ["React", "Design Systems", "CSS"],
    description: "A field report on building a design system for a product team of twelve without turning it into a six-month project. What to copy, what to skip, and what actually matters.",
  },
  {
    id:          "multi-persona",
    title:       "The Multi-Persona Web",
    event:       "Delhi JS Meetup",
    year:        "2025",
    duration:    "20:00",
    accentColor: "#ef9fb0",
    tags:        ["Next.js", "Architecture", "Web"],
    description: "A lightning talk on building Ketil's Farm — serving multiple personas from a single codebase using Next.js middleware and per-character config files.",
  },
]

export function getFeaturedTalk(): Talk {
  return talks.find(t => t.featured) ?? talks[0]
}
