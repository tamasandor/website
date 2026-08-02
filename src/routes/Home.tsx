import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HeroSection } from "@/sections/HeroSection";
import { MarqueeSection } from "@/sections/MarqueeSection";
import { AboutSection } from "@/sections/AboutSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { ContactSection } from "@/sections/ContactSection";

export function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    el?.scrollIntoView({ behavior: "smooth" });
  }, [hash]);

  return (
    <main>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}