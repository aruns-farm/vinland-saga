# arun.negi / notes

My technical blog — essays, the books on my shelf, and the papers behind them. Built with [Astro](https://astro.build); ships as plain static HTML with a few small scripts.

## Run it

```bash
pnpm install             # from the repo root — installs the whole workspace
pnpm notes:dev           # http://localhost:4321
pnpm notes:build         # static site in notes/dist/
pnpm --filter arun-notes preview   # serve notes/dist/ locally
```

Node 22+ recommended.

## Where things live — you only edit content, never layout

| What | Where |
| --- | --- |
| Essays | `src/content/essays/*.md` — one file per essay |
| Paper notes | `src/content/papers/*.md` — frontmatter for the list; write notes in the body (empty body = list-only) |
| Books | `src/data/books.json` — order in the file = order on the shelf (call numbers follow it) |
| Bio, Now, Off the clock, links, shelf colours | `src/data/site.ts` |
| Styles (one file) | `src/styles/global.css` — tokens at the top, phone rules at the bottom |

### Writing an essay

```yaml
---
number: "013"
title: Your title
dek: One sentence that sits under the title.
date: 2026-11-01
minutes: 12
subject: Databases          # groups it on /writing
tags: [databases, postgres]
media: none                 # video | image | none
draft: false                # true hides it everywhere
---
```

- **`media: video`** — add a `video:` block with `duration` and `chapters` (`title`, `at: "03:48"`, `anchor`). `anchor` is the id of the matching `##` heading (lower-case, hyphenated: `## Who is exempt` → `who-is-exempt`). Each heading gets a ▶ timestamp chip automatically. Add `src: /video/name.mp4` (file in `public/video/`) and the chapters sync with real playback.
- **`media: image`** — add `cover: { src: /img/x.jpg, alt: "...", caption: "..." }` and optionally a `learn:` list for the “In this essay, you'll learn” box.
- In the body you can use `<aside class="margin-note"><span>margin note</span>…</aside>` and `<div class="definition"><span>Definition</span>…</div>`. Footnotes work with `[^1]`.

## Before going live

1. Set `site` in `astro.config.mjs` to the real URL (RSS + sitemap use it).
2. Replace sample content: the placeholder essays (011–008), books, papers and anything in `[brackets]`.
3. Subscribe form: set `subscribeAction` in `src/data/site.ts` to your newsletter endpoint (Buttondown etc.).
4. Optional portrait: put `portrait.jpg` in `public/` and set `about.portrait: '/portrait.jpg'`.

## Deploy

Static output, so any static host works. On Cloudflare, create a separate project from this repo with root directory `notes`, build command `pnpm build`, output directory `dist`, and point `notes.ketils.farm` at it. It deploys independently of the portfolio.

## What's included

- Pages: home, essay, writing index (search + subject filter, `?subject=` links), shelf (carousel per shelf + status filter), papers (topic filter), paper notes, about, 404, `rss.xml`, sitemap.
- Phone layout (< 640px): full-screen menu, trimmed home (3 essays, 2 papers), tap-to-open contents, swipeable chapters/filters/shelves, peeking covers.
- Smooth page transitions (Astro `ClientRouter`), reading-progress bar on essays, `prefers-reduced-motion` respected.
