import Image from "next/image";
import Link from "next/link";

import TechStack from "../components/TechStack";
import gatsbyRecipeImg from "../public/assets/projects/gatsbyrecipes.png";

const techStack = [
  "GatsbyJs",
  "GatsbyCloud",
  "GraphQL",
  "Contentful CMS",
  "React-Helmet",
  "Slugify",
] as const;

// recipes page
function Recipes(): JSX.Element {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/80 z-20" />
        <Image
          alt="/"
          className="absolute z-10 object-cover"
          fill
          src={gatsbyRecipeImg}
        />
        <div className="absolute top-2/3 max-w-7xl w-full left-1/2 right-1/2 translate-x-[-50%] translate-y-[-50%] text-white z-20 p-2">
          <h2 className="py-2">Gatsby Recipes</h2>
          <h3>GatsbyJs, Contentful CMS, GraphQL</h3>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="my-1">Project</p>
          <h2 className="mb-4">Overview</h2>
          <p>
            GatsbyJS was the first static site generator I used to build
            websites. This is my favorite since it contains cooking recipes I
            personally use. I like to cook and needed a way to keep up with
            recipes I enjoyed making. Pages are generated with the help of
            Contentful CMS and GraphQL.
          </p>
          <Link href="https://github.com/milliorn/Recipe-Page" target="_blank">
            <button
              type="button"
              className="px-8 py-2 mt-4 mr-8 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#4F46E5] to-[#60A5FA] text-white"
            >
              Code
            </button>
          </Link>
          <Link href="https://gatsbyrecipes.gatsbyjs.io/" target="_blank">
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

export default Recipes;
