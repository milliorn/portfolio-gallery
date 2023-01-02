import Link from "next/link";

import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

// hero component
function Hero(): JSX.Element {
  return (
    <div className="w-full h-screen text-center" id="hero">
      <div className="max-w-7xl w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="pt-56 lg:pt-0">
          <div>
            <p className="uppercase text-sm tracking-widest text-gray-600">
              Let&apos;s build web applications!
            </p>
          </div>
          <h1 className="py-4 text-gray-700">
            Hello, I&apos;m <span className="text-indigo-600">Scott</span>
          </h1>
          <h1 className="py-4 text-gray-700">Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-xs m-auto">
            Focused on building responsive, mobile first web applications while
            learning back-end technologies.
          </p>
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
        </div>
      </div>
    </div>
  );
}

export default Hero;
