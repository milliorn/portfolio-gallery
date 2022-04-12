import {
  SiBootstrap,
  SiCsharp,
  SiCss3,
  SiDocker,
  SiGatsby,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiPostcss,
  SiReact,
  SiRust,
  SiTailwindcss,
} from "react-icons/si";

export const navData = [
  {
    id: "homeNav",
    spanFirst: "h",
    spanLast: "ome"
  },
  {
    id: "aboutNav",
    spanFirst: "a",
    spanLast: "bout"
  },
  {
    id: "projectNav",
    spanFirst: "p",
    spanLast: "rojects"
  },
  {
    id: "skillsNav",
    spanFirst: "s",
    spanLast: "kills"
  },
  {
    id: "contactNav",
    spanFirst: "c",
    spanLast: "ontact"
  }
]

export const projectsData = [
  {
    h3: "Neverwinter Nights .NET",
    p: "Open source organization for Neverwinter Nights: Enhanced Edition. We developed an API called Anvil for the Neverwinter Nights Server. NWN.Masterlist is used to consume Master Server API. NWN.Core is used to interlop functions for NWNX .Net and wrap core functions. NWN.Native is a Low-level NWNXLib bindings for managed to native interop.",
    href: "https://github.com/nwn-dotnet",
    message: "learn more"
  },
  {
    h3: "Gatsby Recipe Page",
    p: "Recipe website done in GatsbyJS full stack frontend framework. It uses Contentful CMS, source controlled on Github, built and previewed in Gatsby Cloud, deployed onto Netlify Serverless Jamstack. It also acts as my personal site for cooking recipes.",
    href: "https://gatsby-recipe-page.netlify.app",
    message: "visit my site"
  },
  {
    h3: "Neverwinter Nights .NET",
    p: "Open source code for Everyday Iron Workout Warehouse Gym in Fresno, California. I develop there website, assist with other tech and internet duties and consult them on there social media sites. I also workout here and help assist coaches.",
    href: "https://milliorn.github.io/Everyday-Iron/",
    message: "see my work"
  }
]

export const skillsData = [
  {
    href: "https://github.com/milliorn?tab=repositories&q=&type=public&language=javascript&sort=",
    icon: <SiJavascript />,
    className: "p-4 text-black bg-amber-300 text-7xl"
  },
  {
    href: "https://github.com/milliorn?tab=repositories&q=&type=public&language=html&sort=",
    icon: <SiHtml5 />,
    className: "p-4 text-center text-white bg-orange-600 text-7xl"
  },
  {
    href: "https://github.com/milliorn?tab=repositories&q=css&type=public&language=&sort=",
    icon: <SiCss3 />,
    className: "p-4 text-center text-white bg-lightBlue-700 text-7xl"
  },
  {
    href: "https://github.com/milliorn?tab=repositories&q=react&type=public&language=&sort=",
    icon: <SiReact />,
    className: "p-4 text-center bg-white border-2 text-lightBlue-500 text-7xl"
  },
  {
    href: "https://github.com/milliorn?tab=repositories&q=&type=public&language=c%23&sort=",
    icon: <SiCsharp />,
    className: "p-4 text-center text-white bg-green-600 text-7xl"
  },
  {
    href: "https://github.com/milliorn?tab=repositories&q=tailwind&type=public&language=&sort=",
    icon: <SiTailwindcss />,
    className: "p-4 text-center bg-white border-2 text-lightBlue-500 text-7xl"
  },
  {
    href: "https://github.com/milliorn?tab=repositories&q=gatsby&type=public&language=&sort=",
    icon: <SiGatsby />,
    className: "p-4 text-center text-white bg-purple-700 text-7xl"
  },
  {
    href: "https://github.com/milliorn?tab=repositories&q=bootstrap&type=public&language=&sort=",
    icon: <SiBootstrap />,
    className: "p-4 text-center text-white bg-purple-800 text-7xl"
  },
  {
    href: "https://github.com/milliorn?tab=repositories&q=postcss&type=public&language=&sort=",
    icon: <SiPostcss />,
    className: "p-4 text-center text-white bg-orange-700 text-7xl"
  },
  {
    href: "https://github.com/milliorn?tab=repositories&q=&type=public&language=rust&sort=",
    icon: <SiRust />,
    className: "p-4 text-center text-black bg-white border-2 text-7xl"
  },
  {
    href: "https://github.com/milliorn?tab=repositories&q=docker&type=public&language=&sort=",
    icon: <SiDocker />,
    className: "p-4 text-center bg-white border-2 text-lightBlue-500 text-7xl"
  },
  {
    href: "https://github.com/milliorn",
    icon: <SiGit />,
    className: "p-4 text-center text-white bg-orange-600 text-7xl"
  }
]