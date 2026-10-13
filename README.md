# vinland-saga

Ketil's Farm: one repo for the personal sites, as a pnpm workspace.

| Path | What | Stack | Deploys to |
|---|---|---|---|
| `/` | Multi-persona portfolio, one subdomain per person (`portfolios/<id>/`) | Next.js, Tailwind | Cloudflare Workers (`*.ketils.farm`) |
| `notes/` | Arun's essays, reading shelf and paper notes | Astro, static | `notes.ketils.farm` (separate Cloudflare project, root `notes`) |

```bash
pnpm install       # once, at the root
pnpm dev           # portfolio, http://localhost:3000
pnpm notes:dev     # notes, http://localhost:4321
pnpm build         # portfolio
pnpm notes:build   # notes
pnpm storybook     # portfolio component library
```

The notes site has its own toolchain; it is excluded from the portfolio's TypeScript, ESLint and Tailwind scanning.
