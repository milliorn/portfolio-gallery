import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";

// about text component
function AboutText(): JSX.Element {
  return (
    <div className="col-span-2 mx-4">
      <p className="uppercase text-xl tracking-widest text-indigo-600 text-center xl:text-start">
        About Me
      </p>
      <h2 className="py-4 text-center xl:text-start">Diligent Developer</h2>
      <p className="py-2 text-gray-600">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia aperiam
        sint dignissimos, vel possimus porro nam atque, laboriosam, sit ullam
        rem quo laborum fugiat. Consequuntur, ipsam! Accusantium pariatur
        cupiditate cum?
      </p>
      <p className="py-2 text-gray-600">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
        aspernatur, deserunt obcaecati eligendi aliquam expedita odit doloremque
        neque facilis commodi in tenetur aperiam explicabo natus. Iure eaque
        suscipit possimus? Voluptates.
      </p>
      <Link href="/#projects" scroll={false}>
        <p className="py-2 text-gray-600 underline cursor-pointer">
          Click to see my favorite projects.
        </p>
      </Link>
    </div>
  );
}

// about image container
function AboutImage(): JSX.Element {
  return (
    <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
      <Image
        src="https://picsum.photos/seed/webdeveloper/1920/1080"
        width={1920}
        height={1080}
        alt="Web developer placeholder"
        className="rounded-xl"
      />
    </div>
  );
}

// about component
export default function About(): JSX.Element {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-32">
      <div className="max-w-7xl m-auto md:grid grid-cols-3 gap-8">
        <AboutText />
        <AboutImage />
      </div>
    </div>
  );
}
