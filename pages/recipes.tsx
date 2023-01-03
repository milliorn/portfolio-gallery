import Image from "next/image";

import BackButton from "../components/BackButton";
import ProjectButtonCode from "../components/ProjectButtonCode";
import ProjectButtonDemo from "../components/ProjectButtonDemo";
import ProjectHeroOverlay from "../components/ProjectHeroOverlay";
import ProjectHeroText from "../components/ProjectHeroText";
import ProjectTextHeading from "../components/ProjectTextBody";
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
        <ProjectHeroOverlay />
        <Image
          alt="/"
          className="absolute z-10 object-cover"
          fill
          src={gatsbyRecipeImg}
        />
        <ProjectHeroText
          h2="Current Weather"
          h3="React, JavaScript, Tailwind CSS"
        />
      </div>

      <div className="max-w-7xl mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <ProjectTextHeading />
          <p>
            GatsbyJS was the first static site generator I used to build
            websites. This is my favorite since it contains cooking recipes I
            personally use. I like to cook and needed a way to keep up with
            recipes I enjoyed making. Pages are generated with the help of
            Contentful CMS and GraphQL.
          </p>

          <ProjectButtonCode url="https://github.com/milliorn/Recipe-Page" />
          <ProjectButtonDemo url="https://gatsbyrecipes.gatsbyjs.io/" />
        </div>

        <TechStack data={techStack} />

        <BackButton />
      </div>
    </div>
  );
}

export default Recipes;
