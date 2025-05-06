import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ project }) => {
   return (
      <div className="flex flex-col gap-2 bg-gray-700 border-2 border-gray-800 hover:border-gray-600 rounded-lg overflow-hidden">
         <img src={project.img} alt={project.name} />
         <h3 className="text-center text-orange-500">{project.name}</h3>
         <div className="flex justify-center">
            <Link target="_blank" href={project.path} className="bg-orange-400 hover:bg-orange-500 py-0.5 px-2 mb-2 rounded">Visit Site</Link>
         </div>
      </div>
   );
};

export default ProjectCard;
