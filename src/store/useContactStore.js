import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const { create } = require("zustand");

const useContactStore = create((set) => ({
  contacts: [
    {
      id: 1,
      icon: <HiMail className="size-7" />,
      title: "Email",
      url: "mailto:khawnkham222@gmail.com",
      content: "Send Email",
    },
    {
      id: 2,
      icon: <FaGithub className="size-7" />,
      title: "GitHub",
      url: "https://github.com/Sai-Khawn-Kham",
      content: "Visit",
    },
    {
      id: 3,
      icon: <FaLinkedin className="size-7 text-blue-400" />,
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/khawn-kham-67700b34a/",
      content: "View Profile",
    },
  ],
}));

export default useContactStore;
