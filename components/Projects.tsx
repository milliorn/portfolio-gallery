import ProjectItem from "./ProjectItem";
import travelAgencyImg from "../public/assets/projects/travel-agency.png";
import movieDatabaseImg from "../public/assets/projects/movie-database.png";
import currentWeatherImg from "../public/assets/projects/current-weather.png";
import dictionaryImg from "../public/assets/projects/dictionary.png";
import gatsbyRecipeImg from "../public/assets/projects/gatsbyrecipes.png";
import openAiImg from "../public/assets/projects/open-ai-onrender.png";

// projects component
function Projects(): JSX.Element {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">Projects I Enjoyed Developing</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            backgroundImg={travelAgencyImg}
            projectUrl="/"
            tech="React, TypeScript, Tailwind CSS"
            title="Landing Pages"
          />

          <ProjectItem
            backgroundImg={movieDatabaseImg}
            projectUrl="/"
            tech="React, Typescript, Netlify"
            title="Movie Database"
          />

          <ProjectItem
            backgroundImg={currentWeatherImg}
            projectUrl="/"
            tech="React, Tailwind CSS"
            title="Current Weather"
          />

          <ProjectItem
            backgroundImg={dictionaryImg}
            projectUrl="/"
            tech="React, Material UI"
            title="Dictionary"
          />

          <ProjectItem
            backgroundImg={gatsbyRecipeImg}
            projectUrl="/"
            tech="Gatsby"
            title="Gatsby Recipes"
          />

          <ProjectItem
            backgroundImg={openAiImg}
            projectUrl="/"
            tech="OpenAI, NodeJS, ExpressJS, Render"
            title="Open AI Image Generator"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
