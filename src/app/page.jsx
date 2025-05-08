import AboutSection from "@/components/AboutSection";
import Contact from "@/components/Contact";
import Container from "@/components/Container";
import HeroSection from "@/components/HeroSection";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import React from "react";
import {  } from "react-icons/hi"

const HomePage = () => {
   return (
      <>
         <Container id="home" className="pt-25" />
         <HeroSection />
         <Container id='about' className='pt-25' />
         <AboutSection />
         <Container id='skills' className='pt-25'>
            <h2 className="text-center text-3xl font-bold text-orange-600 mb-5">Skills</h2>
         </Container>
         <Skills />
         <Container id='projects' className='pt-25'>
            <h2 className="text-center text-3xl font-bold text-orange-600 mb-5">Projects</h2>
         </Container>
         <Project />
         <Container id="contact" className="pt-25">
            <h2 className="text-center text-3xl font-bold text-orange-600 mb-5">Contact</h2>
         </Container>
         <Contact />
      </>
   );
};

export default HomePage;
