import Image from "next/image";
import travelAgencyImg from "../public/assets/projects/travel-agency.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

function LandingPage(): JSX.Element {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1 object-cover"
          fill
          src={travelAgencyImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Landing Pages</h2>
          <h3>React JS - Tailwind</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            I built many mock landing pages with various technologies.
            Objcective was to learn front end technologies and frameworks.
            SpaceX landing page was made with{" "}
            <a
              href="https://milliorn.github.io/SpaceX-Website/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500"
            >
              AstroJs{" "}
            </a>
            <span>
              Newest framework I have begun to use is NextJs which is what I
              used to build this{" "}
            </span>
            <a
              href="https://github.com/milliorn/Portfolio"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500"
            >
              portfoilio.
            </a>
          </p>
          <a
            href="https://github.com/milliorn?tab=repositories&q=landing&type=&language=&sort="
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://milliorn.github.io/travel-agency/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> TypeScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> NextJs
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> AstroJs
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
