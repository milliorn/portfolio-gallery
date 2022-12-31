import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import NavLogo from "../public/assets/navbarLogo.png";

function Navbar(): JSX.Element {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  // handler events
  function handleNav(): void {
    setNav(!nav);
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `#ecf0f3` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image src={NavLogo} alt="/" className="cursor-pointer w-20" />
        </Link>
        <div>
          <ul className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link scroll={false} href="/#about">
                About
              </Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link scroll={false} href="/#skills">
                Skills
              </Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link scroll={false} href="/#projects">
                Projects
              </Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link scroll={false} href="/resume">
                Resume
              </Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link scroll={false} href="/#contact">
                Contact
              </Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
            : "invisible"
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image src={NavLogo} width="100" height="100" alt="/" />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&apos;s build web applications!
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-2 text-sm">
                  Home
                </li>
              </Link>
              <Link scroll={false} href="/#about">
                <li onClick={() => setNav(false)} className="py-2 text-sm">
                  About
                </li>
              </Link>
              <Link scroll={false} href="/#skills">
                <li onClick={() => setNav(false)} className="py-2 text-sm">
                  Skills
                </li>
              </Link>
              <Link scroll={false} href="/#projects">
                <li onClick={() => setNav(false)} className="py-2 text-sm">
                  Projects
                </li>
              </Link>
              <Link scroll={false} href="/resume">
                <li onClick={() => setNav(false)} className="py-2 text-sm">
                  Resume
                </li>
              </Link>
              <Link scroll={false} href="/#contact">
                <li onClick={() => setNav(false)} className="py-2 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-evenly my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/scott-milliorn/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/milliorn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <Link scroll={false} href="/#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link scroll={false} href="/resume">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
