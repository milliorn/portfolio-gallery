import { useRef } from "react";

import "./styles/App.css";

import resumePDF from "./assets/psm-resume.pdf";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import aboutImage from "./assets/about.jpg";

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

      <Hero spanText="React Developer" />

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

      <br ref={contactRef} />

      <Footer
        h2="how to contact me?"
        p="Click a button to find me on the web."
      />
    </div>
  );
}
