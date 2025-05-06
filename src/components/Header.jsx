"use client"
import Link from "next/link";
import React from "react";
import Container from "./Container";
import useActiveSection from "@/hooks/useActiveSection";

const Header = () => {
   const sections = [ "home", "about", "skills", "projects", "contact" ];
   const activeSection = useActiveSection(sections);
   return (
      <header className="fixed w-full bg-gray-950">
         <Container className="text-gray-50 flex justify-between items-center py-3">
            <Link href={"/"} className="text-orange-500 text-3xl font-bold cursor-pointer">Khawn</Link>
            <div className="flex gap-5 text-xl">
               {sections.map((section) => (
                  <Link key={section} href={`#${section}`} className={`${activeSection == section ? "underline text-orange-500" : "" } hover:text-orange-800 hover:underline`}>{section}</Link>
               ))}
            </div>
         </Container>
      </header>
   );
};

export default Header;
