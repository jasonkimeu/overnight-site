import { motion } from "framer-motion";
import DemoShell from "../../components/DemoShell";
import { Reveal, Stagger, staggerItem } from "../../lib/anim";

const services = [
  { icon: "🏠", t: "Standard Clean", d: "Every room, top to bottom. Kitchens degreased, bathrooms sparkling.", price: "from $89" },
  { icon: "✨", t: "Deep Clean", d: "Baseboards, inside appliances, grout, vents — the works.", price: "from $179" },
  { icon: "📦", t: "Move In / Out", d: "Get the deposit back or start fresh. Landlord-inspection ready.", price: "from $219" },
  { icon: "🏢", t: "Office & Airbnb", d: "Scheduled turnovers with photo reports after every visit.", price: "custom" },
];

const steps = [
  { n: "1", t: "Book in 60 seconds", d: "Pick a day online. Instant quote, no site visit needed." },
  { n: "2", t: "We arrive on time", d: "Vetted, insured, background-checked pros. Same team every visit." },
  { n: "3", t: "Walk into fresh", d: "Photo report when done. Not happy? We re-clean free within 24h." },
];

export default function Cleaning() {
  return (
    <DemoShell accent="linear-gradient(90deg,#0369a1,#4338ca)">
      <div className="bg-[#f4f8fc] text-slate-800">
        {/* hero */}
        <header className="relative overflow-hidden bg-gradient-to-b from-white to-[#eaf2fa] px-6 pb-24 pt-24 text-center">
          <div className="blob left-[12%] top-[5%] h-80 w-80 bg-sky-300/50" />
          <div className="blob right-[8%] top-[30%] h-72 w-72 bg-indigo-300/40 [animation-delay:-6s]" />
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-full border border-sky-200 bg-white px-5 py-2 text-sm font-semibold text-sky-700 shadow-sm"
          >
            🫧 Insured · Background-checked · Satisfaction guaranteed
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto mt-8 max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-slate-900 md:text-7xl"
          >
            Come home to{" "}
            <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
              spotless.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mx-auto mt-6 max-w-lg text-lg text-slate-600"
          >
            Purely Home sends the same trusted, vetted team every time — so your place is cleaned
            the way you like it, without you lifting a finger.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="relative mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <motion.a
              href="#quote"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="btn-shimmer rounded-full bg-gradient-to-r from-sky-600 to-indigo-600 px-10 py-4 font-display text-lg font-bold text-white shadow-[0_12px_40px_rgba(2,132,199,0.35)]"
            >
              Get my instant quote →
            </motion.a>
            <span className="text-sm text-slate-500">Most homes: $89–$179</span>
          </motion.div>
        </header>

        {/* services */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <h2 className="text-center font-display text-4xl font-bold text-slate-900 md:text-5xl">
                One team. <span className="text-sky-600">Every mess.</span>
              </h2>
            </Reveal>
            <Stagger className="mt-12 grid gap-5 md:grid-cols-2">
              {services.map((s) => (
                <motion.div
                  key={s.t}
                  variants={staggerItem}
                  whileHover={{ y: -5, boxShadow: "0 20px 50px rgba(2,132,199,0.12)" }}
                  className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-4xl">{s.icon}</span>
                    <span className="rounded-full bg-sky-50 px-3 py-1 text-sm font-semibold text-sky-700">{s.price}</span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold text-slate-900">{s.t}</h3>
                  <p className="mt-2 text-slate-600">{s.d}</p>
                </motion.div>
              ))}
            </Stagger>
          </div>
        </section>

        {/* steps */}
        <section className="bg-white px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <h2 className="text-center font-display text-4xl font-bold text-slate-900">Effortless, start to finish.</h2>
            </Reveal>
            <Stagger className="mt-12 grid gap-8 md:grid-cols-3">
              {steps.map((s) => (
                <motion.div key={s.n} variants={staggerItem} className="text-center">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-600 to-indigo-600 font-display text-lg font-bold text-white">
                    {s.n}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-slate-900">{s.t}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.d}</p>
                </motion.div>
              ))}
            </Stagger>
          </div>
        </section>

        {/* quote CTA */}
        <section id="quote" className="px-6 py-24">
          <Reveal className="mx-auto max-w-3xl">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-600 to-indigo-700 p-10 text-center text-white md:p-14">
              <div className="spin-slow absolute -left-20 -top-20 h-64 w-64 rounded-full border-2 border-white/15" />
              <h2 className="relative font-display text-3xl font-bold md:text-4xl">
                Your weekend back, starting this week.
              </h2>
              <p className="relative mx-auto mt-4 max-w-md text-white/80">
                60-second booking. Flat, honest pricing. A re-clean free if anything's missed.
              </p>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="relative mt-8 inline-block rounded-full bg-white px-10 py-4 font-display text-lg font-bold text-sky-700"
              >
                Book my clean · (555) 010-8846
              </motion.a>
            </div>
          </Reveal>
        </section>
      </div>
    </DemoShell>
  );
}
