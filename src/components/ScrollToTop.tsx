import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return; // let the hash-scroll behavior in Home.tsx handle this case
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);

  return null;
}