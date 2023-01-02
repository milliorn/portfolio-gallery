import Image from "next/image";
import Link from "next/link";

import travelAgencyImg from "../public/assets/projects/travel-agency.png";

import { RiRadioButtonFill } from "react-icons/ri";

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
          <p className="my-1">Project</p>
          <h2 className="mb-4">Overview</h2>
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
          <Link
            href="https://github.com/milliorn?tab=repositories&q=landing&type=&language=&sort="
            target="_blank"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </Link>
          <Link
            href="https://milliorn.github.io/travel-agency/"
            target="_blank"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
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
                <RiRadioButtonFill className="pr-1 mr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 mr-1" /> TypeScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 mr-1" /> NextJs
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 mr-1" /> AstroJs
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

export default LandingPage;
