"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { HiMail } from "react-icons/hi"
import Container from "./Container";
import Typed from "typed.js";

const HeroSection = () => {
   const el = useRef(null);

   useEffect(() => {
      const typed = new Typed(el.current, {
         strings: ["Khawn", "a Frontend Developer", "a React Developer"],
         typeSpeed: 70,
         backSpeed: 70,
         loop: true
      })
      return () => {
         typed.destroy();
      }
   }, [])
   return (
      <Container id="home" className="grid md:grid-cols-3 gap-0 md:gap-5 text-gray-50 mt-25 scroll-mt-20">
         <div className="md:col-span-2 flex flex-col justify-center gap-3">
            <h1 className="text-xl md:text-5xl font-bold">
               Hello! I'm{" "}
               <span ref={el} className="text-orange-600" />
            </h1>
            <div className="flex items-center gap-3">
               <Link target="_blank" className="border border-orange-600 rounded-full hover:bg-orange-600 duration-700 p-3 group" href={"https://www.linkedin.com/in/khawn-kham-67700b34a"}><BsLinkedin className="text-orange-600 group-hover:text-gray-950 duration-300" /></Link>
               <Link target="_blank" className="border border-orange-600 rounded-full hover:bg-orange-600 duration-700 p-3 group" href={"https://github.com/Sai-Khawn-Kham"}><BsGithub className="text-orange-600 group-hover:text-gray-950 duration-300" /></Link>
               <Link target="_blank" className="border border-orange-600 rounded-full hover:bg-orange-600 duration-700 p-3 group" href={"mailto:khawnkham222@gmail.com"}><HiMail className="text-orange-600 group-hover:text-gray-950 duration-300" /></Link>
            </div>
            <div className="flex items-center">
               <Link href="/assets/resume/resume-khawn.pdf" download="resume-khawn.pdf" className="inline-block text-orange-600 text-xl font-semibold hover:bg-orange-600 hover:text-gray-950 duration-500 border border-orange-600 px-3 py-1 rounded">Download CV</Link>
            </div>
         </div>
         <div className="p-5">
            <img src={"assets/me.jpg"} width={1831} height={2448} alt="khawn kham" className="" />
         </div>
      </Container>
   );
};

export default HeroSection;
