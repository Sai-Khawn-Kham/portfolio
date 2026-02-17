import Image from "next/image";
import React from "react";
import Container from "./Container";

const AboutSection = () => {
  const styles = {
    background: "#fbceb1",
    background: `linear-gradient(90deg, #fbceb1 0%, #ff8c00 50%, #cc5500 100%)`,
  };
  return (
    <Container
      styles={styles}
      className="grid grid-cols-1 md:grid-cols-3 items-center justify-center"
    >
      <div className="p-10 hidden md:block">
        <Image
          src={"/assets/about.jpeg"}
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
