"use client"
import React from 'react'
import ProjectCard from './ProjectCard';
import Container from './Container';
import useProjectsStore from '@/store/useProjectsStore';

const ProjectSection = () => {
   const { projects } = useProjectsStore();
   return (
      <Container id="projects" className="my-25 scroll-mt-20">
         <h2 className="text-center text-3xl font-bold text-orange-600 mb-5">Projects</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
               <ProjectCard key={project.id} project={project} />
            ))}
         </div>
      </Container>
   )
}

export default ProjectSection
