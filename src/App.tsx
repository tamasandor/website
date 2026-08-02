import { Routes, Route } from "react-router-dom";
import { Nav } from "@/components/Nav";
import { Home } from "@/routes/Home";
import { Blog } from "@/routes/Blog";
import { BlogPost } from "@/routes/BlogPost";

export default function App() {
  return (
    <div style={{ background: "var(--page-bg)", minHeight: "100vh", overflowX: "clip" }}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </div>
  );
}
