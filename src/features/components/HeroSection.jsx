"use client";
import Container from "@/components/Container";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import Typed from "typed.js";

const HeroSection = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["a Frontend Developer", "a React Developer"],
      typeSpeed: 70,
      backSpeed: 70,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-[#cc5500] from-0% via-[#ff8c00] via-50% to-[#fbceb1] to-100% py-10 scroll-mt-20"
    >
      <Container className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="md:col-span-2 flex flex-col gap-2 justify-end text-white">
          <h2 className="text-base md:text-xl lg:text-2xl font-semibold">
            Hello! I'm Khawn Kham (Cyclops)
          </h2>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">
            I'm <span ref={el} />
          </h3>
          <div className="">
            <p>
              Aspiring Frontend Developer skilled in React, Next.js. Built multiple projects using Next.js & tailwind CSS. Familiar with API integration. Passionate for building scalable applications and contribute to real world challenges.
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Link
                target="_blank"
                className="border border-orange-300 rounded-full hover:bg-orange-600 duration-300 p-2 group"
                href={"https://www.linkedin.com/in/khawn-kham-67700b34a"}
              >
                <BsLinkedin className="group-hover:text-gray-950 duration-300" />
              </Link>
              <Link
                target="_blank"
                className="border border-orange-300 rounded-full hover:bg-orange-600 duration-300 p-2 group"
                href={"https://github.com/Sai-Khawn-Kham"}
              >
                <BsGithub className="group-hover:text-gray-950 duration-300" />
              </Link>
              <Link
                target="_blank"
                className="border border-orange-300 rounded-full hover:bg-orange-600 duration-300 p-2 group"
                href={"mailto:khawnkham222@gmail.com"}
              >
                <HiMail className="group-hover:text-gray-950 duration-300" />
              </Link>
            </div>
            <div className="">
              <Link
                href="/assets/resume/resume-khawn.pdf"
                download="resume-khawn.pdf"
                className="bg-orange-600 hover:text-gray-950 duration-300 border border-orange-400 hover:border-orange-600 px-3 py-1.5 rounded"
              >
                Download CV
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={"assets/me.jpg"}
            alt="khawn kham"
            className="w-80 clip-path-parallelogram"
          />
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
