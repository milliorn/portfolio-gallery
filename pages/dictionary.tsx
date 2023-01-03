import Image from "next/image";
import Link from "next/link";

import dictionaryImg from "../public/assets/projects/dictionary.png";

import { RiRadioButtonFill } from "react-icons/ri";

// dictionary page
function Dictionary(): JSX.Element {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/80 z-20" />
        <Image
          alt="/"
          className="absolute z-10 object-cover"
          fill
          src={dictionaryImg}
        />
        <div className="absolute top-2/3 max-w-7xl w-full left-1/2 right-1/2 translate-x-[-50%] translate-y-[-50%] text-white z-20 p-2">
          <h2 className="py-2">Dictionary</h2>
          <h3>React, JavaScript, Material-UI</h3>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="my-1">Project</p>
          <h2 className="mb-4">Overview</h2>
          <p>
            I experimented with a few frontend CSS frameworks. This is the
            result of one of those occasions using Material-UI. Using this
            framework I built my first project with a Light-Dark mode toggle.{" "}
            <Link
              href="https://dictionaryapi.dev/"
              target="_blank"
              className="text-blue-500 cursor-pointer"
            >
              Free Dictionary API{" "}
            </Link>
            <span>was used here to get results in 12 langauges.</span>
          </p>
          <Link
            href="https://github.com/milliorn/UI-Dictionary"
            target="_blank"
          >
            <button
              type="button"
              className="px-8 py-2 mt-4 mr-8 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#4F46E5] to-[#60A5FA] text-white"
            >
              Code
            </button>
          </Link>
          <Link
            href="https://react-material-ui-dictionary.netlify.app/"
            target="_blank"
          >
            <button
              type="button"
              className="px-8 py-2 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#4F46E5] to-[#60A5FA] text-white"
            >
              Demo
            </button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Tech Stacks</p>
            <div className="grid grid-cols-2 md:grid-cols-1 text-sm lg:text-base">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 mr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 mr-1" /> JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 mr-1" /> React-Emotion
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 mr-1" /> React-Icon
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 mr-1" /> React-Icons
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 mr-1" /> Material-UI
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 mr-1" /> Axios
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 mr-1" /> Netlify
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

export default Dictionary;
