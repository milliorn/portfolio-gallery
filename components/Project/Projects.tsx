import ProjectItem from "./ProjectItem";

import currentWeatherImg from "../public/assets/projects/current-weather.png";
import dictionaryImg from "../public/assets/projects/dictionary.png";
import gatsbyRecipeImg from "../public/assets/projects/gatsbyrecipes.png";
import movieDatabaseImg from "../public/assets/projects/movie-database.png";
import openAiImg from "../public/assets/projects/open-ai-onrender.png";
import travelAgencyImg from "../public/assets/projects/travel-agency.png";

// projects component
function Projects(): JSX.Element {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-7xl mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-indigo-600 text-center xl:text-start pt-12 lg:pt-64">
          Projects
        </p>
        <h2 className="py-4 text-center xl:text-start">
          Projects I Enjoyed Developing
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ProjectItem
            backgroundImg={travelAgencyImg}
            projectUrl="/landing-pages"
            tech="React, TypeScript, Tailwind CSS"
            title="Landing Pages"
          />

          <ProjectItem
            backgroundImg={movieDatabaseImg}
            projectUrl="/movie-database"
            tech="React, Typescript, Netlify"
            title="Movie Database"
          />

          <ProjectItem
            backgroundImg={currentWeatherImg}
            projectUrl="/weather"
            tech="React, Tailwind CSS"
            title="Current Weather"
          />

          <ProjectItem
            backgroundImg={dictionaryImg}
            projectUrl="/dictionary"
            tech="React, Material UI, Netlify"
            title="Dictionary"
          />

          <ProjectItem
            backgroundImg={gatsbyRecipeImg}
            projectUrl="/recipes"
            tech="Gatsby, Contentful CMS, GraphQL"
            title="Gatsby Recipes"
          />

          <ProjectItem
            backgroundImg={openAiImg}
            projectUrl="/open-ai"
            tech="OpenAI, NodeJS, ExpressJS, Render"
            title="Open AI Image Generator"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
