import Link from "next/link";
import React from "react";

const ProjectCard = ({ project }) => {
   return (
      <div className="flex flex-col gap-2 bg-gray-300 dark:bg-gray-600 border border-gray-300 dark:border-gray-700 hover:border-gray-600 dark:hover:border-gray-400 rounded-lg">
         <img src={project.img} alt={project.name} className="rounded-lg" />
         <div className="flex justify-center">
            <Link target="_blank" href={project.path} className="bg-orange-400 hover:text-white dark:hover:text-black py-0.5 px-1 mb-2 rounded">Visit Site</Link>
         </div>
      </div>
   );
};

export default ProjectCard;
