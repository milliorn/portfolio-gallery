import "./App.css";
import aboutImage from "./images/about.jpg";
import { DiReact, DiJavascript1, DiHtml5, DiCss3 } from "react-icons/di";
import { SiCsharp, SiTailwindcss, SiGatsby, SiBootstrap } from "react-icons/si";

export default function App() {
  return (
    <div className="mx-auto text-white 2xl:container">
      <nav
        id="navbar"
        className="fixed z-10 table w-full p-1 mx-0 bg-black 2xl:container drop-shadow-2xl"
      >
        <div className="table-header-group">
          <div className="table-row text-2xl">
            <a href="/" className="table-cell text-center">
              <span className="">Home</span>
            </a>
            <a href="/" className="table-cell text-center">
              <span>About</span>
            </a>
            <a href="/" className="table-cell text-center">
              <span>Skills</span>
            </a>
            <a href="/" className="table-cell text-center">
              <span>Contact</span>
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

      <section id="about">
        <div className="items-center w-screen mx-auto mb-12 2xl:container sm:flex sm:flex-row sm:mb-24">
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
            <button className="p-2 mx-auto my-0 text-white capitalize bg-gray-500 border border-gray-900 rounded shadow hover:animate-pulse hover:bg-gray-400 hover:text-gray-50 hover:shadow-lg hover:border-transparent">
              resume
            </button>
          </div>
          {/*<!--Right Col-->*/}
          <div className="w-screen p-4 ">
            <img src={aboutImage} alt="about" className="" />
          </div>
        </div>
      </section>

      <section id="skills" className="bg-white">
        <div className="p-4 mx-auto my-0">
          <p className="text-4xl font-semibold text-center text-black capitalize">
            Click on the icons to see my work
          </p>
        </div>
        <div className="flex items-center justify-center w-full">
          <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 p-4">
            <div class=" text-cyan-300 text-7xl font-bold text-center p-4 border">
              <DiReact />
            </div>
            <div class=" text-black bg-amber-300 text-7xl font-bold text-center p-4">
              <DiJavascript1 />
            </div>
            <div class=" text-white bg-orange-600 text-7xl font-bold text-center p-4">
              <DiHtml5 />
            </div>
            <div class=" text-white bg-lightBlue-700 text-7xl font-bold text-center p-4">
              <DiCss3 />
            </div>
            <div class=" text-white bg-green-600 text-7xl font-bold text-center p-4">
              <SiCsharp />
            </div>
            <div class=" text-white bg-lightBlue-400 text-7xl font-bold text-center p-4">
              <SiTailwindcss />
            </div>
            <div class=" text-white bg-purple-800 text-7xl font-bold text-center p-4">
              <SiGatsby />
            </div>
                        <div class=" text-white bg-purple-700 text-7xl font-bold text-center p-4">
              <SiBootstrap />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
