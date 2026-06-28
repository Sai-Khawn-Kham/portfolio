import Image from "next/image";
import React from "react";
import Container from "./Container";

const AboutSection = () => {
  return (
    <Container
      id="about"
      className="bg-gradient-to-r from-[#fbceb1] from-0% via-[#ff8c00] via-50% to-[#cc5500] to-100% grid grid-cols-1 md:grid-cols-3 items-center justify-center my-25 scroll-mt-20"
    >
      <div className="p-10 hidden md:block">
        <img
          src={"assets/about.jpeg"}
          width={771}
          height={1028}
          alt="about"
          className=""
        />
      </div>
      <div className="col-span-2 flex flex-col gap-2 py-10 px-5">
        <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
        {/* <h3 className="text-xl font-semibold text-gray-800">I'm Khawn Kham</h3> */}
        <p className="">
          Aspiring Frontend Developer skilled in React, Next.js. Built
          multiple projects using Next.js & tailwind CSS. Familiar with API
          integration. Passionate for building scalable applications and
          contribute to real world challenges.
        </p>
      </div>
    </Container>
  );
};

export default AboutSection;
