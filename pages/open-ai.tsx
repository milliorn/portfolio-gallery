import Image from "next/image";
import Link from "next/link";

import openAiImg from "../public/assets/projects/open-ai-onrender.png";

import { RiRadioButtonFill } from "react-icons/ri";

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
          <Link
            href="https://github.com/milliorn/image-generator"
            target="_blank"
          >
            <button type="button" className="px-8 py-2 mt-4 mr-8">
              Code
            </button>
          </Link>
          <Link
            href="https://image-generator-pbvf.onrender.com/"
            target="_blank"
          >
            <button type="button" className="px-8 py-2 mt-4">
              Demo
            </button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Tech Stacks</p>
            <div className="grid grid-cols-2 md:grid-cols-1 text-sm lg:text-base">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 mr-1" /> ExpressJs
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 mr-1" /> Open Ai
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 mr-1" /> SweetAlert2
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 mr-1" /> Render
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer ml-4">Back</p>
        </Link>
      </div>
    </div>
  );
}

export default OpenAi;
