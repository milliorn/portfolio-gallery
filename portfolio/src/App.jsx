import { useRef } from "react";
import {
  SiGithub,
  SiGmail,
  SiLeetcode,
  SiLinkedin,
  SiTwitter,
} from "react-icons/si";
import "./App.css";
import resumePDF from "./assets/psm-resume.pdf";
import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import aboutImage from "./images/about.jpg";

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

      <br ref={aboutRef} />

      <About
        span="Scott Milliorn"
        paragraph="Passionate developer. Experienced game developer. Focused on mobile
            first web development using React and Tailwind. Want to know more?
            Download my resume by clicking on the button."
        download="SM-Resume"
        href={resumePDF}
        target="_blank"
        rel="noreferrer"
        text="resume"
        img={aboutImage}
        alt="about"
      />

      <br ref={projectRef} />

      <Projects h2="open source projects" />

      <br ref={skillsRef} />

      <Skills
        h2="what i enjoy doing"
        h3="Click an icon to see my work."
        p="My experience with Javascript is mostly with ReactJS. My CSS experience beyond vanilla is with Bootstrap and Tailwind. These days I prefer to use Tailwind, even with vanilla HTML sites. GatsbyJS sites I
          created are hosted on Netlify and Gatsby Cloud. I have video game
          experience with C#/.NET using Docker for continuous deployment along
          with NWScript. Open source contributor for a video game .NET API.
          Recently I have been learning Rust."
      />

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
