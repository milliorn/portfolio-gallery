import Link from "next/link";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { useState, useEffect } from "react";

import NavbarLogoGlobal from "./NavbarLogoGlobal";
import NavbarBottomSideMenu from "./NavbarBottomSideMenu";

const navbarLinksData = [
  { href: "/#hero", text: "Home" },
  { href: "/#about", text: "About" },
  { href: "/#skills", text: "Skills" },
  { href: "/#projects", text: "Projects" },
  { href: "/#contact", text: "Contact" },
  { href: "https://github.com", text: "Resume" },
] as const;

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

  // links found in the navbar component
  function NavbarLinks(): JSX.Element {
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
        <div onClick={handleNav} className="md:hidden">
          <AiOutlineMenu size={25} />
        </div>
      </>
    );
  }

  // top of side bar menu
  function SideMenuTop(): JSX.Element {
    return (
      <>
        <div className="relative">{<SideMenuTopCloseButton />}</div>
        <div className="border-b border-gray-300">
          <p className="w-10/12 sm:w-11/12 py-4">
            Let&apos;s build web applications!
          </p>
        </div>
      </>
    );

    // button to close side menu
    function SideMenuTopCloseButton() {
      return (
        <div
          onClick={handleNav}
          className="rounded-full shadow-lg shadow-gray-400 p-1 cursor-pointer absolute top-0 right-0"
        >
          <AiOutlineClose />
        </div>
      );
    }
  }

  return (
    <div style={{ backgroundColor: `#F3F4F6` }} className={showHideShadow}>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 bg-white">
        <NavbarLogoGlobal />
        <NavbarLinks />
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div className={showHideNavbar}>
        {/* Side Menu */}
        <div className={showHideSideMenu}>
          <SideMenuTop />
          <SideMenuNavbarLinks />
          <NavbarBottomSideMenu />
        </div>
      </div>
    </div>
  );
}
