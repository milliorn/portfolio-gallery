import Link from "next/link";
import { skillsData } from "./skillsData";

// container to hold all elements in grid
export default function SkillsContainer(): JSX.Element {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {skillsData.map((skillData) => (
        <div
          key={skillData.h3}
          className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
        >
          <Link
            href={skillData.href}
            target="_blank"
            className="grid grid-cols-2 gap-4 justify-center items-center"
          >
            <div className={skillData.style}>{skillData.icon}</div>
            <div className="flex flex-col items-center justify-center text-sm lg:text-lg">
              <h3>{skillData.h3}</h3>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
