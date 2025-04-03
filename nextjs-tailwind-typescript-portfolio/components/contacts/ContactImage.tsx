import Image from "next/image";
import { JSX } from "react";

// image container for contact
export default function ContactImage(): JSX.Element {
  return (
    <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl hidden md:flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
      <Image
        src="https://picsum.photos/seed/programmer/1920/1080"
        width={1920}
        height={1080}
        alt="Programmer placeholder"
        className="rounded-xl md:flex hidden"
      />
    </div>
  );
}
