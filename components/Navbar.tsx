import Image from "next/image";
import Link from "next/link";

import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useState, useEffect, SetStateAction, Dispatch } from "react";

import NavLogo from "../public/assets/navbarLogo.png";

const navbarLinksData = [
  { href: "/#hero", text: "Home" },
  { href: "/#about", text: "About" },
  { href: "/#skills", text: "Skills" },
  { href: "/#projects", text: "Projects" },
  { href: "/#contact", text: "Contact" },
  { href: "https://milliorn.github.io/digital-resume/", text: "Resume" },
] as const;

// links found in the navbar component
function NavbarLinks(props: { nav: () => void }): JSX.Element {
  const { nav } = props;
  return (
    <>
      <ul className="hidden md:flex mr-8 uppercase">
        {navbarLinksData.map((link) => (
          <li
            key={link.text}
            className="ml-10 text-sm hover:border-b border-indigo-600/100"
          >
            <Link scroll={false} href={link.href}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger Icon */}
      <div onClick={nav} className="md:hidden">
        <AiOutlineMenu size={25} />
      </div>
    </>
  );
}

// top of side bar menu
function SideMenuTop(props: { nav: () => void }): JSX.Element {
  const { nav } = props;
  return (
    <>
      <div className="relative">
        <div
          onClick={nav}
          className="rounded-full shadow-lg shadow-gray-400 p-1 cursor-pointer absolute top-0 right-0"
        >
          <AiOutlineClose />
        </div>
      </div>
      <div className="border-b border-gray-300">
        <p className="w-10/12 sm:w-11/12 py-4">
          Let&apos;s build web applications!
        </p>
      </div>
    </>
  );
}

// global navbar logo
function NavbarLogoGlobal(): JSX.Element {
  return (
    <Link href="/">
      <Image src={NavLogo} alt="/" className="cursor-pointer w-20" />
    </Link>
  );
}

// global navbar component
export default function Navbar(): JSX.Element {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  // handler events
  function handleNav(): void {
    setNav(!nav);
  }

  useEffect(() => {
    // show/hide shadow on navbar based on viewpoint
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const showHideNavbar: string = nav
    ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
    : "invisible";

  const showHideSideMenu: string = nav
    ? "fixed left-0 top-0 w-9/12 h-screen bg-[#F3F4F6] p-8 ease-in duration-500"
    : "fixed left-[-100%] top-0 p-10 ease-in duration-500";

  const showHideShadow: string = shadow
    ? "fixed w-full h-20 shadow-xl z-50 ease-in-out duration-300"
    : "fixed w-full h-20 z-50";

  // links found in the navbar component
  function SideMenuNavbarLinks(): JSX.Element {
    return (
      <ul className="uppercase">
        {navbarLinksData.map((link) => (
          <li
            key={link.text}
            onClick={() => setNav(false)}
            className="py-2 text-sm"
          >
            <Link scroll={false} href={link.href}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  // bottom section of global side menu navbar
  function SideMenuNavbarBottom(props: {
    navSet: Dispatch<SetStateAction<boolean>>;
    getNav: boolean;
  }): JSX.Element {
    const { navSet, getNav } = props;
    return (
      <div className="pt-40">
        <p className="uppercase tracking-widest text-indigo-600">
          Let&#39;s Connect
        </p>
        <div className="flex items-center justify-evenly my-4 w-full sm:w-4/5">
          <Link
            href="https://www.linkedin.com/in/scott-milliorn/"
            target="_blank"
          >
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <FaLinkedinIn />
            </div>
          </Link>
          <Link href="https://github.com/milliorn" target="_blank">
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <FaGithub />
            </div>
          </Link>
          <Link scroll={false} href="/#contact">
            <div
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
              onClick={() => setNav(!nav)}
            >
              <AiOutlineMail />
            </div>
          </Link>
          <Link
            href="https://milliorn.github.io/digital-resume/"
            scroll={false}
            target="_blank"
          >
            <div
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
              onClick={() => setNav(!nav)}
            >
              <BsFillPersonLinesFill />
            </div>
          </Link>
        </div>
      </div>
    );
  }

  function SideMenu() {
    return (
      <div className={showHideNavbar}>
        {/* Side Menu */}
        <div className={showHideSideMenu}>
          <SideMenuTop nav={handleNav} />
          <SideMenuNavbarLinks />
          <SideMenuNavbarBottom navSet={setNav} getNav={nav} />
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: `#F3F4F6` }} className={showHideShadow}>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 bg-white">
        <NavbarLogoGlobal />
        <NavbarLinks nav={handleNav} />
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div className={showHideNavbar}>
        {/* Side Menu */}
        <div className={showHideSideMenu}>
          <SideMenuTop nav={handleNav} />
          <SideMenuNavbarLinks />
          <SideMenuNavbarBottom navSet={setNav} getNav={nav} />
        </div>
      </div>
    </div>
  );
}
