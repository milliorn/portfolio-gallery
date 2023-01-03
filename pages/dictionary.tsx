import Image from "next/image";
import Link from "next/link";

import dictionaryImg from "../public/assets/projects/dictionary.png";

import BackButton from "../components/BackButton";
import ProjectButtonCode from "../components/Project/ProjectButtonCode";
import ProjectButtonDemo from "../components/Project/ProjectButtonDemo";
import ProjectHeroOverlay from "../components/Project/ProjectHeroOverlay";
import ProjectHeroText from "../components/Project/ProjectHeroText";
import ProjectTextHeading from "../components/Project/ProjectTextBody";
import TechStack from "../components/TechStack";

const techStack = [
  "React",
  "JavaScript",
  "React-Emotion",
  "React-Icons",
  "Material-UI",
  "Axios",
  "Netlify",
] as const;

// body of text found in project pages
function DictionaryTextBody(): JSX.Element {
  return (
    <div className="col-span-4">
      <ProjectTextHeading />
      <p>
        I experimented with a few frontend CSS frameworks. This is the result of
        one of those occasions using Material-UI. Using this framework I built
        my first project with a Light-Dark mode toggle.{" "}
        <Link
          href="https://dictionaryapi.dev/"
          target="_blank"
          className="text-blue-500 cursor-pointer"
        >
          Free Dictionary API{" "}
        </Link>
        <span>was used here to get results in 12 langauges.</span>
      </p>

      <ProjectButtonCode url="https://github.com/milliorn/UI-Dictionary" />
      <ProjectButtonDemo url="https://react-material-ui-dictionary.netlify.app/" />
    </div>
  );
}

// dictionary page
export default function Dictionary(): JSX.Element {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <ProjectHeroOverlay />
        <Image
          alt="/"
          className="absolute z-10 object-cover"
          fill
          src={dictionaryImg}
        />
        <ProjectHeroText h2="Dictionary" h3="React, JavaScript, Material-UI" />
      </div>

      <div className="max-w-7xl mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <DictionaryTextBody />
        <TechStack data={techStack} />
        <BackButton />
      </div>
    </div>
  );
}
