import Link from "next/link";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

// hero links component that creates buttons in hero
export default function HeroLinks(): JSX.Element {
  return (
    <div className="flex items-center justify-between max-w-sm m-auto py-4">
      <Link
        aria-label="github"
        href="https://github.com/milliorn"
        target="_blank"
      >
        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
          <FaGithub />
        </div>
      </Link>
      <Link
        aria-label="linkedin"
        href="https://www.linkedin.com/in/scott-milliorn/"
        target="_blank"
      >
        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-sky-600">
          <FaLinkedinIn />
        </div>
      </Link>
      <Link
        aria-label="twitter"
        href="https://twitter.com/scottmilliorn"
        target="_blank"
      >
        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-sky-500">
          <FaTwitter />
        </div>
      </Link>
      <Link
        aria-label="resume"
        href="https://milliorn.github.io/digital-resume/"
        target="_blank"
      >
        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-pink-500">
          <BsFillPersonLinesFill />
        </div>
      </Link>
    </div>
  );
}
