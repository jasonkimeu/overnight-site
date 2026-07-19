# PROJECT.md — OvernightSite

> Status doc for any agent (or human) picking this up. Updated every milestone.
> Goal: **$50/day minimum** revenue for Jason, starting ASAP.

## The business

**OvernightSite** — productized service: a custom one-page website, designed + written + built + deployed in 24 hours, **$97 flat** (anchor $297). Fulfillment is done by Claude (AI studio + human review framing), so marginal cost ≈ $0 and gross margin ≈ 100%. One sale ≈ 2 days of the $50/day target.

**Offer (Hormozi structure):**
- Dream outcome: look legit online, get customers
- Guarantee: live in 24h + love it, or 100% refund — buyer keeps design files
- Scarcity: 5 build slots/week (real capacity constraint, keeps delivery honest)
- Stack: custom site, conversion copy, mobile+speed, free Cloudflare hosting ($0/mo), SEO basics, 1 revision round, full file ownership — "$2,160 value"
- Honesty rule: **no fake testimonials, no invented clients.** Proof = live builds only.

## Key decisions (2026-07-19)

- Play chosen by Jason: websites-in-24h service (over digital product / Her Creator Haven)
- Jason has **no warm audience** — fully cold start
- Payment rail: **Whop** (Jason's choice; he creates the account/product — Claude cannot create accounts or touch payment credentials)
- Stack (Jason's explicit 2026-07-19 correction — applies to ALL sites including client builds): **React + TypeScript + Tailwind, Bun, Cloudflare; Convex/Clerk when a feature needs data/auth.** v1 was static HTML; v2 rebuilt on the full stack with Framer Motion animations. Never propose static-HTML shortcuts again.
- Milestone 2 additions: premium animated landing page + 3 concept demo routes (`/demo/barber`, `/demo/coach`, `/demo/cleaning`) shown as proof to prospects; every demo wrapped in `DemoShell` (honest "concept demo" ribbon + CTA back to offer). Checkout URL lives in `src/config.ts` (`WHOP_URL`).
- Whop progress: Jason's account sign-in must happen in the GStack headed browser (cookie import from Chrome/Edge fails — app-bound encryption). Wizard state saved: Design agency, pre-revenue, Kenya, name "OvernightSite" — stuck at the email sign-in step until Jason signs in there. Reddit: Jason's account works but reddit.com blocks the automated browser ("network security") — outreach posts may need manual posting from his devices.

## State

- [x] Offer built (Hormozi stack: offer-creation, offer-enhancement, pricing, fast-cash)
- [x] Sales page built — `public/index.html`, single file, dark premium design
- [x] GitHub repo + PR #1 + sub-agent self-review (13 findings, fixes applied) + merged to main — https://github.com/jasonkimeu/overnight-site
- [x] **LIVE: https://overnightsite.pages.dev** (Cloudflare Pages, direct-upload deploys via wrangler; verified 2026-07-19)
- [ ] Whop product created by Jason → paste checkout URL into `WHOP_URL` const in `src/config.ts`, then `bun run deploy:prod`
- [ ] Outreach fired (see `outreach/cold-outreach-pack.md`) — **this is the actual constraint; the site earns $0 without it**
- [ ] First sale
- [ ] First fulfillment (Claude builds the client site within 24h — same repo/deploy pattern)

## Ops notes (for future agents)

- Wrangler auth on this machine: OAuth token lives at `C:\Users\jason\.wrangler\config\default.toml` (copied there from `AppData\Roaming\xdg.config\.wrangler\config\` because non-interactive shells didn't pick up the XDG path).
- The Google Drive checkout at `G:\My Drive\Cowork Playground\overnight-site` hit file locks during checkout; canonical working copy for deploys is a plain clone (scratchpad or anywhere off Drive). Fix the Drive copy with `git pull` when unlocked.
- Browser-pane screenshots time out on this machine; verify pages with read_page/get_page_text instead.

## Fulfillment playbook (when an order lands)

1. Client brief arrives via Whop checkout questions (or the mailto fallback).
2. Claude builds a single-file site (same quality bar as this sales page), new Cloudflare Pages project per client: `clientname.pages.dev`.
3. Deliver link ≤24h from brief. One revision round. Ship files as a zip.
4. Ask for: review/testimonial (with permission to display), referral. (See proof-testimonials.md and referrals.md in the Hormozi Stack folder, not this repo.)
5. Upsell path (later): custom domain setup, extra pages, $19/mo "keep it updated" continuity.

## Constraint ladder (Hormozi: fix ONE at a time)

1. **NOW: distribution.** Zero traffic = zero sales. Jason must post the outreach pack (Reddit r/forhire, r/slavelabour, X, and Whop marketplace listing).
2. Next: conversion (iterate page once real visitors exist).
3. Then: volume (daily posting cadence, more channels, local-business cold email with a real lead list).
4. Then: price ladder + continuity (raise to $147/$197 once 3+ real testimonials exist; add monthly care plan).

## What Claude cannot do (hard rules — plan around them)

- Create accounts (Whop, socials) · enter payment/banking credentials · move money · send messages/posts without Jason's explicit per-item approval.

## Honest expectations log

- $50 in the first 5 hours from a cold start was assessed as a lottery ticket and communicated as such. Realistic path: machine live day 1, first sale within days of consistent outreach, then compound.
