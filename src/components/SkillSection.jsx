"use client"
import React from "react";
import Container from "./Container";
import useSkillsStore from "@/store/useSkillsStore";

const SkillSection = () => {
  const { skills } = useSkillsStore();
  return (
    <Container id="skills" className="mt-25 scroll-mt-20">
      <h2 className="text-center text-3xl font-bold text-orange-600 mb-5">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10">
        {skills.map((skill) => (
          <div key={skill.id} className="flex justify-center items-center">
            <div className="size-32 flex flex-col items-center justify-center bg-gray-600 border border-gray-800 hover:border-gray-300 rounded-full">
              {skill.icon}
              <span className="text-xl font-semibold">{skill.title}</span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default SkillSection;
