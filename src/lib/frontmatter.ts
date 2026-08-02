export type PostMeta = {
  title: string;
  date: string;
  excerpt: string;
};

export function parseFrontmatter(raw: string): { meta: PostMeta; body: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) {
    return { meta: { title: "Untitled", date: "", excerpt: "" }, body: raw };
  }
  const meta: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    meta[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
  }
  return {
    meta: {
      title: meta.title ?? "Untitled",
      date: meta.date ?? "",
      excerpt: meta.excerpt ?? "",
    },
    body: match[2],
  };
}
