import Image from "next/image";
import Link from "next/link";

import travelAgencyImg from "../public/assets/projects/travel-agency.png";

import BackButton from "../components/BackButton";
import ProjectButtonCode from "../components/ProjectButtonCode";
import ProjectButtonDemo from "../components/ProjectButtonDemo";
import ProjectHeroOverlay from "../components/ProjectHeroOverlay";
import ProjectHeroText from "../components/ProjectHeroText";
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
        <ProjectHeroOverlay />
        <Image
          alt="/"
          className="absolute z-10 object-cover"
          fill
          src={travelAgencyImg}
        />
        <ProjectHeroText
          h2="Current Weather"
          h3="React, JavaScript, Tailwind CSS"
        />
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
