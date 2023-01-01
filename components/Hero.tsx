import Link from "next/link";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

// Main component on front page
function Hero(): JSX.Element {
  return (
    <div className="w-full h-screen text-center" id="hero">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <div className="pt-28 sm:pt-0">
            <p className="uppercase text-sm tracking-widest text-gray-600">
              Let&apos;s build web applications!
            </p>
          </div>
          <h1 className="py-4 text-gray-700">
            Hello, I&apos;m <span className="text-[#5651e5]">Scott</span>
          </h1>
          <h1 className="py-4 text-gray-700">Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Focused on building responsive, mobile first web applications while
            learning back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link
              href="https://github.com/milliorn"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </Link>
            <Link
              href="https://www.linkedin.com/in/scott-milliorn/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-sky-600">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link
              href="https://twitter.com/scottmilliorn"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-sky-500">
                <FaTwitter />
              </div>
            </Link>
            <Link
              href="https://milliorn.github.io/digital-resume/"
              target="_blank"
              rel="noreferrer"
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
