import Image from "next/image";
import NavLogo from "../public/assets/navbarLogo.png";
// Global navigation bar
function Navbar(): JSX.Element {
  return (
    <div className="fixed w-full h-22 bg-white shadow-xl z-50">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          src={NavLogo}
          alt="/"
          width="125"
          height="50"
          className="cursor-pointer"
        />{" "}
      </div>
    </div>
  );
}

export default Navbar;
