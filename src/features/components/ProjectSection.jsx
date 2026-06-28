"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import Container from "@/components/Container";
import useProjectStore from "@/store/useProjectStore";

const ProjectSection = () => {
  const { projects } = useProjectStore();
  return (
    <Container id="projects" className="my-25 scroll-mt-20">
      <h2 className="text-center text-3xl font-bold text-orange-600 mb-5">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Container>
  );
};

export default ProjectSection;
