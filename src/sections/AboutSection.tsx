import { FadeIn } from "@/components/FadeIn";

export function AboutSection() {
  return (
    <section id="about-me" className="w-full px-4 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] opacity-50" style={{ color: "var(--page-fg)" }}>
            About
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-2xl leading-relaxed sm:text-3xl md:text-4xl" style={{ color: "var(--page-fg)" }}>
            I'm a developer focused on shipping software that stays reliable long after
            launch — clear architecture, sane dependencies, and interfaces people
            actually enjoy using.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
