# OvernightSite

Custom one-page business websites, live in 24 hours, $97 flat.

- **Sales page:** `public/index.html` — single static file, zero dependencies, deployed on Cloudflare Pages.
- **Status & plan:** [PROJECT.md](PROJECT.md)
- **Payment setup (Whop):** [docs/whop-setup.md](docs/whop-setup.md)
- **Outreach:** [outreach/cold-outreach-pack.md](outreach/cold-outreach-pack.md)

## Deploy

```sh
bunx wrangler pages deploy public --project-name overnightsite
```

To wire up checkout: set `WHOP_URL` at the bottom of `public/index.html` to the live Whop checkout link and redeploy.
