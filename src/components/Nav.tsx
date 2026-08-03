import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Nav() {
  const location = useLocation();

  const handleHashClick = (hashId: string) => {
    // If we are already on the home page (or path matches)
    if (location.pathname === "/") {
      const element = document.getElementById(hashId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className="hairline sticky top-0 z-50 flex items-center justify-between border-b px-4 py-4 backdrop-blur sm:px-8"
      style={{ background: "color-mix(in oklab, var(--page-bg) 80%, transparent)" }}
    >
      <Link
        to="/"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="text-sm font-semibold uppercase tracking-widest"
        style={{ color: "var(--page-fg)" }}
      >
        Andor Tamás
      </Link>
      <nav className="flex items-center gap-6">
        <Link
          to="/#projects"
          onClick={() => handleHashClick("projects")}
          className="text-sm opacity-70 hover:opacity-100"
          style={{ color: "var(--page-fg)" }}
        >
          Projects
        </Link>
        <Link
          to="/blog"
          className="text-sm opacity-70 hover:opacity-100"
          style={{ color: "var(--page-fg)" }}
        >
          Blog
        </Link>
        <Link
          to="/#contact"
          onClick={() => handleHashClick("contact")}
          className="text-sm opacity-70 hover:opacity-100"
          style={{ color: "var(--page-fg)" }}
        >
          Contact
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}