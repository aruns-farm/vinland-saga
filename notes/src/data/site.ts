// Everything about you that isn't an essay, book or paper lives here.

export const site = {
  name: 'Arun Negi',
  handle: 'arun.negi / notes',
  title: 'Arun Negi — notes',
  description:
    'Long-form essays on databases, distributed systems and applied ML — written to understand, not to rank. Plus a public log of everything I read.',
  eyebrow: 'Field notes of a working engineer',
  headline: 'Notes on systems, retrieval, and the books that changed how I build them.',
  role: ['Senior full-stack engineer', 'Dehradun, IN', 'Node · Postgres · Rust · AWS'],
  // Point this at Buttondown / ConvertKit / your own endpoint when you set one up.
  subscribeAction: '',
};

export const nav = [
  { label: 'writing', href: '/writing/' },
  { label: 'shelf', href: '/shelf/' },
  { label: 'papers', href: '/papers/' },
  { label: 'about', href: '/about/' },
];

/** The "Now" line. Keep it current — that's what makes it work. */
export const now = {
  updated: '2026-10-12',
  items: [
    { k: 'Reading', v: 'Designing Data-Intensive Applications — the replication chapters.' },
    { k: 'Building', v: 'A screen recorder in Rust, mostly to learn about backpressure.' },
    { k: 'Learning', v: 'Japanese, daily, toward JLPT N1.' },
    { k: 'Writing', v: '[The essay you are drafting right now.]' },
  ],
  // Short version for the home page hero.
  line: 'Reading Kleppmann on replication · rebuilding a screen recorder in Rust · working toward JLPT N1',
};

export const offClock = [
  { k: '日本語', v: 'Daily Anki reps, working toward JLPT N1.' },
  { k: 'Rust', v: 'WASM and CLI experiments; a screen recorder.' },
  { k: 'Maths', v: 'Relearning calculus on the way to ML.' },
  { k: 'Hardware', v: 'Computers from first principles, via Petzold.' },
  { k: 'Ukulele', v: 'How I reset focus between deep-work sprints.' },
  { k: 'Camera', v: 'Photography, as a quiet hobby.' },
];

export const about = {
  headline: "I'm Arun Negi. I build software, and I write to understand it.",
  paragraphs: [
    "I'm a senior full-stack engineer and team lead at Webmark, where I lead a team of five across three production products. About seven years in — freelance, Rubico IT, now Webmark — mostly Node, React, Postgres and AWS.",
    'This site is the other half of the job: the reading, the first-principles digging, and the essays that come out of it. Written slowly, for understanding rather than reach.',
  ],
  portrait: '', // e.g. '/portrait.jpg' (put the file in /public)
  location: 'Dehradun, India',
};

export const links = [
  { k: 'email', v: 'arun@ketils.farm', href: 'mailto:arun@ketils.farm' },
  { k: 'github', v: 'aruns-farm', href: 'https://github.com/aruns-farm' },
  { k: 'linkedin', v: 'arun-negi', href: 'https://linkedin.com/in/arun-negi-77991b201' },
  { k: 'portfolio', v: 'arun.ketils.farm', href: 'https://arun.ketils.farm' },
];

/** Shelf definitions. Binding colours live in global.css as --binding-<code>. */
export const shelves = {
  SYS: { label: 'Systems & databases', edge: false },
  LNG: { label: 'Languages & craft', edge: false },
  IDE: { label: 'Ideas', edge: false },
  NXT: { label: 'Up next', edge: true },
} as const;

export const statusWord = {
  reading: 'reading now',
  finished: 'finished',
  abandoned: 'set aside',
  wishlist: 'up next',
} as const;
