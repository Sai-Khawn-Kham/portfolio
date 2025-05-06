import React from "react";
import Container from "./Container";
import { FaGithub, FaLinkedin, FaTelegram, FaViber } from "react-icons/fa"
import { HiMail } from "react-icons/hi";
import Link from "next/link";

const Contact = () => {
   return (
      <Container className="pb-25">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-orange-300">
            <div className="flex flex-col justify-center items-center gap-1 bg-gray-600 rounded-lg py-5">
               <HiMail className="size-7 text-gray-50" />
               <h3>Email</h3>
               <Link className="bg-orange-500 hover:bg-orange-600 text-gray-900 font-medium py-0.5 px-2 rounded" href={"mailto:khawnkham222@gmail.com"}>Send Email</Link>
            </div>
            <div className="flex flex-col justify-center items-center gap-1 bg-gray-600 rounded-lg py-5">
               <FaGithub className="size-7 text-gray-50" />
               <h3>GitHub</h3>
               <Link className="bg-orange-500 hover:bg-orange-600 text-gray-900 font-medium py-0.5 px-2 rounded" href={"https://github.com/Sai-Khawn-Kham"} target="_blank">Visit</Link>
            </div>
            <div className="flex flex-col justify-center items-center gap-1 bg-gray-600 rounded-lg py-5">
               <FaLinkedin className="size-7 text-blue-400" />
               <h3>LinkedIn</h3>
               <Link className="bg-orange-500 hover:bg-orange-600 text-gray-900 font-medium py-0.5 px-2 rounded" href={"https://www.linkedin.com/in/khawn-kham-67700b34a"} target="_blank">Send Message</Link>
            </div>
            <div className="flex flex-col justify-center items-center gap-1 bg-gray-600 rounded-lg py-5">
               <FaViber className="size-7 text-purple-500" />
               <h3>Viber</h3>
               <Link className="bg-orange-500 hover:bg-orange-600 text-gray-900 font-medium py-0.5 px-2 rounded" href={"viber://add?number=959677311211"} target="_blank">Send Message</Link>
            </div>
            <div className="flex flex-col justify-center items-center gap-1 bg-gray-600 rounded-lg py-5">
               <FaTelegram className="size-7 text-blue-400" />
               <h3>Telegram</h3>
               <Link className="bg-orange-500 hover:bg-orange-600 text-gray-900 font-medium py-0.5 px-2 rounded" href={"https://t.me/khawnkham"} target="_blank">Send Message</Link>
            </div>
         </div>
      </Container>
   );
};

export default Contact;
