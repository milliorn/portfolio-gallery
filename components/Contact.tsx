import Image from "next/image";
import Link from "next/link";

import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

// image container for contact
function ContactImage(): JSX.Element {
  return (
    <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl hidden md:flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
      <Image
        alt="/"
        blurDataURL="../public/Linkssets/navbarLogo.png"
        className="rounded-xl md:flex hidden"
        height={1080}
        placeholder="blur"
        src="https://source.unsplash.com/random/?programmer"
        width={1920}
      />
    </div>
  );
}

// container to hold contact buttons
function ContactButtons(): JSX.Element {
  return (
    <div className="flex items-center justify-between max-w-xs m-auto py-4">
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

// holds text and buttons in contact
function ContactText(): JSX.Element {
  return (
    <div className="pt-8">
      <p className="uppercase text-xl tracking-widest text-indigo-600 text-center ">
        Contact
      </p>
      <h2 className="py-4 text-center">Scott Milliorn</h2>
      <p className="py-2 text-gray-600 text-center">Web Developer</p>
      <p className="py-2 text-gray-600 text-center">
        Available for Freelance or Full-Time Positions. Contact me and
        let&apos;s start our journey!
      </p>
      <ContactButtons />
    </div>
  );
}

// Contact component
export default function Contact(): JSX.Element {
  return (
    <div
      id="contact"
      className="w-full md:h-screen p-2 flex items-center py-16 md:py-32"
    >
      <div className="max-w-7xl	m-auto md:grid grid-cols-2 gap-8">
        <ContactImage />
        <ContactText />
      </div>
    </div>
  );
}
