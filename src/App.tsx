import { Routes, Route } from "react-router-dom";
import { Nav } from "@/components/Nav";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Home } from "@/routes/Home";
import { Blog } from "@/routes/Blog";
import { BlogPost } from "@/routes/BlogPost";
import { ProjectDetail } from "@/routes/ProjectDetail";

export default function App() {
  return (
    <div style={{ background: "var(--page-bg)", minHeight: "100vh", overflowX: "clip" }}>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/:slug" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}
