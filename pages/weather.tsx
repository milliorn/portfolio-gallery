import Image from "next/image";
import Link from "next/link";

import currentWeatherImg from "../public/assets/projects/current-weather.png";

import BackButton from "../components/BackButton";
import ProjectButtonCode from "../components/project/ProjectButtonCode";
import ProjectButtonDemo from "../components/project/ProjectButtonDemo";
import ProjectHeroOverlay from "../components/project/ProjectHeroOverlay";
import ProjectHeroText from "../components/project/ProjectHeroText";
import ProjectTextHeading from "../components/project/ProjectTextBody";
import TechStack from "../components/TechStack";

const techStack = [
  "React",
  "JavaScript",
  "Accordion",
  "Paginate",
  "Tailwind CSS",
  "API",
] as const;

// body of text found in project pages
function WeatherTextBody(): JSX.Element {
  return (
    <div className="col-span-4">
      <ProjectTextHeading />
      <p>
        My favorite and personally most useful app, I created this app to
        address some features I find lacking in other apps. I can now check the
        weather reported from thousands of cities worldwide using{" "}
        <Link
          href="https://openweathermap.org/"
          target="_blank"
          className="text-blue-500 cursor-pointer"
        >
          OpenWeather API.{" "}
        </Link>
        <span>
          API is able to get precision results by using latitude/longitude in
          the request, which is provided by the{" "}
        </span>
        <Link
          href="https://rapidapi.com/wirefreethought/api/geodb-cities"
          target="_blank"
          className="text-blue-500 cursor-pointer"
        >
          GeoDB Cities API.{" "}
        </Link>
        <span>
          React Accordion and Pagination is used so you simply search for the
          city, select return results, and the response will create a weather
          forecast with collapse/expand elements for the daily forecast.
        </span>
      </p>
      <ProjectButtonCode url="https://github.com/milliorn/Current-Weather" />
      <ProjectButtonDemo url="https://milliorn.github.io/Current-Weather/" />
    </div>
  );
}

// weather page
export default function Weather(): JSX.Element {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <ProjectHeroOverlay />
        <Image
          alt="/"
          className="absolute z-10 object-cover"
          fill
          src={currentWeatherImg}
        />
        <ProjectHeroText
          h2="Current Weather"
          h3="React, JavaScript, Tailwind CSS"
        />
      </div>

      <div className="max-w-7xl mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <WeatherTextBody />
        <TechStack data={techStack} />
        <BackButton />
      </div>
    </div>
  );
}
