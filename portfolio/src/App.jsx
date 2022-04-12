import { useRef } from "react";
import {
  SiBootstrap,
  SiCsharp,
  SiCss3,
  SiDocker,
  SiGatsby,
  SiGit,
  SiGithub,
  SiGmail,
  SiHtml5,
  SiJavascript,
  SiLeetcode,
  SiLinkedin,
  SiPostcss,
  SiReact,
  SiRust,
  SiTailwindcss,
  SiTwitter,
} from "react-icons/si";
import "./App.css";
import resumePDF from "./assets/psm-resume.pdf";
import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import aboutImage from "./images/about.jpg";
import Projects from "./components/Projects";

export default function App() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const projectRef = useRef();
  const skillsRef = useRef();
  const contactRef = useRef();

  function onClick(e) {
    switch (e.currentTarget.id) {
      case "aboutNav":
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "projectNav":
        projectRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "skillsNav":
        skillsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "contactNav":
        contactRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        homeRef.current.scrollIntoView({ behavior: "smooth" });
        break;
    }
  }

  return (
    <div className="container mx-auto font-sans text-white" ref={homeRef}>
      <NavBar
        className="table-cell text-center cursor-pointer"
        onClick={onClick}
        spanClassName="text-sm"
      />
      <Hero id="hero" spanText="React Developer" />

      <br />

      <div ref={aboutRef}>
        <About
          span="Scott Milliorn"
          paragraph="Passionate developer. Experienced game developer. Focused on mobile
            first web development using React and Tailwind. Want to know more?
            Download my resume by clicking on the button."
          download="PSM-Resume"
          href={resumePDF}
          target="_blank"
          rel="noreferrer"
          text="resume"
          img={aboutImage}
          alt="about"
        />
      </div>

      <div ref={projectRef}>
        <br />
      </div>

      <Projects h2="open source projects" />

      <div ref={skillsRef}>
        <br />
      </div>

      <section className="p-1 sm:flex" id="skills">
        <div className="flex-1 leading-loose bg-neutral-900 sm:order-2">
          <div className="p-4 mx-auto my-0">
            <h2 className="text-3xl leading-loose text-center capitalize">
              what i enjoy doing
            </h2>
            <h3 className="text-lg font-semibold leading-loose text-center">
              Click an icon to see my work.
            </h3>
          </div>
          <p className="hidden m-4 leading-loose sm:flex">
            My experience with Javascript is mostly with ReactJS. My CSS
            experience beyond vanilla is with Bootstrap and Tailwind. These days
            I prefer to use Tailwind, even with vanilla HTML sites. GatsbyJS
            sites I created are hosted on Netlify and Gatsby Cloud. I have video
            game experience with C#/.NET using Docker for continuous deployment
            along with NWScript. Open source contributor for a video game .NET
            API. Recently I have been learning Rust.
          </p>
        </div>
        <div className="flex-1 p-4 bg-neutral-900">
          <div className="flex items-center justify-center w-full">
            <div className="grid grid-cols-2 gap-4 pb-4 md:grid-cols-3 lg:grid-cols-4">
              <div className="p-4 text-black bg-amber-300 text-7xl">
                <a
                  href="https://github.com/milliorn?tab=repositories&q=&type=public&language=javascript&sort="
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <SiJavascript />
                </a>
              </div>
              <div className="p-4 text-center text-white bg-orange-600 text-7xl">
                <a
                  href="https://github.com/milliorn?tab=repositories&q=&type=public&language=html&sort="
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <SiHtml5 />
                </a>
              </div>
              <div className="p-4 text-center text-white bg-lightBlue-700 text-7xl">
                <a
                  href="https://github.com/milliorn?tab=repositories&q=css&type=public&language=&sort="
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <SiCss3 />
                </a>
              </div>
              <div className="p-4 text-center bg-white border-2 text-lightBlue-500 text-7xl">
                <a
                  href="https://github.com/milliorn?tab=repositories&q=react&type=public&language=&sort="
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <SiReact />
                </a>
              </div>
              <div className="p-4 text-center text-white bg-green-600 text-7xl">
                <a
                  href="https://github.com/milliorn?tab=repositories&q=&type=public&language=c%23&sort="
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <SiCsharp />
                </a>
              </div>
              <div className="p-4 text-center bg-white border-2 text-lightBlue-500 text-7xl">
                <a
                  href="https://github.com/milliorn?tab=repositories&q=tailwind&type=public&language=&sort="
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <SiTailwindcss />
                </a>
              </div>
              <div className="p-4 text-center text-white bg-purple-700 text-7xl">
                <a
                  href="https://github.com/milliorn?tab=repositories&q=gatsby&type=public&language=&sort="
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <SiGatsby />
                </a>
              </div>
              <div className="p-4 text-center text-white bg-purple-800 text-7xl">
                <a
                  href="https://github.com/milliorn?tab=repositories&q=bootstrap&type=public&language=&sort="
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <SiBootstrap />
                </a>
              </div>
              <div className="p-4 text-center text-white bg-orange-700 text-7xl">
                <a
                  href="https://github.com/milliorn?tab=repositories&q=postcss&type=public&language=&sort="
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <SiPostcss />
                </a>
              </div>
              <div className="p-4 text-center text-black bg-white border-2 text-7xl">
                <a
                  href="https://github.com/milliorn?tab=repositories&q=&type=public&language=rust&sort="
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <SiRust />
                </a>
              </div>
              <div className="p-4 text-center bg-white border-2 text-lightBlue-500 text-7xl">
                <a
                  href="https://github.com/milliorn?tab=repositories&q=docker&type=public&language=&sort="
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <SiDocker />
                </a>
              </div>
              <div className="p-4 text-center text-white bg-orange-600 text-7xl">
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

      <footer className="m-1 bg-neutral-900" id="contact" ref={contactRef}>
        <h2 className="m-4 text-2xl text-center capitalize">
          how to contact me?
        </h2>
        <p className="text-center capitalize">
          Click a button to find me on the web.
        </p>
        <div class="flex flex-row justify-center">
          <a
            href="mailto: scottmilliorn@gmail.com"
            className="mx-2 my-4 text-3xl text-red-600 sm:text-4xl"
          >
            <SiGmail />
          </a>
          <a
            href="https://www.linkedin.com/in/scott-milliorn/"
            target="_blank"
            rel="noreferrer"
            className="mx-2 my-4 text-3xl bg-white text-lightBlue-600 sm:text-4xl"
          >
            <SiLinkedin />
          </a>
          <a
            href="https://twitter.com/scottmilliorn"
            target="_blank"
            rel="noreferrer"
            className="mx-2 my-4 text-3xl rounded-full text-lightBlue-500 sm:text-4xl"
          >
            <SiTwitter />
          </a>
          <a
            href="https://github.com/milliorn"
            target="_blank"
            rel="noreferrer"
            className="mx-2 my-4 text-3xl text-black bg-white border-black sm:text-4xl"
          >
            <SiGithub />
          </a>
          <a
            href="https://leetcode.com/milliorn/"
            target="_blank"
            rel="noreferrer"
            className="mx-2 my-4 text-3xl text-yellow-600 sm:text-4xl"
          >
            <SiLeetcode />
          </a>
        </div>
      </footer>
    </div>
  );
}
