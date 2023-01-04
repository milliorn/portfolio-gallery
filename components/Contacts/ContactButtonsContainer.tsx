import Link from "next/link";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import ContactButton from "./ContactButton";

// container to hold contact buttons
export default function ContactButtonsContainer(): JSX.Element {
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
