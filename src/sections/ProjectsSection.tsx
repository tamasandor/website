import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    num: "01",
    name: "Project One",
    category: "Personal",
    desc: "A short description of what this project does and why it matters.",
    stack: ["React", "TypeScript", "PostgreSQL"],
    url: "#",
  },
  {
    num: "02",
    name: "Project Two",
    category: "Client",
    desc: "A short description of what this project does and why it matters.",
    stack: ["Next.js", "Tailwind CSS"],
    url: "#",
  },
  {
    num: "03",
    name: "Project Three",
    category: "Personal",
    desc: "A short description of what this project does and why it matters.",
    stack: ["Node.js", "Docker"],
    url: "#",
  },
];

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative z-10 px-4 pt-24 pb-20 sm:px-8 sm:pt-32"
      style={{ background: "var(--page-bg)" }}
    >
      <p className="mb-16 text-xs font-medium uppercase tracking-[0.3em] opacity-50" style={{ color: "var(--page-fg)" }}>
        Selected Work
      </p>

      <div>
        {PROJECTS.map((p, i) => {
          const targetScale = 1 - (PROJECTS.length - 1 - i) * 0.03;
          const range: [number, number] = [i / PROJECTS.length, 1];
          return (
            <ProjectCard
              key={p.num}
              project={p}
              index={i}
              progress={scrollYProgress}
              range={range}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  progress,
  range,
  targetScale,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}) {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky mb-[15vh] h-[70vh] md:h-[65vh]" style={{ top: 80 + index * 24 + "px" }}>
      <motion.a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        style={{ scale, background: "var(--page-bg)", borderColor: "var(--hairline)" }}
        className="hairline group flex h-full flex-col gap-6 rounded-[32px] border-2 p-6 transition-colors hover:bg-white/5 sm:rounded-[48px] sm:p-10"
      >
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4 sm:gap-6">
            <span
              className="font-black"
              style={{ color: "var(--page-fg)", fontSize: "clamp(2rem, 6vw, 5rem)", lineHeight: 0.85, opacity: 0.3 }}
            >
              {project.num}
            </span>
            <div className="flex flex-col gap-1 pt-1">
              <span className="text-xs uppercase tracking-widest opacity-50" style={{ color: "var(--page-fg)" }}>
                {project.category}
              </span>
              <h3 className="text-2xl font-semibold sm:text-4xl" style={{ color: "var(--page-fg)" }}>
                {project.name}
              </h3>
            </div>
          </div>
          <div
            className="hairline flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            style={{ color: "var(--page-fg)" }}
          >
            <ArrowUpRight size={18} />
          </div>
        </div>

        <p className="max-w-xl text-base opacity-70 sm:text-lg" style={{ color: "var(--page-fg)" }}>
          {project.desc}
        </p>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full px-3 py-1.5 text-xs font-medium tracking-wide"
              style={{
                color: "var(--page-fg)",
                background: "color-mix(in srgb, var(--page-fg) 6%, transparent)",
                border: "1px solid color-mix(in srgb, var(--page-fg) 12%, transparent)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.a>
    </div>
  );
}