import { useParams, Link, Navigate } from "react-router-dom";
import { Github } from "lucide-react";
import { PROJECTS } from "@/lib/projects";
import { FadeIn } from "@/components/FadeIn";

export function ProjectDetail() {
  const { slug = "" } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/" replace />;

  return (
    <main className="mx-auto max-w-3xl px-4 py-24 sm:px-8">
      <FadeIn>
        <Link to="/#projects" className="text-sm opacity-50 hover:opacity-100" style={{ color: "var(--page-fg)" }}>
          ← Back to projects
        </Link>
        <h1
        className="hero-heading mt-8 font-black uppercase tracking-tight"
        style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}
        >
          {project.name}
        </h1>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mt-8 flex flex-wrap gap-2">
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

        <div className="mt-8 flex flex-col gap-8">
        {project.content.map((block, i) =>
            block.type === "text" ? (
            <p key={i} className="text-lg leading-relaxed opacity-80" style={{ color: "var(--page-fg)" }}>
                {block.text}
            </p>
            ) : (
            <img
                key={i}
                src={block.src}
                alt={block.alt ?? project.name}
                className="hairline w-full rounded-2xl border object-cover"
            />
            ),
        )}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          {project.githubUrl && (
              <a href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hairline inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium uppercase tracking-widest"
              style={{ color: "var(--page-fg)" }}
            >
              <Github size={16} /> Source
            </a>
          )}
        </div>
      </FadeIn>
    </main>
  );
}