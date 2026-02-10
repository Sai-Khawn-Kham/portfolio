import { FaCss3, FaGitAlt, FaGithub, FaHtml5, FaJsSquare, FaReact } from "react-icons/fa";
import { SiPhp, SiTypescript } from "react-icons/si";

const { create } = require("zustand");

const useSkillsStore = create((set) => ({
  skills: [
    {
      id: 1,
      icon: <FaHtml5 className="size-8 text-orange-500" />,
      title: "HTML",
    },
    {
      id: 2,
      icon: <FaCss3 className="size-8 text-blue-500" />,
      title: "CSS",
    },
    {
      id: 3,
      icon: <FaJsSquare className="size-8 text-yellow-500" />,
      title: "Javascript",
    },
    {
      id: 4,
      icon: <SiTypescript className="size-8 text-blue-500" />,
      title: "TypeScript",
    },
    {
      id: 5,
      icon: <img src="/assets/tailwind.svg" className="size-8" />,
      title: "Tailwind",
    },
    {
      id: 6,
      icon: <FaReact className="size-8 text-cyan-500" />,
      title: "React.js",
    },
    {
      id: 7,
      icon: <img src="/assets/nextjs-icon.svg" className="size-8" />,
      title: "Next.js",
    },
    {
      id: 8,
      icon: <FaGitAlt className="size-8 text-orange-500" />,
      title: "Git",
    },
    {
      id: 9,
      icon: <FaGithub className="size-8 text-gray-950" />,
      title: "GitHub",
    },
    {
      id: 10,
      icon: <SiPhp className="size-8 text-indigo-500" />,
      title: "PHP",
    },
  ],
}));

export default useSkillsStore;
