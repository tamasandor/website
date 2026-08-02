import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { FadeIn } from "@/components/FadeIn";
import { parseFrontmatter, type PostMeta } from "@/lib/frontmatter";

// Only allow a safe filename charset — the slug ends up in a fetch URL,
// so this blocks any path-traversal attempt (e.g. "../../something").
const SAFE_SLUG = /^[a-zA-Z0-9_-]+$/;

export function BlogPost() {
  const { slug = "" } = useParams();
  const [meta, setMeta] = useState<PostMeta | null>(null);
  const [body, setBody] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!SAFE_SLUG.test(slug)) {
      setError("Invalid post URL");
      return;
    }
    let cancelled = false;

    fetch(`/blog-content/${slug}.md`)
      .then((res) => {
        if (!res.ok) throw new Error("Post not found");
        return res.text();
      })
      .then((raw) => {
        if (cancelled) return;
        const parsed = parseFrontmatter(raw);
        setMeta(parsed.meta);
        setBody(parsed.body);
      })
      .catch((err) => !cancelled && setError(err.message));

    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (error) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-24 sm:px-8">
        <p style={{ color: "var(--page-fg)" }}>{error}.</p>
        <Link to="/blog" className="mt-4 inline-block underline opacity-60" style={{ color: "var(--page-fg)" }}>
          Back to blog
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-24 sm:px-8">
      <FadeIn>
        <Link to="/blog" className="text-sm opacity-50 hover:opacity-100" style={{ color: "var(--page-fg)" }}>
          ← Blog
        </Link>
        {meta && (
          <>
            <p className="mt-6 text-sm opacity-50" style={{ color: "var(--page-fg)" }}>
              {meta.date}
            </p>
            <h1 className="hero-heading mt-2 font-black uppercase tracking-tight" style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}>
              {meta.title}
            </h1>
          </>
        )}
      </FadeIn>

      <FadeIn delay={0.1}>
        <article
          className="prose prose-invert mt-10 max-w-none"
          style={{ color: "var(--page-fg)" }}
        >
          <ReactMarkdown>{body}</ReactMarkdown>
        </article>
      </FadeIn>
    </main>
  );
}
