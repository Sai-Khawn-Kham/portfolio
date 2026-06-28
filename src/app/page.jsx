import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import SkillSection from "@/components/SkillSection";
import React from "react";

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
