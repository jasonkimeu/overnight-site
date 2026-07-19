import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Wraps every concept demo with an honest "this is a demo" ribbon and a
 * conversion path back to the OvernightSite offer.
 */
export default function DemoShell({
  children,
  accent,
}: {
  children: ReactNode;
  accent: string;
}) {
  return (
    <div className="min-h-screen">
      <motion.div
        initial={{ y: -48 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="sticky top-0 z-50 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2.5 text-center text-xs font-medium text-white"
        style={{ background: accent }}
      >
        <span className="opacity-90">
          Concept demo by <b>OvernightSite</b> — a site like this, for your business, live in 24 hours.
        </span>
        <Link
          to="/"
          className="rounded-full bg-white/20 px-3 py-1 font-semibold backdrop-blur transition hover:bg-white/30"
        >
          Get yours — $97 →
        </Link>
      </motion.div>
      {children}
      <footer className="border-t border-white/10 bg-[#0b0e14] px-6 py-10 text-center text-sm text-white/70">
        <p>
          This is a fictional showcase business, designed and built overnight by{" "}
          <Link to="/" className="underline decoration-dotted underline-offset-4 hover:text-white">
            OvernightSite
          </Link>
          . Your industry could look this good tomorrow morning.
        </p>
      </footer>
    </div>
  );
}
