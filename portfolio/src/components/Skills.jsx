import React from "react";
import { skillsData } from "../assets/data";
import { randomElement } from "../assets/util";

const Skills = (props) => {
  const buildSkills = skillsData.map((e, i) => (
    <div className={e.className}>
      <a
        href={e.href}
        target="_blank"
        rel="noreferrer"
        className="cursor-pointer"
      >
        {e.icon}
      </a>
    </div>
  ));

  return (
    <section className="p-1 sm:flex">
      <div className="flex-1 leading-loose bg-neutral-900 sm:order-2">
        <div className="p-4 mx-auto my-0">
          <h2 className="text-3xl leading-loose text-center capitalize">
            {props.h2}
          </h2>
          <h3 className="text-lg font-semibold leading-loose text-center">
            {props.h3}
          </h3>
        </div>
        <p className="hidden m-4 leading-loose sm:flex">{props.p}</p>
      </div>
      <div className="flex-1 p-8 bg-neutral-900">
        <div className="flex items-center justify-center w-full">
          <div className="grid grid-cols-2 gap-4 pb-4 md:grid-cols-3 lg:grid-cols-4">
            {randomElement(buildSkills)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
