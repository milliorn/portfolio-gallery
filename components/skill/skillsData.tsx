import { DiLinux, DiWindows, DiCode, DiSass } from "react-icons/di";
import { FaStrava, FaNodeJs } from "react-icons/fa";
import {
  SiBootstrap,
  SiCss3,
  SiDocker,
  SiDotnet,
  SiFirebase,
  SiGatsby,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMaterialui,
  SiNetlify,
  SiPostcss,
  SiReact,
  SiRust,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiAdobecreativecloud,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const skillsData = [
  {
    href: "https://github.com/milliorn?tab=repositories&q=&type=public&language=html&sort=",
    style: "m-auto p-1 text-white bg-orange-600 sm:text-5xl",
    icon: <SiAdobecreativecloud />,
    h3: "Adobe Photoshop",
  },
  {
    href: "https://github.com/milliorn?tab=repositories&q=css&type=public&language=&sort=",
    style: "m-auto p-1 bg-blue-700 text-white sm:text-5xl",
    icon: <SiCss3 />,
    h3: "CSS",
  },
  {
    href: "https://github.com/milliorn?tab=repositories&q=&type=public&language=javascript&sort=",
    style: "m-auto p-1 text-black bg-amber-300 sm:text-5xl",
    icon: <SiJavascript />,
    h3: "JavaScript",
  },
  {
    href: "https://github.com/milliorn?tab=repositories&q=react&type=public&language=javascript&sort=",
    style: "m-auto p-1 text-blue-500 sm:text-5xl",
    icon: <SiReact />,
    h3: "React",
  },
  {
    href: "https://github.com/milliorn?tab=repositories&q=tailwind&type=&language=&sort=",
    style: "m-auto p-1 text-blue-500 sm:text-5xl",
    icon: <SiTailwindcss />,
    h3: "Tailwind",
  },
  {
    href: "https://github.com/milliorn?tab=repositories&q=firebase&type=&language=&sort=",
    style: "m-auto p-1 text-amber-400 sm:text-5xl",
    icon: <SiFirebase />,
    h3: "Firebase",
  },
  {
    href: "https://github.com/milliorn?tab=repositories&q=nextjs&type=&language=&sort=",
    style: "m-auto p-1 sm:text-5xl",
    icon: <TbBrandNextjs />,
    h3: "NextJS",
  },
  {
    href: "https://github.com/milliorn?tab=repositories&q=Bootstrap&type=&language=&sort=",
    style: "m-auto p-1 text-white bg-purple-800 sm:text-5xl",
    icon: <SiBootstrap />,
    h3: "Bootstrap",
  },
  {
    href: "https://github.com/milliorn?tab=repositories&q=&type=public&language=c%23&sort=",
    style: "m-auto p-1 bg-indigo-700 text-white sm:text-5xl",
    icon: <SiDotnet />,
    h3: ".NET",
  },
  {
    href: "https://github.com/milliorn?tab=repositories&q=docker&type=&language=&sort=",
    style: "m-auto p-1 text-blue-500 sm:text-5xl",
    icon: <SiDocker />,
    h3: "Docker",
  },
  {
    href: "https://github.com/milliorn?tab=repositories&q=gatsby&type=&language=&sort=",
    style: "m-auto p-1 text-purple-800 sm:text-5xl",
    icon: <SiGatsby />,
    h3: "GatsbyJS",
  },
  {
    href: "https://github.com/milliorn",
    style: "m-auto p-1 sm:text-5xl text-red-500",
    icon: <SiGit />,
    h3: "Git",
  },
  {
    href: "https://github.com/milliorn?tab=repositories&q=postcss&type=&language=&sort=",
    style: "m-auto p-1 sm:text-5xl bg-orange-700 text-white",
    icon: <SiPostcss />,
    h3: "PostCSS",
  },
  {
    href: "https://github.com/milliorn?tab=repositories&q=&type=&language=rust&sort=",
    style: "m-auto p-1 text-black sm:text-5xl",
    icon: <SiRust />,
    h3: "Rust",
  },
  {
    href: "https://github.com/milliorn?tab=repositories&q=&type=&language=astro&sort=",
    style: "m-auto p-1 sm:text-5xl",
    icon: <FaStrava />,
    h3: "AstroJS",
  },
  {
    href: "https://github.com/milliorn?tab=repositories&q=netlify&type=&language=&sort=",
    style: "m-auto p-1 sm:text-5xl text-teal-400",
    icon: <SiNetlify />,
    h3: "Netlify",
  },
 
  
] as const;
