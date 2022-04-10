import "./App.css";
import aboutImage from "./images/about.jpg";
import { DiReact, DiJavascript1, DiHtml5, DiCss3 } from "react-icons/di";
import {
  SiCsharp,
  SiTailwindcss,
  SiGatsby,
  SiBootstrap,
  SiPostcss,
  SiRust,
  SiDocker,
  SiGit,
} from "react-icons/si";

export default function App() {
  return (
    <div className="mx-auto text-white 2xl:container font-sans">
      <nav
        id="navbar"
        className="fixed z-10 table w-full px-0 py-2 mx-0 bg-black 2xl:container drop-shadow-2xl"
      >
        <div className="table-header-group">
          <div className="table-row text-lg capitalize divide-x">
            <a href="/" className="table-cell text-center">
              <span className="">h</span>
              <span className="text-sm">ome</span>
            </a>
            <a href="/" className="table-cell text-center">
              <span className="">a</span>
              <span className="text-sm">bout</span>
            </a>
            <a href="/" className="table-cell text-center">
              <span className="">s</span>
              <span className="text-xs">kills</span>
            </a>
            <a href="/" className="table-cell text-center">
              <span className="">p</span>
              <span className="text-xs">rojects</span>
            </a>
            <a href="/" className="table-cell text-center">
              <span className="">c</span>
              <span className="text-xs">ontact</span>
            </a>
          </div>
        </div>
      </nav>

      <header
        id="hero"
        className="h-screen w-screen bg-[url('./images/hero.jpg')] bg-cover bg-no-repeat 2xl:container"
      >
        <div className="grid content-center justify-center w-screen h-screen 2xl:container">
          <span className="text-4xl text-white capitalize ">
            React Developer
          </span>
        </div>
      </header>

      <section id="about" className="bg-neutral-900">
        <div className="items-center w-screen mx-auto my-4 2xl:container sm:flex sm:flex-row">
          {/*<!--Left Col-->*/}
          <div className="flex flex-col items-start justify-center w-full p-8 text-center text-white lg:w-1/2">
            <h1 className="mx-auto my-0 text-4xl font-semibold capitalize">
              <span className="">Scott Milliorn</span>
            </h1>
            <p className="mx-auto my-4 leading-normal">
              Passionate developer. Experienced game developer. Focused on
              mobile first web development using React and Tailwind. Want to
              know more? Download my resume by clicking on the button.
            </p>
            <button className="p-2 outline outline-offset-1 outline-white  mx-auto my-0  text-white capitalize bg-gray-500 border border-gray-900 rounded shadow hover:animate-pulse hover:bg-gray-400 hover:text-gray-50 hover:shadow-lg hover:border-transparent">
              resume
            </button>
          </div>
          {/*<!--Right Col-->*/}
          <div className="w-screen sm:w-full px-4 sm:px-0 sm:pr-4">
            <img src={aboutImage} alt="about" className="" />
          </div>
        </div>
      </section>

      <section className="sm:flex p-1">
        <div className="bg-neutral-900 flex-1 sm:order-2">
          <div className="p-4 mx-auto my-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center capitalize">
              what i enjoy doing
            </h2>
            <p className="text-center">Click an icon to see my work. </p>
          </div>
        </div>
        <div className="bg-neutral-900 flex-1	p-4">
          <div className="flex items-center justify-center w-full">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-4">
              <div className=" text-black bg-amber-300 text-7xl p-4">
                <a
                  href="https://github.com/milliorn?tab=repositories&q=&type=public&language=javascript&sort="
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <DiJavascript1 />
                </a>
              </div>
              <div className=" text-white bg-orange-600 text-7xl text-center p-4">
                <a
                  href="https://github.com/milliorn?tab=repositories&q=&type=public&language=html&sort="
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <DiHtml5 />
                </a>
              </div>
              <div className=" text-white bg-lightBlue-700 text-7xl text-center p-4">
                <a
                  href="https://github.com/milliorn?tab=repositories&q=css&type=public&language=&sort="
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <DiCss3 />
                </a>
              </div>
              <div className=" text-lightBlue-500 bg-white text-7xl text-center p-4 border-2">
                <a
                  href="https://github.com/milliorn?tab=repositories&q=react&type=public&language=&sort="
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <DiReact />
                </a>
              </div>
              <div className=" text-white bg-green-600 text-7xl text-center p-4">
                <a
                  href="https://github.com/milliorn?tab=repositories&q=&type=public&language=c%23&sort="
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <SiCsharp />
                </a>
              </div>
              <div className=" text-lightBlue-500 bg-white text-7xl text-center p-4 border-2">
                <a
                  href="https://github.com/milliorn?tab=repositories&q=tailwind&type=public&language=&sort="
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <SiTailwindcss />
                </a>
              </div>
              <div className=" text-white bg-purple-700 text-7xl text-center p-4">
                <a
                  href="https://github.com/milliorn?tab=repositories&q=gatsby&type=public&language=&sort="
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <SiGatsby />
                </a>
              </div>
              <div className=" text-white bg-purple-800 text-7xl text-center p-4">
                <a
                  href="https://github.com/milliorn?tab=repositories&q=bootstrap&type=public&language=&sort="
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <SiBootstrap />
                </a>
              </div>
              <div className=" text-white bg-orange-700 text-7xl text-center p-4">
                <a
                  href="https://github.com/milliorn?tab=repositories&q=postcss&type=public&language=&sort="
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <SiPostcss />
                </a>
              </div>
              <div className=" text-black bg-white text-7xl text-center p-4 border-2">
                <a
                  href="https://github.com/milliorn?tab=repositories&q=&type=public&language=rust&sort="
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <SiRust />
                </a>
              </div>
              <div className=" text-lightBlue-500 bg-white text-7xl text-center p-4 border-2">
                <a
                  href="https://github.com/milliorn?tab=repositories&q=docker&type=public&language=&sort="
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <SiDocker />
                </a>
              </div>
              <div className=" text-white bg-orange-600 text-7xl text-center p-4">
                <a
                  href="https://github.com/milliorn"
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <SiGit />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/*      <section id="skills" className="">
        <div className="p-4 mx-auto my-0 sm:order-2">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center capitalize">
            Click an icon to see my work
          </p>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 pb-4">
            <div className=" text-black bg-amber-300 text-7xl p-4">
              <a
                href="https://github.com/milliorn?tab=repositories&q=&type=public&language=javascript&sort="
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer"
              >
                <DiJavascript1 />
              </a>
            </div>
            <div className=" text-white bg-orange-600 text-7xl text-center p-4">
              <a
                href="https://github.com/milliorn?tab=repositories&q=&type=public&language=html&sort="
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer"
              >
                <DiHtml5 />
              </a>
            </div>
            <div className=" text-white bg-lightBlue-700 text-7xl text-center p-4">
              <a
                href="https://github.com/milliorn?tab=repositories&q=css&type=public&language=&sort="
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer"
              >
                <DiCss3 />
              </a>
            </div>
            <div className=" text-lightBlue-500 bg-white text-7xl text-center p-4 border-2">
              <a
                href="https://github.com/milliorn?tab=repositories&q=react&type=public&language=&sort="
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer"
              >
                <DiReact />
              </a>
            </div>
            <div className=" text-white bg-green-600 text-7xl text-center p-4">
              <a
                href="https://github.com/milliorn?tab=repositories&q=&type=public&language=c%23&sort="
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer"
              >
                <SiCsharp />
              </a>
            </div>
            <div className=" text-lightBlue-500 bg-white text-7xl text-center p-4 border-2">
              <a
                href="https://github.com/milliorn?tab=repositories&q=tailwind&type=public&language=&sort="
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer"
              >
                <SiTailwindcss />
              </a>
            </div>
            <div className=" text-white bg-purple-700 text-7xl text-center p-4">
              <a
                href="https://github.com/milliorn?tab=repositories&q=gatsby&type=public&language=&sort="
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer"
              >
                <SiGatsby />
              </a>
            </div>
            <div className=" text-white bg-purple-800 text-7xl text-center p-4">
              <a
                href="https://github.com/milliorn?tab=repositories&q=bootstrap&type=public&language=&sort="
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer"
              >
                <SiBootstrap />
              </a>
            </div>
            <div className=" text-white bg-orange-700 text-7xl text-center p-4">
              <a
                href="https://github.com/milliorn?tab=repositories&q=postcss&type=public&language=&sort="
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer"
              >
                <SiPostcss />
              </a>
            </div>
            <div className=" text-black bg-white text-7xl text-center p-4 border-2">
              <a
                href="https://github.com/milliorn?tab=repositories&q=&type=public&language=rust&sort="
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer"
              >
                <SiRust />
              </a>
            </div>
            <div className=" text-lightBlue-500 bg-white text-7xl text-center p-4 border-2">
              <a
                href="https://github.com/milliorn?tab=repositories&q=docker&type=public&language=&sort="
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer"
              >
                <SiDocker />
              </a>
            </div>
            <div className=" text-white bg-orange-600 text-7xl text-center p-4">
              <a
                href="https://github.com/milliorn"
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer"
              >
                <SiGit />
              </a>
            </div>
          </div>
        </div>
      </section>
      */
