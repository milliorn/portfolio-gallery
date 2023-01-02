import Image from "next/image";
import Link from "next/link";

function About(): JSX.Element {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-24">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-indigo-600 text-center xl:text-start">
            About Me
          </p>
          <h2 className="py-4 text-center xl:text-start">Diligent Developer</h2>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
            aperiam sint dignissimos, vel possimus porro nam atque, laboriosam,
            sit ullam rem quo laborum fugiat. Consequuntur, ipsam! Accusantium
            pariatur cupiditate cum?
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            aspernatur, deserunt obcaecati eligendi aliquam expedita odit
            doloremque neque facilis commodi in tenetur aperiam explicabo natus.
            Iure eaque suscipit possimus? Voluptates.
          </p>
          <Link href="/#projects" scroll={false}>
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Click to see my favorite projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            alt="/"
            blurDataURL="../public/assets/navbarLogo.png"
            className="rounded-xl"
            height={1080}
            placeholder="blur"
            src="https://source.unsplash.com/random/?web+developer"
            width={1920}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
