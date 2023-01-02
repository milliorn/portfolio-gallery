import Link from "next/link";
import { DiLinux, DiWindows, DiCode, DiSass } from "react-icons/di";
import { FaStrava, FaNodeJs } from "react-icons/fa";
import {
  SiBootstrap,
  SiCss3,
  SiDocker,
  SiDotnet,
  SiElectron,
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
  SiBulma,
} from "react-icons/si";

import { TbBrandNextjs } from "react-icons/tb";

function Skills(): JSX.Element {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5] text-center xl:text-start pt-24 lg:pt-96 xl:pt-24">
          Skills
        </p>
        <h2 className="py-4 text-center xl:text-start">What Can I Do?</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <Link
              href="https://github.com/milliorn?tab=repositories&q=js&type=public&language=html&sort="
              target="_blank"
              className="grid grid-cols-2 gap-4 justify-center items-center"
              
            >
              <div className="m-auto p-1 text-white bg-orange-600 sm:text-5xl">
                <SiHtml5 />
              </div>
              <div className="flex flex-col items-center justify-center text-sm lg:text-lg">
                <h3>HTML</h3>
              </div>
            </Link>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <Link
              href="https://github.com/milliorn?tab=repositories&q=css&type=public&language=&sort="
              target="_blank"
              className="grid grid-cols-2 gap-4 justify-center items-center"
              
            >
              <div className="m-auto p-1 bg-blue-700 text-white sm:text-5xl">
                <SiCss3 />
              </div>
              <div className="flex flex-col items-center justify-center text-sm lg:text-lg">
                <h3>CSS</h3>
              </div>
            </Link>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <Link
              href="https://github.com/milliorn?tab=repositories&q=&type=public&language=javascript&sort="
              target="_blank"
              className="grid grid-cols-2 gap-4 justify-center items-center"
              
            >
              <div className="m-auto p-1 text-black bg-amber-300 sm:text-5xl">
                <SiJavascript />
              </div>
              <div className="flex flex-col items-center justify-center text-sm lg:text-lg">
                <h3>JavaScript</h3>
              </div>
            </Link>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <Link
              href="https://github.com/milliorn?tab=repositories&q=react&type=public&language=javascript&sort="
              target="_blank"
              className="grid grid-cols-2 gap-4 justify-center items-center"
              
            >
              <div className="m-auto p-1 text-blue-500 sm:text-5xl">
                <SiReact />
              </div>
              <div className="flex flex-col items-center justify-center text-sm lg:text-lg">
                <h3>React</h3>
              </div>
            </Link>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <Link
              href="https://github.com/milliorn?tab=repositories&q=tailwind&type=public&language=javascript&sort="
              target="_blank"
              className="grid grid-cols-2 gap-4 justify-center items-center"
              
            >
              <div className="m-auto p-1 text-blue-500 sm:text-5xl">
                <SiTailwindcss />
              </div>
              <div className="flex flex-col items-center justify-center text-sm lg:text-lg">
                <h3>Tailwind</h3>
              </div>
            </Link>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <Link
              href="https://github.com/milliorn?tab=repositories&q=firebase&type=public&language=javascript&sort="
              target="_blank"
              className="grid grid-cols-2 gap-4 justify-center items-center"
              
            >
              <div className="m-auto p-1 text-amber-400 sm:text-5xl">
                <SiFirebase />
              </div>
              <div className="flex flex-col items-center justify-center text-sm lg:text-lg">
                <h3>Firebase</h3>
              </div>
            </Link>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <Link
              href="https://github.com/milliorn?tab=repositories&q=nextjs&type=&language=&sort="
              target="_blank"
              className="grid grid-cols-2 gap-4 justify-center items-center"
              
            >
              <div className="m-auto p-1 sm:text-5xl">
                <TbBrandNextjs />
              </div>
              <div className="flex flex-col items-center justify-center text-sm lg:text-lg">
                <h3>NextJS</h3>
              </div>
            </Link>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <Link
              href="https://github.com/milliorn?tab=repositories&q=bootstrap&type=&language=&sort="
              target="_blank"
              className="grid grid-cols-2 gap-4 justify-center items-center"
              
            >
              <div className="m-auto p-1 text-white bg-purple-800 sm:text-5xl">
                <SiBootstrap />
              </div>
              <div className="flex flex-col items-center justify-center text-sm lg:text-lg">
                <h3>Bootstrap</h3>
              </div>
            </Link>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <Link
              href="https://github.com/milliorn?tab=repositories&q=&type=&language=c%23&sort="
              target="_blank"
              className="grid grid-cols-2 gap-4 justify-center items-center"
              
            >
              <div className="m-auto p-1 bg-indigo-700 text-white sm:text-5xl">
                <SiDotnet />
              </div>
              <div className="flex flex-col items-center justify-center text-sm lg:text-lg">
                <h3>.NET</h3>
              </div>
            </Link>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <Link
              href=""
              className="grid grid-cols-2 gap-4 justify-center items-center"
            >
              <div className="m-auto p-1 text-blue-500 sm:text-5xl">
                <SiDocker />
              </div>
              <div className="flex flex-col items-center justify-center text-sm lg:text-lg">
                <h3>Docker</h3>
              </div>
            </Link>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <Link
              href="https://github.com/milliorn?tab=repositories&q=gatsby&type=&language=&sort="
              target="_blank"
              className="grid grid-cols-2 gap-4 justify-center items-center"
              
            >
              <div className="m-auto p-1 text-purple-800 sm:text-5xl">
                <SiGatsby />
              </div>
              <div className="flex flex-col items-center justify-center text-sm lg:text-lg">
                <h3>GatsbyJS</h3>
              </div>
            </Link>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <Link
              href="https://github.com/milliorn"
              target="_blank"
              className="grid grid-cols-2 gap-4 justify-center items-center"
              
            >
              <div className="m-auto p-1 sm:text-5xl text-red-500">
                <SiGit />
              </div>
              <div className="flex flex-col items-center justify-center text-sm lg:text-lg">
                <h3>Git</h3>
              </div>
            </Link>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <Link
              href="https://github.com/milliorn?tab=repositories&q=postcss&type=&language=&sort="
              target="_blank"
              className="grid grid-cols-2 gap-4 justify-center items-center"
              
            >
              <div className="m-auto p-1 sm:text-5xl bg-orange-700 text-white">
                <SiPostcss />
              </div>
              <div className="flex flex-col items-center justify-center text-sm lg:text-lg">
                <h3>PostCSS</h3>
              </div>
            </Link>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <Link
              href="https://github.com/milliorn?tab=repositories&q=&type=&language=rust&sort="
              target="_blank"
              className="grid grid-cols-2 gap-4 justify-center items-center"
              
            >
              <div className="m-auto p-1 text-black sm:text-5xl">
                <SiRust />
              </div>
              <div className="flex flex-col items-center justify-center text-sm lg:text-lg">
                <h3>Rust</h3>
              </div>
            </Link>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <Link
              href="https://github.com/milliorn?tab=repositories&q=&type=&language=astro&sort="
              target="_blank"
              className="grid grid-cols-2 gap-4 justify-center items-center"
              
            >
              <div className="m-auto p-1 sm:text-5xl">
                <FaStrava />
              </div>
              <div className="flex flex-col items-center justify-center text-sm lg:text-lg">
                <h3>AstroJS</h3>
              </div>
            </Link>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <Link
              href="https://github.com/milliorn?tab=repositories&q=netlify&type=&language=&sort="
              target="_blank"
              className="grid grid-cols-2 gap-4 justify-center items-center"
              
            >
              <div className="m-auto p-1 sm:text-5xl text-teal-400">
                <SiNetlify />
              </div>
              <div className="flex flex-col items-center justify-center text-sm lg:text-lg">
                <h3>Netlify</h3>
              </div>
            </Link>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <Link
              href="https://github.com/milliorn?tab=repositories&q=vercel&type=&language=&sort="
              target="_blank"
              className="grid grid-cols-2 gap-4 justify-center items-center"
              
            >
              <div className="m-auto p-1 sm:text-5xl">
                <SiVercel />
              </div>
              <div className="flex flex-col items-center justify-center text-sm lg:text-lg">
                <h3>Vercel</h3>
              </div>
            </Link>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <Link
              href="https://github.com/milliorn?tab=repositories&q=nodejs&type=&language=&sort="
              target="_blank"
              className="grid grid-cols-2 gap-4 justify-center items-center"
              
            >
              <div className="m-auto p-1 sm:text-5xl text-green-500">
                <FaNodeJs />
              </div>
              <div className="flex flex-col items-center justify-center text-sm lg:text-lg">
                <h3>NodeJs</h3>
              </div>
            </Link>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <Link
              href="https://github.com/milliorn?tab=repositories"
              target="_blank"
              className="grid grid-cols-2 gap-4 justify-center items-center"
              
            >
              <div className="m-auto p-1 sm:text-5xl">
                <DiLinux />
              </div>
              <div className="flex flex-col items-center justify-center text-sm lg:text-lg">
                <h3>Linux</h3>
              </div>
            </Link>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <Link
              href="https://github.com/milliorn?tab=repositories"
              target="_blank"
              className="grid grid-cols-2 gap-4 justify-center items-center"
              
            >
              <div className="m-auto p-1 sm:text-5xl text-sky-500">
                <DiWindows />
              </div>
              <div className="flex flex-col items-center justify-center text-sm lg:text-lg">
                <h3>Windows</h3>
              </div>
            </Link>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <Link
              href="https://github.com/milliorn?tab=repositories&q=&type=&language=typescript&sort="
              target="_blank"
              className="grid grid-cols-2 gap-4 justify-center items-center"
              
            >
              <div className="m-auto p-1 sm:text-5xl text-blue-600">
                <SiTypescript />
              </div>
              <div className="flex flex-col items-center justify-center text-sm lg:text-lg">
                <h3>Typescript</h3>
              </div>
            </Link>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <Link
              href="https://github.com/milliorn?tab=repositories&q=&type=&language=nwscript&sort="
              target="_blank"
              className="grid grid-cols-2 gap-4 justify-center items-center"
              
            >
              <div className="m-auto p-1 sm:text-5xl">
                <DiCode />
              </div>
              <div className="flex flex-col items-center justify-center text-sm lg:text-lg">
                <h3>NwScript</h3>
              </div>
            </Link>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <Link
              href="https://github.com/milliorn?tab=repositories&q=material&type=&language=&sort="
              target="_blank"
              className="grid grid-cols-2 gap-4 justify-center items-center"
              
            >
              <div className="m-auto p-1 sm:text-5xl text-sky-500">
                <SiMaterialui />
              </div>
              <div className="flex flex-col items-center justify-center text-sm lg:text-lg">
                <h3>MaterialUI</h3>
              </div>
            </Link>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <Link
              href="https://github.com/milliorn?tab=repositories&q=sass&type=&language=&sort="
              target="_blank"
              className="grid grid-cols-2 gap-4 justify-center items-center"
              
            >
              <div className="m-auto p-1 sm:text-5xl text-pink-500">
                <DiSass />
              </div>
              <div className="flex flex-col items-center justify-center text-sm lg:text-lg">
                <h3>Sass</h3>
              </div>
            </Link>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <Link
              href="https://github.com/milliorn?tab=repositories&q=electron&type=&language=&sort="
              target="_blank"
              className="grid grid-cols-2 gap-4 justify-center items-center"
              
            >
              <div className="m-auto p-1 sm:text-5xl text-cyan-200 bg-slate-800">
                <SiElectron />
              </div>
              <div className="flex flex-col items-center justify-center text-sm lg:text-lg">
                <h3>Electron</h3>
              </div>
            </Link>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <Link
              href="https://github.com/milliorn?tab=repositories&q=bulma&type=&language=&sort="
              target="_blank"
              className="grid grid-cols-2 gap-4 justify-center items-center"
              
            >
              <div className="m-auto p-1 sm:text-5xl text-teal-500">
                <SiBulma />
              </div>
              <div className="flex flex-col items-center justify-center text-sm lg:text-lg">
                <h3>Bulma</h3>
              </div>
            </Link>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <Link
              href="https://github.com/milliorn?tab=repositories&q=express&type=&language=&sort="
              target="_blank"
              className="grid grid-cols-2 gap-4 justify-center items-center"
              
            >
              <div className="m-auto p-1 sm:text-5xl bg-black text-yellow-400">
                <SiJavascript />
              </div>
              <div className="flex flex-col items-center justify-center text-sm lg:text-lg">
                <h3>ExpressJs</h3>
              </div>
            </Link>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <Link
              href="https://github.com/milliorn?tab=repositories&q=preact&type=&language=&sort="
              target="_blank"
              className="grid grid-cols-2 gap-4 justify-center items-center"
              
            >
              <div className="m-auto p-1 sm:text-5xl text-white bg-violet-800">
                <SiReact />
              </div>
              <div className="flex flex-col items-center justify-center text-sm lg:text-lg">
                <h3>Preact</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
