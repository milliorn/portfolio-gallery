import Image from "next/image";
import Link from "next/link";

import currentWeatherImg from "../public/assets/projects/current-weather.png";

import ProjectButtonCode from "../components/ProjectButtonCode";
import ProjectButtonDemo from "../components/ProjectButtonDemo";
import TechStack from "../components/TechStack";
import { BackButton } from "../components/BackButton";

const techStack = [
  "React",
  "JavaScript",
  "Accordion",
  "Paginate",
  "Tailwind CSS",
  "API",
] as const;

// weather page
function Weather(): JSX.Element {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/80 z-20" />
        <Image
          alt="/"
          className="absolute z-10 object-cover"
          fill
          src={currentWeatherImg}
        />
        <div className="absolute top-2/3 max-w-7xl w-full left-1/2 right-1/2 translate-x-[-50%] translate-y-[-50%] text-white z-20 p-2">
          <h2 className="py-2">Current Weather</h2>
          <h3>React, JavaScript, Tailwind CSS</h3>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="my-1">Project</p>
          <h2 className="mb-4">Overview</h2>
          <p>
            My favorite and personally most useful app, I created this app to
            address some features I find lacking in other apps. I can now check
            the weather reported from thousands of cities worldwide using{" "}
            <Link
              href="https://openweathermap.org/"
              target="_blank"
              className="text-blue-500 cursor-pointer"
            >
              OpenWeather API.{" "}
            </Link>
            <span>
              API is able to get precision results by using latitude/longitude
              in the request, which is provided by the{" "}
            </span>
            <Link
              href="https://rapidapi.com/wirefreethought/api/geodb-cities"
              target="_blank"
              className="text-blue-500 cursor-pointer"
            >
              GeoDB Cities API.{" "}
            </Link>
            <span>
              React Accordion and Pagination is used so you simply search for
              the city, select return results, and the response will create a
              weather forecast with collapse/expand elements for the daily
              forecast.
            </span>
          </p>
          <ProjectButtonCode url="https://github.com/milliorn/Current-Weather" />
          <ProjectButtonDemo url="https://milliorn.github.io/Current-Weather/" />
        </div>

        <TechStack data={techStack} />

        <BackButton />
      </div>
    </div>
  );
}

export default Weather;
