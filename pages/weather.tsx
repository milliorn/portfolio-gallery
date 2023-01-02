import Image from "next/image";
import currentWeatherImg from "../public/assets/projects/current-weather.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

function Weather(): JSX.Element {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1 object-cover"
          fill
          src={currentWeatherImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Current Weather</h2>
          <h3>React, JavaScript, Tailwind CSS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
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
          <Link
            href="https://github.com/milliorn/Current-Weather"
            target="_blank"
            
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </Link>
          <Link
            href="https://milliorn.github.io/Current-Weather/"
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
                <RiRadioButtonFill className="pr-1 mr-1" /> JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 mr-1" /> Accordion
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 mr-1" /> Paginate
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 mr-1" /> Tailwind CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 mr-1" /> API
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

export default Weather;
