"use client"
import React from "react";
import Container from "./Container";
import { FaGithub, FaLinkedin, FaTelegram, FaViber } from "react-icons/fa"

import Link from "next/link";
import useContactStore from "@/store/useContactStore";

const ContactSection = () => {
   const { contacts } = useContactStore();
   return (
      <Container id="contact" className="my-25 scroll-mt-20">
         <h2 className="text-center text-3xl font-bold text-orange-600 mb-5">Contact</h2>
         <div className="md:w-1/3 mx-auto grid grid-cols-1 gap-10">
            {contacts.map(({id, icon, title, url, content}) => (
               <div key={id} className="flex flex-col justify-center items-center gap-1 bg-gray-300 dark:bg-gray-600 rounded-lg py-7">
                  {icon}
                  <h3>{title}</h3>
                  <Link className="bg-orange-500 hover:text-white dark:hover:text-black font-medium py-1 px-2 rounded" href={url} target="_blank">{content}</Link>
               </div>
            ))}
         </div>
      </Container>
   );
};

export default ContactSection;
