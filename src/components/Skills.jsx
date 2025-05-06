import React from "react";
import Container from "./Container";
import { FaCss3, FaGitAlt, FaGithub, FaHtml5, FaJsSquare, FaReact } from "react-icons/fa"

const Skills = () => {
   return (
      <Container>
         {/* <h2 className="text-center text-3xl font-bold text-orange-600 mb-5">Skills</h2> */}
         <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10">
            <div className="flex justify-center items-center">
               <div className="size-32 flex flex-col items-center justify-center bg-gray-600 border border-gray-800 hover:border-gray-300 rounded-full">
                  <FaHtml5 className="size-8 text-orange-500" /><span className="text-2xl font-semibold">HTML</span>
               </div>
            </div>
            <div className="flex justify-center items-center">
               <div className="size-32 flex flex-col items-center justify-center bg-gray-600 border border-gray-800 hover:border-gray-300 rounded-full">
                  <FaCss3 className="size-8 text-blue-500" /><span className="text-2xl font-semibold">CSS</span>
               </div>
            </div>
            <div className="flex justify-center items-center">
               <div className="size-32 flex flex-col items-center justify-center bg-gray-600 border border-gray-800 hover:border-gray-300 rounded-full">
                  <FaJsSquare className="size-8 text-yellow-500" /><span className="text-2xl font-semibold">JS</span>
               </div>
            </div>
            <div className="flex justify-center items-center">
               <div className="size-32 flex flex-col items-center justify-center bg-gray-600 border border-gray-800 hover:border-gray-300 rounded-full">
                  <img src="/assets/tailwind.svg" className="size-8" /><span className="text-2xl font-semibold">Tailwind</span>
               </div>
            </div>
            <div className="flex justify-center items-center">
               <div className="size-32 flex flex-col items-center justify-center bg-gray-600 border border-gray-800 hover:border-gray-300 rounded-full">
                  <FaReact className="size-8 text-cyan-500" /><span className="text-2xl font-semibold">React</span>
               </div>
            </div>
            <div className="flex justify-center items-center">
               <div className="size-32 flex flex-col items-center justify-center bg-gray-600 border border-gray-800 hover:border-gray-300 rounded-full">
                  <img src="/assets/nextjs-icon.svg" className="size-8" /><span className="text-2xl font-semibold">Next</span>
               </div>
            </div>
            <div className="flex justify-center items-center">
               <div className="size-32 flex flex-col items-center justify-center bg-gray-600 border border-gray-800 hover:border-gray-300 rounded-full">
                  <FaGitAlt className="size-8 text-orange-500" /><span className="text-2xl font-semibold">Git</span>
               </div>
            </div>
            <div className="flex justify-center items-center">
               <div className="size-32 flex flex-col items-center justify-center bg-gray-600 border border-gray-800 hover:border-gray-300 rounded-full">
                  <FaGithub className="size-8 text-gray-50" /><span className="text-2xl font-semibold">GitHub</span>
               </div>
            </div>
         </div>
      </Container>
   );
};

export default Skills;
