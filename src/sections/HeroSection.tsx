import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] w-full flex-col items-center justify-center px-4 py-24 text-center sm:px-8">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 text-xs font-medium uppercase tracking-[0.3em]"
        style={{ color: "var(--page-fg)" }}
      >
        Software Engineer & System Administrator
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="hero-heading font-black uppercase leading-[0.95] tracking-tight"
        style={{ fontSize: "clamp(2.5rem, 9.5vw, 10rem)" }}
      >
        Building things
        <br />
        that work.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mx-auto mt-8 max-w-2xl text-base sm:text-lg md:text-xl"
        style={{ color: "var(--page-fg)" }}
      >
        I write scalable software, automate workflows, and manage the underlying infrastructure ensuring security, uptime, and high performance at every layer.
      </motion.p>

      <motion.a
        href="#projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-16 flex flex-col items-center gap-2 text-xs uppercase tracking-widest"
        style={{ color: "var(--page-fg)" }}
      >
        Scroll
        <ArrowDown size={16} />
      </motion.a>
    </section>
  );
}
