"use client"
import React from "react";
import Container from "./Container";
import useSkillsStore from "@/store/useSkillsStore";

const Skills = () => {
  const { skills } = useSkillsStore();
  return (
    <Container>
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

export default Skills;
