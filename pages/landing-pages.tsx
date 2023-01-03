import Image from "next/image";
import Link from "next/link";

import travelAgencyImg from "../public/assets/projects/travel-agency.png";

import BackButton from "../components/BackButton";
import ProjectButtonCode from "../components/ProjectButtonCode";
import ProjectButtonDemo from "../components/ProjectButtonDemo";
import ProjectTextHeading from "../components/ProjectTextBody";
import TechStack from "../components/TechStack";

const techStack = [
  "React",
  "Tailwind",
  "TypeScript",
  "NextJs",
  "AstroJs",
] as const;

// projects landing page
function LandingPage(): JSX.Element {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/80 z-20" />
        <Image
          alt="/"
          className="absolute z-10 object-cover"
          fill
          src={travelAgencyImg}
        />
        <div className="absolute top-2/3 max-w-7xl w-full left-1/2 right-1/2 translate-x-[-50%] translate-y-[-50%] text-white z-20 p-2">
          <h2 className="py-2">Landing Pages</h2>
          <h3>React JS, Tailwind</h3>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <ProjectTextHeading />
          <p>
            I built many mock landing pages with various technologies. Objective
            was to learn front end technologies and frameworks. SpaceX landing
            page was made with{" "}
            <Link
              href="https://milliorn.github.io/SpaceX-Website/"
              target="_blank"
              className="text-blue-500 cursor-pointer"
            >
              AstroJs{" "}
            </Link>
            <span>
              Newest framework I have begun to use is NextJs which is what I
              used to build this{" "}
            </span>
            <Link
              href="https://github.com/milliorn/Portfolio"
              target="_blank"
              className="text-blue-500 cursor-pointer"
            >
              portfoilio.
            </Link>
          </p>

          <ProjectButtonCode url="https://github.com/milliorn?tab=repositories&q=landing&type=&language=&sort=" />
          <ProjectButtonDemo url="https://milliorn.github.io/travel-agency/" />
        </div>

        <TechStack data={techStack} />

        <BackButton />
      </div>
    </div>
  );
}

export default LandingPage;
