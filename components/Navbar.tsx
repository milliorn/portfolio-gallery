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
      style={{ backgroundColor: `#F3F4F6` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 bg-white">
        <Link href="/">
          <Image src={NavLogo} alt="/" className="cursor-pointer w-20" />
        </Link>
        <div>
          <ul className="hidden md:flex mr-8">
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link scroll={false} href="/#hero">
                Home
              </Link>
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
              <Link
                scroll={false}
                href="https://milliorn.github.io/digital-resume/"
                target="_blank"
              >
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
        {/* Side Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#F3F4F6] p-8 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="relative">
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-1 cursor-pointer absolute top-0 right-0"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&apos;s build web applications!
              </p>
            </div>
          </div>
          <div className="py-1 flex flex-col">
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
              <Link
                scroll={false}
                href="https://milliorn.github.io/digital-resume/"
                target="_blank"
              >
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
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link
                  scroll={false}
                  href="https://milliorn.github.io/digital-resume/"
                  target="_blank"
                >
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
