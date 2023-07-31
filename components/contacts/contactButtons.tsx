import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const contactButtons = [
  {
    button: <FaGithub />,
    className: "rounded-full grid md:grid-cols-2 gap-8",
    href: "https://github.com/itsjagdeep",
    label: "Github",
  },
  {
    button: <FaLinkedinIn />,
    className: "rounded-full grid md:grid-cols-2 gap-8",
    href: "https://www.linkedin.com/in/thisisjagdeep/",
    label: "LinkedinIn",
  },
  
] as const;
