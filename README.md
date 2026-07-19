# OvernightSite

Custom websites for small businesses, live in 24 hours, $97 flat. **Live: https://overnightsite.pages.dev**

React 19 + TypeScript + Tailwind v4 (Vite), Bun tooling, Cloudflare Pages. Framer Motion animations.

- `src/pages/Home.tsx` — sales landing page (Hormozi offer stack)
- `src/pages/demos/` — premium concept demos shown to prospects (barber, coach, cleaning), each wrapped in `DemoShell` with an honest "concept demo" ribbon
- `src/config.ts` — `WHOP_URL` checkout link (mailto fallback until set)
- **Status & plan:** [PROJECT.md](PROJECT.md) · **Payments:** [docs/whop-setup.md](docs/whop-setup.md) · **Outreach:** [outreach/cold-outreach-pack.md](outreach/cold-outreach-pack.md)

## Commands

```sh
bun install
bun run typecheck
bun run build      # tsc + vite build → dist/
bun run deploy     # build + wrangler pages deploy (production, from main only)
```

Deploys are direct-upload via wrangler (do not also Git-connect the Pages project). Branch previews: `bunx wrangler pages deploy dist --project-name overnightsite --branch <branch>`.
