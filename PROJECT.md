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
- Stack: static HTML/CSS (deliberately no framework — fastest, zero deps), Cloudflare Pages, GitHub repo, PR + sub-agent-review workflow per Jason's prefs

## State

- [x] Offer built (Hormozi stack: offer-creation, offer-enhancement, pricing, fast-cash)
- [x] Sales page built — `public/index.html`, single file, dark premium design
- [ ] GitHub repo + PR + self-review + merge
- [ ] Deployed to Cloudflare Pages (target: overnightsite.pages.dev)
- [ ] Whop product created by Jason → paste checkout URL into `WHOP_URL` const in `public/index.html`
- [ ] Outreach fired (see `outreach/cold-outreach-pack.md`) — **this is the actual constraint; the site earns $0 without it**
- [ ] First sale
- [ ] First fulfillment (Claude builds the client site within 24h — same repo/deploy pattern)

## Fulfillment playbook (when an order lands)

1. Client brief arrives via Whop checkout questions (or the mailto fallback).
2. Claude builds a single-file site (same quality bar as this sales page), new Cloudflare Pages project per client: `clientname.pages.dev`.
3. Deliver link ≤24h from brief. One revision round. Ship files as a zip.
4. Ask for: review/testimonial (with permission to display), referral. (proof-testimonials.md, referrals.md)
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
