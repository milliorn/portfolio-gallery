import Image from "next/image";
import Link from "next/link";

function About(): JSX.Element {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Diligent Developer</h2>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            recusandae rem, distinctio ullam asperiores maiores vitae nisi eum!
            Distinctio aliquid voluptate soluta laborum delectus quis provident
            dolorum? Magnam, nesciunt excepturi.
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem eum saepe eos eaque. Neque blanditiis maiores eveniet
            hic totam laudantium eaque itaque voluptatem rem, rerum omnis
            tenetur ipsam, explicabo at.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
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
