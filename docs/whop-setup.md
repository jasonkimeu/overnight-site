# Whop setup — Jason's 15 minutes

Claude can't create accounts or touch payment credentials, so this part is yours. Do it once; everything else is automated after.

## 1. Create the store (~5 min)

1. Go to https://whop.com → **Sell on Whop** → sign up (Google login is fastest).
2. Business name: **OvernightSite**. Claim handle `overnightsite` if free.
3. Connect payouts (bank / card) when prompted — required before you can get paid.

## 2. Create the product (~5 min)

- Type: **One-time purchase**
- Name: `24-Hour Website Build — $97 (launch price)`
- Price: **$97** (if Whop shows a compare-at/strike-through field, set $297)
- Description (paste):

> Your business, online by tomorrow morning. A custom one-page website — designed, written, built and launched in 24 hours for $97 flat. Includes conversion copywriting, mobile-perfect layout, free forever hosting (Cloudflare, $0/month), SEO essentials, and one full revision round. You own all the files. **Guarantee: live in 24 hours and you love it — or 100% refund, and you keep the design anyway.** 5 build slots per week.

- **Checkout questions** (Whop supports custom questions — add these 5, all required):
  1. Business name?
  2. What do you do / sell? (2–3 sentences)
  3. Who are your customers?
  4. How should customers contact you? (phone / email / WhatsApp / booking link)
  5. Links to logo, photos, or anything you want included (optional)

- Set stock/quantity limit to **5** if the product supports it (real scarcity, resets weekly).

## 3. List on Whop Discover (~2 min)

Enable marketplace/Discover listing if offered — free organic traffic, and we're cold. Category: services / design.

## 4. Hand me the URL (~1 min)

Paste the checkout link (looks like `https://whop.com/overnightsite/...`) into this chat.
I'll set `WHOP_URL` in `public/index.html`, redeploy, and every CTA on the site goes live.

Until then, CTAs fall back to a pre-filled order email to jasonkimeu@gmail.com — so the site can take orders even before Whop is done.
