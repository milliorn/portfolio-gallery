import Image from "next/image";
import Link from "next/link";
import { ReactElement, JSXElementConstructor } from "react";

import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const contactButtons = [
  {
    button: <FaGithub />,
    className:
      "rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300",
    href: "https://github.com/milliorn",
    label: "Github",
  },
  {
    button: <FaLinkedinIn />,
    className:
      "rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-sky-600",
    href: "https://www.linkedin.com/in/scott-milliorn/",
    label: "LinkedinIn",
  },
  {
    button: <FaTwitter />,
    className:
      "rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-sky-500",
    href: "https://twitter.com/scottmilliorn",
    label: "Twitter",
  },
  {
    button: <BsFillPersonLinesFill />,
    className:
      "rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-pink-500",
    href: "https://milliorn.github.io/digital-resume/",
    label: "Resume",
  },
] as const;

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

// template for contact buttons
function ContactButton(props: {
  className: string;
  button: string | ReactElement<string, string | JSXElementConstructor<string>>;
}): JSX.Element {
  return <div className={props.className}>{props.button}</div>;
}

// container to hold contact buttons
function ContactButtonsContainer(): JSX.Element {
  return (
    <div className="flex items-center justify-between max-w-xs m-auto py-4">
      {contactButtons.map((e) => (
        <Link aria-label={e.label} href={e.href} target="_blank" key={e.label}>
          <ContactButton className={e.className} button={e.button} />
        </Link>
      ))}
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
      <ContactButtonsContainer />
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
