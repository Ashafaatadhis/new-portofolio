import { HeroSection } from "./_components/hero-section";
import { NavbarApp } from "./_components/navbar";
import { ProjectSection } from "./_components/project-section";
import { SkillsSection } from "./_components/skills-section";
import { ContactSection } from "./_components/contact-section";
import { Footer } from "./_components/footer";
import { CTASection } from "./_components/cta-section";
import { TimelineSection } from "./_components/timeline-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <NavbarApp />
      <HeroSection />
      <ProjectSection />
      <TimelineSection />
      <SkillsSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </main>
  );
}
