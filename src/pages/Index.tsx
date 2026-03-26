import { useEffect } from "react";
import Lenis from "lenis";
import { FloatingSidebar } from "@/components/FloatingSidebar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { SkillsSection } from "@/components/SkillsSection";
import { ResumeSection } from "@/components/ResumeSection";
import { EducationWorkSection } from "@/components/EducationWorkSection";
import { RewardsSection } from "@/components/RewardsSection";
import { ContactFooter } from "@/components/ContactFooter";

const Index = () => {
  useEffect(() => {
    // Lenis Smooth Scrolling setup
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative bg-background min-h-screen selection:bg-primary/20 selection:text-primary">
      {/* Sidebar fixed rahega */}
      <FloatingSidebar />
      
      <main className="w-full">
        {/* Sections in correct sidebar order */}
        <section id="home"><Hero /></section>
        <section id="about"><AboutSection /></section>
        <section id="projects"><ProjectsGrid /></section>
        <section id="skills"><SkillsSection /></section>
        <section id="resume"><ResumeSection /></section>
        <section id="experience"><EducationWorkSection /></section>
        <section id="milestones"><RewardsSection /></section>
        <section id="contact"><ContactFooter /></section>
      </main>
    </div>
  );
};

export default Index;