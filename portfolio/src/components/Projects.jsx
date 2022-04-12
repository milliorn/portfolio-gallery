import React from "react";
import { projectsData } from "../assets/data";
import { randomElement } from "../assets/util";

const Projects = (props) => {
  const buildProjects = projectsData.map((e, i) => (
    <div className="m-4 sm:flex">
      <div className="relative border rounded-lg shadow-md max-w-fit bg-neutral-100 border-neutral-500">
        <div className="p-5">
          <h3 className="mb-2 text-lg font-bold text-center text-gray-900 capitalize">
            {e.h3}
          </h3>
          <p className="mb-3 text-sm text-center text-neutral-900">{e.p}</p>
          <br />
          <div className="absolute bottom-0 left-0 right-0 m-1 text-center">
            <a
              className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center capitalize rounded-lg text-neutral-50 bg-neutral-700 neutral:bg-neutral-900 focus:ring-4 neutral:ring-neutral-700"
              href={e.href}
              target="_blank"
              rel="noreferrer"
            >
              {e.message}
            </a>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="pt-4 m-4 sm:m-0 bg-neutral-900">
      <h2 className="text-2xl text-center capitalize ">{props.h2}</h2>
      {randomElement(buildProjects)}
    </section>
  );
};

export default Projects;
