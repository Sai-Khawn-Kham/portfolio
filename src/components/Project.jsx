"use client"
import React from 'react'
import ProjectCard from './ProjectCard';
import Container from './Container';
import useProjectsStore from '@/store/useProjectsStore';

const Project = () => {
   const { projects } = useProjectsStore();
   return (
      <Container>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
               <ProjectCard key={project.id} project={project} />
            ))}
         </div>
      </Container>
   )
}

export default Project