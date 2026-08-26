import { FadeIn } from "@/components/FadeIn";

const experience = [
  { role: "IT employee", org: "Bechtle", period: "2026"}
  { role: "BCX Hackathon (3rd Place)", org: "Bosch Connected Experience (BCX)", period: "2026" },
  { role: "BCX Hackathon (top 5)", org: "Bosch Connected Experience (BCX)", period: "2024"},
  { role: "Software Engineering Student", org: "42 Wolfsburg", period: "2023 — 2026" },
];

export function ExperienceSection() {
  return (
    <section id="experiencia" className="w-full px-4 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <p className="mb-12 text-xs font-medium uppercase tracking-[0.3em] opacity-50" style={{ color: "var(--page-fg)" }}>
            Experience
          </p>
        </FadeIn>
        <div className="hairline-soft divide-y border-t" style={{ borderColor: "var(--hairline-soft)" }}>
          {experience.map((item, i) => (
            <FadeIn key={item.role} delay={i * 0.1}>
              <div
                className="hairline-soft flex flex-col justify-between gap-1 border-b py-6 sm:flex-row sm:items-baseline"
                style={{ borderColor: "var(--hairline-soft)" }}
              >
                <div>
                  <p className="text-lg font-medium sm:text-xl" style={{ color: "var(--page-fg)" }}>
                    {item.role}
                  </p>
                  <p className="text-sm opacity-50" style={{ color: "var(--page-fg)" }}>
                    {item.org}
                  </p>
                </div>
                <p className="text-sm opacity-50" style={{ color: "var(--page-fg)" }}>
                  {item.period}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
