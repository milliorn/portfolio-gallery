import Image from "next/image";
import Link from "next/link";

import openAiImg from "../public/assets/projects/open-ai-onrender.png";

import ProjectButtonCode from "../components/ProjectButtonCode";
import ProjectButtonDemo from "../components/ProjectButtonDemo";
import TechStack from "../components/TechStack";
import { BackButton } from "../components/BackButton";

const techStack = ["ExpressJs", "Open AI", "SweetAlert2", "Render"];

// open ai page
function OpenAi(): JSX.Element {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/80 z-20" />
        <Image
          alt="/"
          className="absolute z-10 object-cover"
          fill
          src={openAiImg}
        />
        <div className="absolute top-2/3 max-w-7xl w-full left-1/2 right-1/2 translate-x-[-50%] translate-y-[-50%] text-white z-20 p-2">
          <h2 className="py-2">Open AI Image Generator</h2>
          <h3>OpenAI, NodeJS, ExpressJS, Render</h3>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="my-1">Project</p>
          <h2 className="mb-4">Overview</h2>
          <p>
            I been wanting to learn more about NodeJs, along with ExpressJs. I
            used them to create my first web service hosted on Render. This site
            will generate images from user input using OpenAi API. Backend was
            scaffold using ExpressJs.
          </p>

          <ProjectButtonCode url="https://github.com/milliorn/image-generator" />
          <ProjectButtonDemo url="https://image-generator-pbvf.onrender.com/" />
        </div>

        <TechStack data={techStack} />

        <BackButton />
      </div>
    </div>
  );
}

export default OpenAi;
