import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [isLight, setIsLight] = useState(
    () => typeof document !== "undefined" && document.documentElement.classList.contains("light"),
  );

  useEffect(() => {
    document.documentElement.classList.toggle("light", isLight);
    localStorage.setItem("theme", isLight ? "light" : "dark");
  }, [isLight]);

  return (
    <button
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      onClick={() => setIsLight((v) => !v)}
      className="hairline flex h-9 w-9 items-center justify-center rounded-full border transition-opacity hover:opacity-70"
    >
      {isLight ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}
