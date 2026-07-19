# OvernightSite

Custom one-page business websites, live in 24 hours, $97 flat.

- **Sales page:** `public/index.html` — single static file, zero dependencies, deployed on Cloudflare Pages.
- **Status & plan:** [PROJECT.md](PROJECT.md)
- **Payment setup (Whop):** [docs/whop-setup.md](docs/whop-setup.md)
- **Outreach:** [outreach/cold-outreach-pack.md](outreach/cold-outreach-pack.md)

## Deploy

Deploys are direct-upload from `main` via wrangler (canonical method — do not also Git-connect the Pages project, or deployments will conflict):

```sh
bunx wrangler pages deploy public --project-name overnightsite --branch main
```

To wire up checkout: set `WHOP_URL` at the bottom of `public/index.html` to the live Whop checkout link and redeploy.
