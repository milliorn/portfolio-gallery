import Image from "next/image";
import Link from "next/link";

import movieDatabaseImg from "../public/assets/projects/movie-database.png";

import BackButton from "../components/BackButton";
import ProjectButtonCode from "../components/project/ProjectButtonCode";
import ProjectButtonDemo from "../components/project/ProjectButtonDemo";
import ProjectHeroOverlay from "../components/project/ProjectHeroOverlay";
import ProjectHeroText from "../components/project/ProjectHeroText";
import ProjectTextHeading from "../components/project/ProjectTextBody";
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

// body of text found in project pages
function MovieDatabaseTextBody(): JSX.Element {
  return (
    <div className="col-span-4">
      <ProjectTextHeading />
      <p>
        My first venture into TypeScript, React Router, Styled Components, and
        Prop Types. I learned numerous things on this project during a time when
        React was beginning to migrate away from FunctionComponent and Classes
        into Components and Props as seen{" "}
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

      <ProjectButtonCode url="https://github.com/milliorn/Movie-Database" />
      <ProjectButtonDemo url="https://reactjs-movie-database.netlify.app/" />
    </div>
  );
}

// movie database page
export default function MovieDatabase(): JSX.Element {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <ProjectHeroOverlay />
        <Image
          alt="/"
          className="absolute z-10 object-cover"
          fill
          src={movieDatabaseImg}
        />
        <ProjectHeroText h2="Movie Database" h3="React, TypeScript, Netlify" />
      </div>

      <div className="max-w-7xl mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <MovieDatabaseTextBody />
        <TechStack data={techStack} />
        <BackButton />
      </div>
    </div>
  );
}
