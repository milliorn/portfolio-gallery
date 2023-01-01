import ProjectItem from "./ProjectItem";

// projects component
function Projects(): JSX.Element {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">Projects I Enjoyed Developing</h2>
        <div className="grid md:gird-col-2 gap-8">
          <ProjectItem
          
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
