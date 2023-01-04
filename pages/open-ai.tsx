import Image from "next/image";

import openAiImg from "../public/assets/projects/open-ai-onrender.png";

import BackButton from "../components/BackButton";
import ProjectButtonCode from "../components/project/ProjectButtonCode";
import ProjectButtonDemo from "../components/project/ProjectButtonDemo";
import ProjectHeroOverlay from "../components/project/ProjectHeroOverlay";
import ProjectHeroText from "../components/project/ProjectHeroText";
import ProjectTextHeading from "../components/project/ProjectTextBody";
import TechStack from "../components/TechStack";

const techStack = ["ExpressJs", "Open AI", "SweetAlert2", "Render"];

// body of text found in project pages
function OpenAiTextBody(): JSX.Element {
  return (
    <div className="col-span-4">
      <ProjectTextHeading />
      <p>
        I been wanting to learn more about NodeJs, along with ExpressJs. I used
        them to create my first web service hosted on Render. This site will
        generate images from user input using OpenAi API. Backend was scaffold
        using ExpressJs.
      </p>

      <ProjectButtonCode url="https://github.com/milliorn/image-generator" />
      <ProjectButtonDemo url="https://image-generator-pbvf.onrender.com/" />
    </div>
  );
}

// open ai page
export default function OpenAi(): JSX.Element {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <ProjectHeroOverlay />
        <Image
          alt="/"
          className="absolute z-10 object-cover"
          fill
          src={openAiImg}
        />
        <ProjectHeroText
          h2="Open AI Image Generator"
          h3="OpenAI, NodeJS, ExpressJS, Render"
        />
      </div>

      <div className="max-w-7xl mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <OpenAiTextBody />
        <TechStack data={techStack} />
        <BackButton />
      </div>
    </div>
  );
}
