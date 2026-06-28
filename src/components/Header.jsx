"use client"
import Link from "next/link";
import React, { useState } from "react";
import Container from "./Container";
import useActiveSection from "@/hooks/useActiveSection";
import { HiMenu } from "react-icons/hi";
import { ThemeToggle } from "./theme-toggle";

const Header = () => {
   const sections = [ "home", "about", "skills", "projects", "contact" ];
   const activeSection = useActiveSection(sections);
   const [ openMenu, setOpenMenu ] = useState(false);

   const handleOpenMenu = () => {
      setOpenMenu(!openMenu);
   }
   return (
      <header className=" sticky top-0 z-1000 bg-gray-950">
         {/* Adding block to blur the Menu Dropdown */}
         <div onClick={handleOpenMenu} className={`${openMenu?"block":"hidden"} w-screen h-screen absolute z-10`}></div>
         <Container className="text-gray-50 flex justify-between items-center py-3">
            <Link href={"/"} className="text-orange-500 text-3xl font-bold cursor-pointer">Khawn</Link>
            <div className="hidden lg:flex gap-5 text-xl">
               {sections.map((section) => (
                  <Link key={section} href={`#${section}`} className={`${activeSection == section ? "underline text-orange-500" : "" } hover:text-orange-800 hover:underline`}>{section}</Link>
               ))}
            </div>
            {/* <div className="flex items-center">
               <ThemeToggle />
               <div className="relative z-50">
                  <HiMenu onClick={handleOpenMenu} className="size-7" />
                  <div className={`${openMenu?"block":"hidden"} w-40 absolute right-0 bg-gray-500 rounded flex flex-col gap-1 p-2`}>
                     {sections.map((section) => (
                        <Link key={section} onClick={handleOpenMenu} href={`#${section}`} className="bg-gray-600 text-orange-400 rounded py-0.5 px-2">{section}</Link>
                     ))}
                  </div>
               </div>
            </div> */}
         </Container>
      </header>
   );
};

export default Header;
