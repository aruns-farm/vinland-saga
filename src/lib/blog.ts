export interface BlogPost {
  id: string
  category: string
  titleParts: { before: string; emphasis: string; after: string }
  dek: string
  author: { initials: string; name: string; role: string }
  date: string
  readTime: string
  tags: string[]
  thumbGradient: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "pip-raincloud-button",
    category: "Behind the Scenes",
    titleParts: {
      before: "The day Pip discovered the ",
      emphasis: "raincloud",
      after: " button.",
    },
    dek: "A small lamb. A weather machine. One soggy production schedule. How a five-second gag took our whole studio three weeks to animate, and what we learned along the way.",
    author: { initials: "CL", name: "Coby Lin", role: "Director, Hilltop Studio" },
    date: "Apr 18, 2026",
    readTime: "9 min read",
    tags: ["#behind-the-scenes", "#animation", "#pip", "#season-2"],
    thumbGradient: "linear-gradient(135deg, #bce3ef, #6aa84f)",
  },
  {
    id: "pip-hair-tuft",
    category: "Behind the Scenes",
    titleParts: { before: "How Pip got his hair tuft", emphasis: "", after: "" },
    dek: "The story of a very small design decision with a very large impact.",
    author: { initials: "MP", name: "Mei Park", role: "Head of Story" },
    date: "Mar 5, 2026",
    readTime: "6 min read",
    tags: ["#pip", "#character-design"],
    thumbGradient: "linear-gradient(135deg, #bce3ef, #6aa84f)",
  },
  {
    id: "cardboard-barns",
    category: "Studio",
    titleParts: { before: "A short history of our cardboard barns", emphasis: "", after: "" },
    dek: "Eight barns. Eight collapses. One very understanding insurance company.",
    author: { initials: "CL", name: "Coby Lin", role: "Director, Hilltop Studio" },
    date: "Feb 10, 2026",
    readTime: "8 min read",
    tags: ["#studio", "#props"],
    thumbGradient: "linear-gradient(135deg, #ef9fb0, #c94a3a)",
  },
  {
    id: "storyboards-on-paper",
    category: "Process",
    titleParts: { before: "Why we still draw storyboards on paper", emphasis: "", after: "" },
    dek: "In a fully digital studio, one thing stays stubbornly analogue. Here's why.",
    author: { initials: "KA", name: "Kemi Adesina", role: "Story Artist" },
    date: "Jan 22, 2026",
    readTime: "5 min read",
    tags: ["#process", "#storyboarding"],
    thumbGradient: "linear-gradient(135deg, #ffd48a, #e69b2b)",
  },
]

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find(p => p.id === id)
}
