import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export const contactButtons = [
  {
    button: <FaGithub />,
    className: "rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300",
    href: "https://github.com/itsjagdeep",
    label: "Github",
  },
  {
    button: <FaLinkedinIn />,
    className: "rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-sky-600",
    href: "https://www.linkedin.com/in/thisisjagdeep/",
    label: "LinkedinIn",
  },
  {
    button: <FaTwitter />,
    className: "rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-sky-500",
    href: "https://twitter.com",
    label: "Twitter",
  },
  {
    button: <BsFillPersonLinesFill />,
    className: "rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-pink-500",
    href: "https://github.com/itsjagdeep/BeMusic",
    label: "Resume",
  },
] as const;
