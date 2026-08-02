import { FadeIn } from "@/components/FadeIn";

const experience = [
  { role: "Senior Full Stack Developer", org: "Company Name", period: "2024 — Present" },
  { role: "Full Stack Developer", org: "Company Name", period: "2022 — 2024" },
  { role: "Frontend Developer", org: "Company Name", period: "2020 — 2022" },
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
