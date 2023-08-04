import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export const contactButtons = [
  {
    button: <FaGithub />,
    className: "rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300",
    href: "https://github.com/milliorn",
    label: "Github",
  },
  {
    button: <FaLinkedinIn />,
    className: "rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-sky-600",
    href: "https://www.linkedin.com/in/scott-milliorn/",
    label: "LinkedinIn",
  },
  {
    button: <FaTwitter />,
    className: "rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-sky-500",
    href: "https://twitter.com/scottmilliorn",
    label: "Twitter",
  },
  {
    button: <BsFillPersonLinesFill />,
    className: "rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-pink-500",
    href: "https://milliorn.github.io/digital-resume/",
    label: "Resume",
  },
] as const;
