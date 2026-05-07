export interface SocialLinks {
  github?:   string
  twitter?:  string
  linkedin?: string
  email?:    string
  website?:  string
}

export interface HeroConfig {
  kicker:      string
  headline:    string
  subtext:     string
  primaryCta:  { label: string; href: string }
  secondaryCta:{ label: string; href: string }
}

export interface TickerItem {
  emoji: string
  text:  string
  em?:   string
}

export interface Project {
  id:          string
  title:       string
  description: string
  tag:         string
  accentColor: string
  href?:       string
  tags?:       string[]
}

export interface WorkEntry {
  id:          string
  role:        string
  company:     string
  period:      string
  description: string
  accentColor: string
  featured?:   boolean
}

export interface SkillCategory {
  icon:  string
  label: string
}

export interface PanelConfig {
  eyebrow:    string
  heading:    string
  subtext:    string
  items:      SkillCategory[]
  dark?:      boolean
}

export interface Article {
  slug:           string
  title:          string
  tag:            string
  summary:        string
  accentGradient: string
}

/* ── Blog ── */

export type BlogSectionType =
  | "p" | "p-lead"
  | "h2" | "h3"
  | "quote" | "callout"
  | "code"
  | "ul" | "ol"

export interface BlogSection {
  type:      BlogSectionType
  text?:     string
  items?:    string[]   /* ul / ol items */
  icon?:     string     /* callout icon */
  title?:    string     /* callout heading */
  cite?:     string     /* quote attribution */
  num?:      number     /* h2 section number */
  id?:       string     /* h2 anchor id */
  language?: string     /* code language */
}

export interface TocEntry {
  label: string
  id:    string
}

export interface BlogPost {
  slug:           string
  title:          string
  tag:            string
  date:           string
  readTime:       string
  accentGradient: string
  summary:        string
  toc:            TocEntry[]
  content:        BlogSection[]
}

/* ── Talks / Watch ── */

export interface TalkChapter {
  num:      number
  title:    string
  subtitle: string
  timecode: string
  accent:   string
}

export interface TalkLine {
  timecode: string
  speaker?: string
  text:     string
}

export interface Talk {
  id:           string
  title:        string
  event:        string
  year:         string
  duration:     string
  totalSeconds?: number
  videoUrl?:    string
  slidesUrl?:   string
  accentColor:  string
  tags:         string[]
  description:  string
  featured?:    boolean
  speakerNote?: string
  chapters?:    TalkChapter[]
  transcript?:  TalkLine[]
}

export interface PortfolioConfig {
  id:        string
  subdomain: string
  name:      string
  handle:    string
  location:  string
  bio:       string
  links:     SocialLinks
  hero:      HeroConfig
  ticker:    TickerItem[]
  projects:  Project[]
  work:      WorkEntry[]
  panels:    [PanelConfig, PanelConfig]
  writing:   Article[]
  talks:     Talk[]
  nav: {
    links: { label: string; href: string }[]
    cta:   { label: string; href: string }
  }
  footer: {
    tagline: string
    columns: { heading: string; links: { label: string; href: string }[] }[]
    legal:   string
  }
}
