import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FadeIn } from "@/components/FadeIn";
import { parseFrontmatter, type PostMeta } from "@/lib/frontmatter";

type Post = PostMeta & { slug: string };

type DirEntry = { name: string; type: "file" | "directory" };

export function Blog() {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/content/blog/");
        if (!res.ok) throw new Error(`Directory listing failed: ${res.status}`);
        const entries: DirEntry[] = await res.json();
        const mdFiles = entries.filter((e) => e.type === "file" && e.name.endsWith(".md"));

        const loaded = await Promise.all(
          mdFiles.map(async (f) => {
            const raw = await fetch(`/content/blog/${f.name}`).then((r) => r.text());
            const { meta } = parseFrontmatter(raw);
            return { ...meta, slug: f.name.replace(/\.md$/, "") };
          }),
        );

        loaded.sort((a, b) => (a.date < b.date ? 1 : -1));
        if (!cancelled) setPosts(loaded);
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : "Failed to load posts");
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main className="mx-auto max-w-3xl px-4 py-24 sm:px-8">
      <FadeIn>
        <h1 className="hero-heading font-black uppercase tracking-tight" style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}>
          Blog
        </h1>
      </FadeIn>

      {error && (
        <p className="mt-8 text-sm opacity-60" style={{ color: "var(--page-fg)" }}>
          Couldn't load posts right now. Try refreshing.
        </p>
      )}

      {!error && posts === null && (
        <p className="mt-8 text-sm opacity-50" style={{ color: "var(--page-fg)" }}>
          Loading…
        </p>
      )}

      {posts?.length === 0 && (
        <p className="mt-8 text-sm opacity-50" style={{ color: "var(--page-fg)" }}>
          No posts yet.
        </p>
      )}

      <div className="mt-12 flex flex-col gap-8">
        {posts?.map((post, i) => (
          <FadeIn key={post.slug} delay={i * 0.05}>
            <Link to={`/blog/${post.slug}`} className="hairline-soft block border-b pb-8">
              <p className="text-sm opacity-50" style={{ color: "var(--page-fg)" }}>
                {post.date}
              </p>
              <h2 className="mt-1 text-2xl font-semibold" style={{ color: "var(--page-fg)" }}>
                {post.title}
              </h2>
              <p className="mt-2 opacity-60" style={{ color: "var(--page-fg)" }}>
                {post.excerpt}
              </p>
            </Link>
          </FadeIn>
        ))}
      </div>
    </main>
  );
}
