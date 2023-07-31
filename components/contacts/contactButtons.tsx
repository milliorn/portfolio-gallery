import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const contactButtons = [
  {
    button: <FaGithub />,
    className: "rounded-full m-auto p-1 sm:text-8xl",
    href: "https://github.com/itsjagdeep",
    label: "Github",
  },
  {
    button: <FaLinkedinIn />,
    className: "rounded-full m-auto p-1 sm:text-8xl",
    href: "https://www.linkedin.com/in/thisisjagdeep/",
    label: "LinkedinIn",
  },
  
] as const;
