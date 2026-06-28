import React from "react";
import Container from "./Container";
import { FaGithub, FaLinkedin, FaTelegram, FaViber } from "react-icons/fa"
import { HiMail } from "react-icons/hi";
import Link from "next/link";

const ContactSection = () => {
   return (
      <Container id="contact" className="my-25 scroll-mt-20">
         <h2 className="text-center text-3xl font-bold text-orange-600 mb-5">Contact</h2>
         <div className="md:w-1/3 mx-auto grid grid-cols-1 gap-10 text-orange-300">
            <div className="flex flex-col justify-center items-center gap-1 bg-gray-600 rounded-lg py-7">
               <HiMail className="size-7 text-gray-50" />
               <h3>Email</h3>
               <Link className="bg-orange-500 hover:bg-orange-600 text-gray-900 font-medium py-0.5 px-2 rounded" href={"mailto:khawnkham222@gmail.com"}>Send Email</Link>
            </div>
            <div className="flex flex-col justify-center items-center gap-1 bg-gray-600 rounded-lg py-7">
               <FaGithub className="size-7 text-gray-50" />
               <h3>GitHub</h3>
               <Link className="bg-orange-500 hover:bg-orange-600 text-gray-900 font-medium py-0.5 px-2 rounded" href={"https://github.com/Sai-Khawn-Kham"} target="_blank">Visit</Link>
            </div>
            <div className="flex flex-col justify-center items-center gap-1 bg-gray-600 rounded-lg py-7">
               <FaLinkedin className="size-7 text-blue-400" />
               <h3>LinkedIn</h3>
               <Link className="bg-orange-500 hover:bg-orange-600 text-gray-900 font-medium py-0.5 px-2 rounded" href={"https://www.linkedin.com/in/khawn-kham-67700b34a"} target="_blank">View Profile</Link>
            </div>
         </div>
      </Container>
   );
};

export default ContactSection;
