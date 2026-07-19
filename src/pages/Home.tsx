import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CHECKOUT_URL, ORDER_EMAIL } from "../config";
import { CountUp, Reveal, Stagger, staggerItem } from "../lib/anim";

const professions = [
  "Barbers", "Coaches", "Cleaners", "Contractors", "Cafés", "Trainers",
  "Consultants", "Photographers", "Salons", "Tutors", "Freelancers", "Events",
];

const stack = [
  { what: "Custom website, designed for you", sub: "Not a recycled template — built around your business", val: 800 },
  { what: "Conversion copywriting", sub: "Headlines and words that sell, written for you", val: 400 },
  { what: "Mobile-perfect + fast", sub: "Flawless on every phone, loads in under a second", val: 250 },
  { what: "Hosting setup — $0/month", sub: "Enterprise-grade Cloudflare network, we set it up free", val: 360 },
  { what: "SEO essentials", sub: "Titles, structure and speed so Google finds you", val: 200 },
  { what: "One full revision round", sub: "Tell us everything to change — fixed in one pass, free", val: 150 },
];

const faqs = [
  { q: "Why is it only $97? What's the catch?", a: "No catch. Our build process is powered by AI tooling with human review, so a page that takes an agency six weeks takes us one night. Low overhead, low price, high volume. The $97 launch price rises as slots fill." },
  { q: "What do you need from me?", a: "Five minutes: your business name, what you sell, who your customers are, and how you want them to contact you. Got a logo or photos? Great. Don't? We'll make it work beautifully without them." },
  { q: "Do I need to pay for hosting or a domain?", a: "Hosting is free — we deploy on Cloudflare's global network at $0/month. A custom domain (~$10/yr) is optional; we'll connect it free if you have one, or you launch on a free address today." },
  { q: "What if I don't like it?", a: "You get one full revision round included — tell us everything you want changed and we fix it in one pass. Still not in love? Full refund, and you keep the design files anyway. You cannot lose money on this." },
  { q: "Who actually builds it?", a: "An AI-powered studio workflow, with every site reviewed by a human before delivery. That's the honest answer — and exactly why we can deliver agency-grade work overnight for $97." },
  { q: "What kind of businesses is this for?", a: "Anyone who needs to look legit online tomorrow: barbers, coaches, trainers, cleaners, contractors, consultants, cafés, freelancers, side-hustles, events. If you can describe it in five minutes, we can build it in twenty-four hours." },
];

const demos = [
  { to: "/demo/barber", name: "FADE DISTRICT", niche: "Barbershop", grad: "from-amber-500/25 to-red-500/15", accent: "text-amber-400" },
  { to: "/demo/coach", name: "APEX PERFORMANCE", niche: "Fitness coach", grad: "from-emerald-500/25 to-cyan-500/15", accent: "text-emerald-400" },
  { to: "/demo/cleaning", name: "PURELY HOME", niche: "Cleaning service", grad: "from-sky-500/25 to-indigo-500/15", accent: "text-sky-400" },
];

function Cta({ children, sub }: { children: string; sub?: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <motion.a
        href={CHECKOUT_URL}
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="btn-shimmer cta-glow inline-block rounded-full bg-gradient-to-br from-[#ffd58a] via-gold to-gold-2 px-10 py-4 font-display text-lg font-bold text-[#1a1206]"
      >
        {children}
      </motion.a>
      {sub && <span className="text-sm text-mute">{sub}</span>}
    </div>
  );
}

export default function Home() {
  return (
    <div className="overflow-x-clip">
      {/* nav */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-night/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <span className="font-display text-lg font-bold">
            Overnight<span className="gold-text">Site</span> 🌙
          </span>
          <motion.a
            href={CHECKOUT_URL}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full bg-gradient-to-br from-gold to-gold-2 px-5 py-2 text-sm font-bold text-[#1a1206]"
          >
            Get my site — $97
          </motion.a>
        </div>
      </nav>

      {/* hero */}
      <header className="relative px-6 pb-24 pt-28 text-center">
        <div className="blob left-[10%] top-[-10%] h-96 w-96 bg-gold/40" />
        <div className="blob right-[5%] top-[20%] h-80 w-80 bg-gold-2/30 [animation-delay:-8s]" />
        <div className="blob left-[40%] top-[45%] h-72 w-72 bg-indigo-500/20 [animation-delay:-4s]" />

        <div className="relative mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass mx-auto mb-8 inline-block rounded-full px-5 py-2 text-sm text-mute"
          >
            ⚡ <b className="text-gold">5 build slots</b> per week — first come, first served
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl"
          >
            Your business, online by{" "}
            <span className="gold-text">tomorrow morning.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-mute"
          >
            A custom, professional website — designed, written, built and launched in{" "}
            <b className="text-white">24 hours</b> for <b className="text-white">$97 flat</b>.{" "}
            <span className="line-through opacity-60">$297</span> launch price. No subscriptions.
            No agencies. No six-week wait.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10"
          >
            <Cta sub="Love it in 24 hours or a full refund — you keep the design either way.">
              Claim a build slot →
            </Cta>
          </motion.div>
        </div>

        {/* marquee */}
        <div className="relative mx-auto mt-20 max-w-5xl overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
          <div className="marquee-track gap-10 py-2 text-sm font-medium uppercase tracking-[0.2em] text-mute/70">
            {[...professions, ...professions].map((p, i) => (
              <span key={i} className="flex items-center gap-10">
                {p} <span className="text-gold">✦</span>
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* compare */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
          <Reveal>
            <div className="glass h-full rounded-2xl p-8">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-mute">The usual way</h3>
              <ul className="space-y-3 text-[15px] text-mute">
                {["$1,500–$5,000 agency quotes", "4–8 weeks of back-and-forth", "“Content? That's on you”", "$30+/month hosting & builder fees"].map((t) => (
                  <li key={t} className="flex gap-3"><span className="text-red-400">✕</span>{t}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="h-full rounded-2xl border border-gold/40 bg-gradient-to-b from-gold/10 to-transparent p-8">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-gold">The OvernightSite way</h3>
              <ul className="space-y-3 text-[15px]">
                {["$97. Once. That's it", "Live in 24 hours, guaranteed", "Copywriting done for you", "$0/month hosting, forever"].map((t) => (
                  <li key={t} className="flex gap-3"><span className="text-emerald-400">✓</span>{t}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* demos */}
      <section className="px-6 py-24" id="work">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">See it to believe it</p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              Real demo sites. <span className="gold-text">Click them.</span>
            </h2>
            <p className="mt-4 max-w-xl text-mute">
              We built one for the exact kind of business we serve — overnight, the same process
              you'd get. Open them. This is the quality bar for <b className="text-white">your</b> $97.
            </p>
          </Reveal>

          <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
            {demos.map((d) => (
              <motion.div key={d.to} variants={staggerItem}>
                <Link to={d.to} className="group block">
                  <motion.div
                    whileHover={{ y: -8, rotateX: 2 }}
                    transition={{ type: "spring", stiffness: 250, damping: 20 }}
                    className={`glass relative overflow-hidden rounded-2xl bg-gradient-to-br p-1 ${d.grad}`}
                  >
                    <div className="rounded-xl bg-night-2/90 p-6">
                      <div className="mb-5 flex gap-1.5">
                        {[0, 1, 2].map((i) => (
                          <span key={i} className="h-2.5 w-2.5 rounded-full bg-white/15" />
                        ))}
                      </div>
                      <div className="flex h-36 flex-col items-center justify-center gap-2 rounded-lg border border-white/5 bg-white/[0.02]">
                        <span className={`font-display text-xl font-bold tracking-wide ${d.accent}`}>{d.name}</span>
                        <span className="text-xs uppercase tracking-[0.25em] text-mute">{d.niche}</span>
                      </div>
                      <div className="mt-5 flex items-center justify-between text-sm">
                        <span className="text-mute">Built overnight</span>
                        <span className="font-semibold text-white transition group-hover:translate-x-1 group-hover:text-gold">
                          View live →
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* value stack */}
      <section className="px-6 py-24" id="pricing">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">What you get</p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              Everything included. <span className="gold-text">Nothing metered.</span>
            </h2>
          </Reveal>

          <div className="mt-12 overflow-hidden rounded-2xl border border-line">
            {stack.map((row, i) => (
              <Reveal key={row.what} delay={i * 0.05}>
                <div className="flex items-center justify-between gap-6 border-b border-line bg-card/60 px-7 py-5 transition hover:bg-card">
                  <div>
                    <p className="font-semibold">{row.what}</p>
                    <p className="text-sm text-mute">{row.sub}</p>
                  </div>
                  <span className="whitespace-nowrap text-sm text-mute">
                    ${row.val.toLocaleString()}{row.what.includes("Hosting") ? "/yr" : ""} value
                  </span>
                </div>
              </Reveal>
            ))}
            <Reveal>
              <div className="flex items-center justify-between gap-6 bg-gold/10 px-7 py-6">
                <p className="font-display text-lg font-bold">
                  Total value: <CountUp to={2160} prefix="$" suffix="+" className="gold-text" />
                </p>
                <p className="font-display text-right">
                  <span className="mr-3 text-mute line-through">$297</span>
                  <span className="text-3xl font-bold text-gold">$97</span>
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-12 text-center">
            <Cta sub="One-time payment · Live in 24 hours · 5 slots per week">
              Get my website for $97 →
            </Cta>
          </Reveal>
        </div>
      </section>

      {/* guarantee */}
      <section className="px-6 py-16">
        <Reveal className="mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-3xl border border-dashed border-gold/50 bg-gold/5 p-10">
            <div className="spin-slow absolute -right-16 -top-16 h-48 w-48 rounded-full border border-gold/20" />
            <div className="flex flex-col gap-5 md:flex-row md:items-start">
              <span className="text-5xl">🛡️</span>
              <div>
                <h3 className="font-display text-2xl font-bold">The "Love It Or It's Free" Guarantee</h3>
                <p className="mt-3 text-mute">
                  If your site isn't live within 24 hours of your brief, or you just don't love it
                  after your revision round — say the word and you get{" "}
                  <b className="text-white">100% of your money back</b>. And you still keep the
                  design files. All the risk is on us, which is exactly how it should be.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* how it works */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">How it works</p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              Three steps. <span className="gold-text">One day.</span> Done.
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { n: "01", t: "Claim your slot", d: "Check out ($97) and answer a 5-minute brief: what you do, who it's for, and how customers should reach you. That's all we need." },
              { n: "02", t: "We build overnight", d: "Design, conversion copywriting, mobile layout, speed and SEO — handled by our AI-powered studio and reviewed by a human before you ever see it." },
              { n: "03", t: "Wake up. You're live.", d: "Within 24 hours you get your live link on free hosting. One full revision round included. Then it's yours — files and all." },
            ].map((s) => (
              <motion.div key={s.n} variants={staggerItem} className="glass rounded-2xl p-8">
                <span className="font-display text-sm font-bold text-gold">{s.n}</span>
                <h3 className="mt-3 font-display text-xl font-bold">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{s.d}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* faq */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">Questions</p>
            <h2 className="mt-3 font-display text-4xl font-bold">Fair questions, straight answers.</h2>
          </Reveal>
          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.04}>
                <details className="group glass rounded-xl">
                  <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 font-semibold [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span className="text-xl text-gold transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="px-6 pb-5 text-mute">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* final cta */}
      <section className="relative px-6 py-28 text-center">
        <div className="blob bottom-[-20%] left-[30%] h-96 w-96 bg-gold/25" />
        <Reveal className="relative mx-auto max-w-2xl">
          <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">
            Every day without a website, you look like a <span className="gold-text">hobby.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-mute">
            Tomorrow morning you could look like the business people trust. $97, once. Live in 24
            hours. Zero risk.
          </p>
          <div className="mt-10">
            <Cta sub="Love it or it's free. You keep the design either way.">
              Claim one of this week's 5 slots →
            </Cta>
          </div>
          <p className="mt-6 text-sm text-mute">
            Prefer email?{" "}
            <a href={`mailto:${ORDER_EMAIL}`} className="text-gold underline-offset-4 hover:underline">
              {ORDER_EMAIL}
            </a>
          </p>
        </Reveal>
      </section>

      <footer className="border-t border-line px-6 py-10 text-center text-sm text-mute">
        OvernightSite · Custom websites, live in 24 hours ·{" "}
        <a href={`mailto:${ORDER_EMAIL}`} className="hover:text-white">{ORDER_EMAIL}</a>
      </footer>
    </div>
  );
}
