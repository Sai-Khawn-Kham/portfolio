import React from "react";
import HeroSection from "../components/HeroSection";
import SkillSection from "../components/SkillSection";
import ProjectSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
};

export default HomePage;
