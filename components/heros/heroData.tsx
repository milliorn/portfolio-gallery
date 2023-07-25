import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export const heroData = [
  {
    label: "github",
    href: "https://github.com/itsjagdeep",
    style:
      "rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300",
    icon: <FaGithub />,
  },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/thisisjagdeep/",
    style:
      "rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-sky-600",
    icon: <FaLinkedinIn />,
  },
  {
    label: "twitter",
    href: "https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Den",
    style:
      "rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-sky-500",
    icon: <FaTwitter />,
  },

  {
    label: "resume",
    href: "https://github.com/itsjagdeep/BeMusic",
    style:
      "rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-pink-500",
    icon: <BsFillPersonLinesFill />,
  },
] as const;
