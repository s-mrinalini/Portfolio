import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import StatsBar from "@/components/sections/StatsBar";
import MarqueeTicker from "@/components/sections/MarqueeTicker";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import WritingSection from "@/components/sections/WritingSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <StatsBar />
      <MarqueeTicker />
      <ExperienceSection />
      <EducationSection />
      <WritingSection />
      <ContactSection />
    </>
  );
}
