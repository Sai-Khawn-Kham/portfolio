"use client";
import React from "react";
import Container from "@/components/Container";
import useSkillStore from "@/store/useSkillStore";

const SkillSection = () => {
  const { skills } = useSkillStore();
  return (
    <Container id="skills" className="my-25 scroll-mt-20">
      <h2 className="text-center text-3xl font-bold text-orange-600 mb-5">
        Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-10">
        {skills.map((skill) => (
          <div key={skill.id} className="flex justify-center items-center">
            <div className="size-32 flex flex-col items-center justify-center bg-gray-300 dark:bg-gray-600 border border-gray-400 dark:border-gray-800 hover:border-gray-600 dark:hover:border-gray-300 rounded-full">
              {skill.icon}
              <span className="text-lg font-sans">{skill.title}</span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default SkillSection;
