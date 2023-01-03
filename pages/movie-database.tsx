import Image from "next/image";
import Link from "next/link";

import movieDatabaseImg from "../public/assets/projects/movie-database.png";

import TechStack from "../components/TechStack";

const techStack = [
  "React",
  "Netlify",
  "TypeScript",
  "Prop Types",
  "Styled Components",
  "Router",
  "TMDB API",
] as const;

// movie database page
function MovieDatabase(): JSX.Element {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/80 z-20" />
        <Image
          alt="/"
          className="absolute z-10 object-cover"
          fill
          src={movieDatabaseImg}
        />
        <div className="absolute top-2/3 max-w-7xl w-full left-1/2 right-1/2 translate-x-[-50%] translate-y-[-50%] text-white z-20 p-2">
          <h2 className="py-2">Movie Database</h2>
          <h3>React, TypeScript, Netlify</h3>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="my-1">Project</p>
          <h2 className="mb-4">Overview</h2>
          <p>
            My first venture into TypeScript, React Router, Styled Components,
            and Prop Types. I learned numerous things on this project during a
            time when React was beginning to migrate away from FunctionComponent
            and Classes into Components and Props as seen{" "}
            <Link
              href="https://reactjs.org/docs/components-and-props.html"
              target="_blank"
              className="text-blue-500 cursor-pointer"
            >
              here.{" "}
            </Link>
            <span>
              Custom hooks are used here along with useEffect, including use of
              State. This site is made possible with{" "}
            </span>
            <Link
              href="https://www.themoviedb.org/"
              target="_blank"
              className="text-blue-500 cursor-pointer"
            >
              The Movie Database API.{" "}
            </Link>
          </p>
          <Link
            href="https://github.com/milliorn/Movie-Database"
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
            href="https://reactjs-movie-database.netlify.app/"
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

        <TechStack data={techStack} />

        <Link href="/#projects">
          <p className="underline cursor-pointer ml-4">Back</p>
        </Link>
      </div>
    </div>
  );
}

export default MovieDatabase;
