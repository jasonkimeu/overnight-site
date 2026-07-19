import { motion } from "framer-motion";
import DemoShell from "../../components/DemoShell";
import { Reveal, Stagger, staggerItem } from "../../lib/anim";

const services = [
  { name: "Signature Fade", price: "$45", d: "Skin fade, scissor top, hot-towel finish. Our namesake cut." },
  { name: "Beard Sculpt", price: "$30", d: "Line-up, razor edges, oil treatment. Photographed-ready." },
  { name: "The Full District", price: "$70", d: "Cut + beard + black mask facial. One hour. Fully reset." },
  { name: "Kids' Cut", price: "$25", d: "Patience included. First-timers leave smiling." },
];

const hours: Array<[string, string]> = [
  ["Mon – Fri", "9:00 — 20:00"],
  ["Saturday", "8:00 — 21:00"],
  ["Sunday", "10:00 — 16:00"],
];

export default function Barber() {
  return (
    <DemoShell accent="linear-gradient(90deg,#b45309,#7c2d12)">
      <div className="bg-[#0d0a07] text-[#f5efe6]">
        {/* hero */}
        <header className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
          <div className="blob left-[15%] top-[10%] h-96 w-96 bg-amber-700/30" />
          <div className="blob right-[10%] bottom-[10%] h-80 w-80 bg-red-900/40 [animation-delay:-7s]" />
          {/* barber pole stripes */}
          <motion.div
            aria-hidden
            initial={{ backgroundPositionY: 0 }}
            animate={{ backgroundPositionY: 80 }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            className="absolute left-6 top-0 hidden h-full w-3 opacity-40 md:block"
            style={{ background: "repeating-linear-gradient(45deg,#b91c1c 0 12px,#f5efe6 12px 24px,#1d4ed8 24px 36px,#f5efe6 36px 48px)" }}
          />
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.6em" }}
            animate={{ opacity: 1, letterSpacing: "0.35em" }}
            transition={{ duration: 1.2 }}
            className="text-sm font-semibold uppercase text-amber-500"
          >
            Est. 2026 · Master barbers
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-serif text-6xl font-bold leading-none md:text-8xl"
          >
            FADE <em className="text-amber-500">DISTRICT</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-6 max-w-md text-lg text-[#c9bda9]"
          >
            Walk out sharper than you walked in. Precision cuts, hot-towel ritual, zero rush.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <motion.a
              href="#book"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="btn-shimmer rounded-full bg-amber-600 px-9 py-4 font-semibold text-black shadow-[0_10px_40px_rgba(217,119,6,0.4)]"
            >
              Book a chair →
            </motion.a>
            <a href="#services" className="rounded-full border border-white/20 px-9 py-4 font-semibold transition hover:border-amber-500 hover:text-amber-400">
              See services
            </a>
          </motion.div>
        </header>

        {/* services */}
        <section id="services" className="px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <h2 className="font-serif text-4xl font-bold md:text-5xl">
                The <em className="text-amber-500">menu.</em>
              </h2>
            </Reveal>
            <Stagger className="mt-12 grid gap-4 md:grid-cols-2">
              {services.map((s) => (
                <motion.div
                  key={s.name}
                  variants={staggerItem}
                  whileHover={{ y: -4 }}
                  className="rounded-xl border border-amber-900/40 bg-[#151009] p-7"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-serif text-2xl">{s.name}</h3>
                    <span className="font-serif text-2xl text-amber-500">{s.price}</span>
                  </div>
                  <p className="mt-2 text-sm text-[#c9bda9]">{s.d}</p>
                </motion.div>
              ))}
            </Stagger>
          </div>
        </section>

        {/* hours + booking */}
        <section id="book" className="px-6 pb-28">
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <Reveal>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-8">
                <h3 className="font-serif text-2xl">Hours</h3>
                <ul className="mt-5 space-y-3 text-[#c9bda9]">
                  {hours.map(([d, h]) => (
                    <li key={d} className="flex justify-between border-b border-white/5 pb-3">
                      <span>{d}</span><span className="text-[#f5efe6]">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex h-full flex-col justify-between rounded-xl bg-gradient-to-br from-amber-600 to-red-800 p-8 text-black">
                <div>
                  <h3 className="font-serif text-3xl font-bold text-white">Chairs fill fast.</h3>
                  <p className="mt-3 text-white/80">
                    Book online in 20 seconds — or walk in and take your chances.
                  </p>
                </div>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.03 }}
                  className="mt-8 block rounded-full bg-black px-8 py-4 text-center font-semibold text-white"
                >
                  Book now · (555) 010-3427
                </motion.a>
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </DemoShell>
  );
}
