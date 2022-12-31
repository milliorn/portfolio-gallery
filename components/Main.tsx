import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

// Main component on front page
function Main(): JSX.Element {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let&apos;s build web applications!
          </p>
          <h1 className="py-4 text-gray-700">
            Hello, I&apos;m <span className="text-[#5651e5]">Scott</span>
          </h1>
          <h1 className="py-4 text-gray-700">Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Focused on building responsive, mobile first web applications while
            learning back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://github.com/milliorn"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/scott-milliorn/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-sky-600">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://twitter.com/scottmilliorn"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-sky-500">
                <FaTwitter />
              </div>
            </a>
            <a
              href="https://milliorn.github.io/digital-resume/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-pink-500">
                <BsFillPersonLinesFill />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
