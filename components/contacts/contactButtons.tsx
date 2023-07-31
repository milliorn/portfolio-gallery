import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const contactButtons = [
  {
    button: <FaGithub />,
    className: "rounded-full m-w-xs p-1 sm:text-5xl",
    href: "https://github.com/itsjagdeep",
    label: "Github",
  },
  {
    button: <FaLinkedinIn />,
    className: "rounded-full m-w-xs p-1 sm:text-5xl",
    href: "https://www.linkedin.com/in/thisisjagdeep/",
    label: "LinkedinIn",
  },
  
] as const;
