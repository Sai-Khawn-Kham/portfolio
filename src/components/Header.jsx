"use client"
import Link from "next/link";
import React, { useState } from "react";
import Container from "./Container";
import useActiveSection from "@/hooks/useActiveSection";
import { HiMenu } from "react-icons/hi";
import { ThemeToggle } from "./theme-toggle";

const SECTIONS = [ "home", "skills", "projects", "contact" ];

const Header = () => {
   const activeSection = useActiveSection(SECTIONS);
   const [ openMenu, setOpenMenu ] = useState(false);

   const handleOpenMenu = () => {
      setOpenMenu(!openMenu);
   }
   return (
      <header className="sticky top-0 z-1000 bg-white dark:bg-gray-950">
         {/* Adding block to blur the Menu Dropdown */}
         <div onClick={handleOpenMenu} className={`${openMenu?"block":"hidden"} w-screen h-screen absolute z-10`}></div>
         <div className="flex justify-between items-center py-3 px-3">
            <h1>
               <Link href={"/"} className="text-orange-500 text-3xl font-bold cursor-pointer">
                  Khawn
               </Link>
            </h1>
            <div className="hidden lg:flex gap-5 text-xl">
               {SECTIONS.map((section) => (
                  <Link key={section} href={`#${section}`} className={`${activeSection == section ? "underline text-orange-500" : "" } hover:text-orange-800 hover:underline`}>{section}</Link>
               ))}
            </div>
            <div className="flex items-center gap-2">
               <ThemeToggle />
               <button className="lg:hidden p-1 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors">
                  <div className="relative z-50">
                     <HiMenu onClick={handleOpenMenu} className="size-6" />
                     <div className={`${openMenu?"block":"hidden"} w-40 absolute -right-1 top-7 bg-gray-300 rounded flex flex-col gap-1 p-2`}>
                        {SECTIONS.map((section) => (
                           <Link key={section} onClick={handleOpenMenu} href={`#${section}`} className="bg-gray-600 text-orange-400 rounded py-0.5 px-2">{section}</Link>
                        ))}
                     </div>
                  </div>
               </button>
            </div>
         </div>
      </header>
   );
};

export default Header;
