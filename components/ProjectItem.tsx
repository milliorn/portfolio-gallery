import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// project item component
function ProjectItem(props: {
  backgroundImg: StaticImageData;
  projectUrl: string;
  tech: string;
  title: string;
}) {
  const { title, backgroundImg, projectUrl, tech } = props;
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-indigo-600 to-blue-400">
      <Image
        alt="/"
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
      />
      <div className="hidden group-hover:block absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{tech}</p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer">
            View
          </p>
        </Link>
      </div>
    </div>
  );
}

export default ProjectItem;
