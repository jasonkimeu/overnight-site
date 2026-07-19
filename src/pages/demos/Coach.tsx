import { motion } from "framer-motion";
import DemoShell from "../../components/DemoShell";
import { CountUp, Reveal, Stagger, staggerItem } from "../../lib/anim";

const pillars = [
  { icon: "🏋️", t: "Train", d: "3 custom sessions a week, programmed around your schedule and your joints — not a template PDF." },
  { icon: "🥗", t: "Fuel", d: "A nutrition system you'll actually follow. No 1,200-calorie misery. Food you like, portioned right." },
  { icon: "📈", t: "Track", d: "Weekly check-ins, photos and metrics. What gets measured gets managed — and you will see it move." },
];

const plans = [
  { name: "Kickstart", price: 149, per: "/mo", items: ["Custom program", "App check-ins", "Form review videos"], featured: false },
  { name: "Total Transformation", price: 349, per: "/mo", items: ["Everything in Kickstart", "Weekly 1-on-1 calls", "Nutrition coaching", "24/7 WhatsApp access"], featured: true },
  { name: "Elite 1-on-1", price: 899, per: "/mo", items: ["In-person sessions", "Meal prep partner setup", "Recovery protocol", "Priority everything"], featured: false },
];

export default function Coach() {
  return (
    <DemoShell accent="linear-gradient(90deg,#047857,#0e7490)">
      <div className="bg-[#05100c] text-[#eafff5]">
        {/* hero */}
        <header className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
          <div className="blob left-[10%] top-[15%] h-96 w-96 bg-emerald-600/25" />
          <div className="blob right-[8%] bottom-[8%] h-80 w-80 bg-cyan-600/25 [animation-delay:-9s]" />
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-5 py-2 text-sm font-semibold text-emerald-400"
          >
            Now accepting 8 new clients
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl"
          >
            Strongest shape of your life.
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              12 weeks. For real this time.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-6 max-w-lg text-lg text-emerald-100/60"
          >
            APEX Performance builds training and nutrition around your life — then holds you to it.
            No guesswork, no gimmicks, no going it alone.
          </motion.p>
          <motion.a
            href="#plans"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="btn-shimmer mt-10 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-10 py-4 font-display text-lg font-bold text-black shadow-[0_10px_50px_rgba(16,185,129,0.35)]"
          >
            Start my transformation →
          </motion.a>

          {/* stats */}
          <div className="mt-16 grid grid-cols-3 gap-10 text-center">
            {[
              { to: 200, suffix: "+", label: "clients coached" },
              { to: 12, suffix: " yrs", label: "on the gym floor" },
              { to: 92, suffix: "%", label: "finish their program" },
            ].map((s) => (
              <div key={s.label}>
                <CountUp to={s.to} suffix={s.suffix} className="font-display text-3xl font-bold text-emerald-400 md:text-4xl" />
                <p className="mt-1 text-xs uppercase tracking-widest text-emerald-100/50">{s.label}</p>
              </div>
            ))}
          </div>
        </header>

        {/* pillars */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <h2 className="font-display text-4xl font-bold md:text-5xl">
                The system that <span className="text-emerald-400">actually sticks.</span>
              </h2>
            </Reveal>
            <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
              {pillars.map((p) => (
                <motion.div
                  key={p.t}
                  variants={staggerItem}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-emerald-900/50 bg-emerald-950/30 p-8"
                >
                  <span className="text-4xl">{p.icon}</span>
                  <h3 className="mt-4 font-display text-2xl font-bold">{p.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-emerald-100/60">{p.d}</p>
                </motion.div>
              ))}
            </Stagger>
          </div>
        </section>

        {/* plans */}
        <section id="plans" className="px-6 pb-28">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <h2 className="text-center font-display text-4xl font-bold md:text-5xl">Pick your pace.</h2>
            </Reveal>
            <Stagger className="mt-12 grid items-stretch gap-6 md:grid-cols-3">
              {plans.map((p) => (
                <motion.div
                  key={p.name}
                  variants={staggerItem}
                  whileHover={{ y: -6 }}
                  className={`flex flex-col rounded-2xl p-8 ${
                    p.featured
                      ? "border-2 border-emerald-400 bg-gradient-to-b from-emerald-500/15 to-transparent shadow-[0_0_60px_rgba(16,185,129,0.15)]"
                      : "border border-white/10 bg-white/[0.03]"
                  }`}
                >
                  {p.featured && (
                    <span className="mb-4 self-start rounded-full bg-emerald-400 px-3 py-1 text-xs font-bold text-black">
                      MOST POPULAR
                    </span>
                  )}
                  <h3 className="font-display text-xl font-bold">{p.name}</h3>
                  <p className="mt-3 font-display text-4xl font-bold">
                    ${p.price}
                    <span className="text-base font-medium text-emerald-100/50">{p.per}</span>
                  </p>
                  <ul className="mt-6 flex-1 space-y-3 text-sm text-emerald-100/70">
                    {p.items.map((i) => (
                      <li key={i} className="flex gap-2"><span className="text-emerald-400">✓</span>{i}</li>
                    ))}
                  </ul>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.03 }}
                    className={`mt-8 rounded-full py-3 text-center font-semibold ${
                      p.featured ? "bg-emerald-400 text-black" : "border border-white/20 hover:border-emerald-400"
                    }`}
                  >
                    Apply now
                  </motion.a>
                </motion.div>
              ))}
            </Stagger>
          </div>
        </section>
      </div>
    </DemoShell>
  );
}
