const items = ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker", "Python", "Next.js"];

export function MarqueeSection() {
  const row = [...items, ...items];
  return (
    <section className="hairline overflow-hidden border-y py-6">
      <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-12">
        {[...row, ...row].map((item, i) => (
          <span
            key={i}
            className="text-2xl font-semibold uppercase tracking-tight opacity-40 sm:text-4xl"
            style={{ color: "var(--page-fg)" }}
          >
            {item}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
