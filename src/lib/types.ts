export interface SocialLinks {
  github?:   string
  twitter?:  string
  linkedin?: string
  email?:    string
  website?:  string
}

export interface HeroConfig {
  kicker:      string
  headline:    string        /* supports *emphasis* wrapping */
  subtext:     string
  primaryCta:  { label: string; href: string }
  secondaryCta:{ label: string; href: string }
}

export interface TickerItem {
  emoji: string
  text:  string
  em?:   string             /* highlighted word */
}

export interface Project {
  id:          string
  title:       string
  description: string
  tag:         string
  accentColor: string       /* background color for portrait area */
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
  title:       string
  tag:         string
  summary:     string
  accentGradient: string
  href?:       string
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
  panels:    [PanelConfig, PanelConfig]  /* [left, right] */
  writing:   Article[]
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
