import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { HiMail } from "react-icons/hi"
import Container from "./Container";

const HeroSection = () => {
   return (
      <Container id="home" className="grid md:grid-cols-3 gap-0 md:gap-5 text-gray-50 pt-25">
         <div className="md:col-span-2 flex flex-col justify-center gap-2 md:gap-3">
            <h1 className="text-xl md:text-5xl text-center font-bold">Hello! I'm <span className="text-orange-600">Khawn</span></h1>
            <h2 className="text-lg md:text-3xl text-center font-bold">I'm a <span className="text-orange-600">Frontend Developer</span></h2>
            <p className="text-center">Aspiring Frontend Developer skilled in HTML, CSS, JavaScript, Tailwind CSS, React.js, Next.js and familiar with API integration for CRUD operations.</p>
            <div className="flex justify-center items-center gap-3">
               <Link target="_blank" className="border border-orange-600 rounded-full hover:bg-orange-600 duration-700 p-3 group" href={"https://www.linkedin.com/in/khawn-kham-67700b34a"}><BsLinkedin className="text-orange-600 group-hover:text-gray-950 duration-300" /></Link>
               <Link target="_blank" className="border border-orange-600 rounded-full hover:bg-orange-600 duration-700 p-3 group" href={"https://github.com/Sai-Khawn-Kham"}><BsGithub className="text-orange-600 group-hover:text-gray-950 duration-300" /></Link>
               <Link target="_blank" className="border border-orange-600 rounded-full hover:bg-orange-600 duration-700 p-3 group" href={"mailto:khawnkham222@gmail.com"}><HiMail className="text-orange-600 group-hover:text-gray-950 duration-300" /></Link>
            </div>
            <div className="flex items-center justify-center">
               <Link href="/assets/resume/resume.pdf" download="resume-khawn.pdf" className="inline-block text-orange-600 text-xl font-semibold hover:bg-orange-600 hover:text-gray-950 duration-500 border border-orange-600 px-3 py-1 rounded">Download CV</Link>
            </div>
         </div>
         <div className="p-5">
            <Image src={"/assets/me.jpg"} width={1831} height={2448} alt="khawn kham" className="" />
         </div>
      </Container>
   );
};

export default HeroSection;
