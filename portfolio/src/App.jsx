import {
  SiBootstrap,
  SiCsharp,
  SiCss3,
  SiDocker,
  SiGatsby,
  SiGit,
  SiGithub,
  SiGmail,
  SiHtml5,
  SiJavascript,
  SiLeetcode,
  SiLinkedin,
  SiPostcss,
  SiReact,
  SiRust,
  SiTailwindcss,
  SiTwitter,
} from "react-icons/si";
import "./App.css";
import aboutImage from "./images/about.jpg";

export default function App() {
  return (
    <div className="container mx-auto font-sans text-white">
      <nav
        id="navbar"
        className="container fixed z-10 table px-0 py-2 mx-0 bg-black drop-shadow-2xl"
      >
        <div className="table-header-group">
          <div className="table-row text-xl capitalize divide-x">
            <a href="/" className="table-cell text-center">
              <span className="">h</span>
              <span className="text-sm">ome</span>
            </a>
            <a href="/" className="table-cell text-center">
              <span className="">a</span>
              <span className="text-sm">bout</span>
            </a>
            <a href="/" className="table-cell text-center">
              <span className="">p</span>
              <span className="text-sm">rojects</span>
            </a>
            <a href="/" className="table-cell text-center">
              <span className="">s</span>
              <span className="text-sm">kills</span>
            </a>

            <a href="/" className="table-cell text-center">
              <span className="">c</span>
              <span className="text-sm">ontact</span>
            </a>
          </div>
        </div>
      </nav>

      <header
        id="hero"
        className="h-screen w-full bg-[url('./images/hero.jpg')] bg-cover bg-no-repeat container"
      >
        <div className="container grid content-center justify-center w-screen h-screen">
          <span className="text-4xl text-white capitalize ">
            React Developer
          </span>
        </div>
      </header>

      <section id="about" className="bg-neutral-900">
        <div className="container items-center w-screen mx-auto my-4 sm:flex sm:flex-row">
          {/*<!--Left Col-->*/}
          <div className="flex flex-col items-start justify-center w-full p-8 text-center text-white lg:w-1/2">
            <h1 className="mx-auto my-0 text-4xl font-semibold leading-loose capitalize">
              <span className="">Scott Milliorn</span>
            </h1>
            <p className="mx-auto my-2 leading-normal">
              Passionate developer. Experienced game developer. Focused on
              mobile first web development using React and Tailwind. Want to
              know more? Download my resume by clicking on the button.
            </p>
            <button className="p-2 mx-auto my-4 text-white capitalize bg-gray-500 border border-gray-900 rounded shadow outline outline-offset-1 outline-white hover:animate-pulse hover:bg-gray-400 hover:text-gray-50 hover:shadow-lg hover:border-transparent">
              resume
            </button>
          </div>
          {/*<!--Right Col-->*/}
          <div className="w-screen px-4 sm:w-full sm:px-0">
            <img src={aboutImage} alt="about" className="" />
          </div>
        </div>
      </section>

      <section id="projects" className="pt-4 m-4 sm:m-0 bg-neutral-900">
        <h1 className="text-2xl text-center capitalize ">
          open source projects
        </h1>

        <div className="m-4 sm:flex">
          <div className="relative border rounded-lg shadow-md max-w-fit bg-neutral-100 border-neutral-500">
            <div className="p-5">
              <h5 className="mb-2 text-lg font-bold text-center text-gray-900 capitalize">
                Neverwinter Nights .NET
              </h5>
              <p className="mb-3 text-sm text-center text-neutral-900">
                Open source organization for Neverwinter Nights: Enhanced
                Edition. We developed an API called Anvil for the Neverwinter
                Nights Server. NWN.Masterlist is used to consume Master Server
                API. NWN.Core is used to interlop functions for NWNX .Net and
                wrap core functions. NWN.Native is a Low-level NWNXLib bindings
                for managed to native interop.
              </p>
              <br />
              <div className="absolute bottom-0 left-0 right-0 m-1 text-center">
                <a
                  className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center capitalize rounded-lg text-neutral-50 bg-neutral-700 neutral:bg-neutral-900 focus:ring-4 neutral:ring-neutral-700"
                  href="https://github.com/nwn-dotnet"
                  target="_blank"
                  rel="noreferrer"
                >
                  learn more
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="m-4 sm:flex">
          <div className="relative border rounded-lg shadow-md max-w-fit bg-neutral-100 border-neutral-500">
            <div className="p-5">
              <h5 className="mb-2 text-lg font-bold text-center text-gray-900 capitalize">
                Gatsby Recipe Page
              </h5>
              <p className="mb-3 text-sm text-center text-neutral-900">
                Recipe website done in GatsbyJS full stack frontend framework.
                It uses Contentful CMS, source controlled on Github, built and
                previewed in Gatsby Cloud, deployed onto Netlify Serverless
                Jamstack. It also acts as my personal site for cooking recipes.
              </p>
              <br />

              <div className="absolute bottom-0 left-0 right-0 m-1 text-center">
                <a
                  className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center capitalize rounded-lg text-neutral-50 bg-neutral-700 neutral:bg-neutral-900 focus:ring-4 neutral:ring-neutral-700"
                  href="https://gatsby-recipe-page.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit my site
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="m-4 sm:flex">
          <div className="relative border rounded-lg shadow-md max-w-fit bg-neutral-100 border-neutral-500">
            <div className="p-5">
              <h5 className="mb-2 text-lg font-bold text-center text-gray-900 capitalize">
                Everyday Iron Workout Warehouse
              </h5>
              <p className="mb-3 text-sm text-center text-neutral-900">
                Open source code for Everyday Iron Workout Warehouse Gym in
                Fresno, California. I develop there website, assist with other
                tech and internet duties and consult them on there social media
                sites. I also workout here and help assist coaches.
              </p>
              <br />

              <div className="absolute bottom-0 left-0 right-0 m-1 text-center">
                <a
                  className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center capitalize rounded-lg text-neutral-50 bg-neutral-700 neutral:bg-neutral-900 focus:ring-4 neutral:ring-neutral-700"
                  href="https://milliorn.github.io/Everyday-Iron/"
                  target="_blank"
                  rel="noreferrer"
                >
                  See my work
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-1 sm:flex">
        <div className="flex-1 leading-loose bg-neutral-900 sm:order-2">
          <div className="p-4 mx-auto my-0">
            <h2 className="text-3xl leading-loose text-center capitalize">
              what i enjoy doing
            </h2>
            <h3 className="text-lg font-semibold leading-loose text-center">
              Click an icon to see my work.
            </h3>
          </div>
          <p className="hidden m-4 leading-loose sm:flex">
            My experience with Javascript is mostly with ReactJS. My CSS
            experience beyond vanilla is with Bootstrap and Tailwind. These days
            I prefer to use Tailwind, even with vanilla HTML sites. GatsbyJS
            sites I created are hosted on Netlify and Gatsby Cloud. I have video
            game experience with C#/.NET using Docker for continuous deployment
            along with NWScript. Open source contributor for a video game .NET
            API. Recently I have been learning Rust.
          </p>
        </div>
        <div className="flex-1 p-4 bg-neutral-900">
          <div className="flex items-center justify-center w-full">
            <div className="grid grid-cols-2 gap-4 pb-4 md:grid-cols-3 lg:grid-cols-4">
              <div className="p-4 text-black bg-amber-300 text-7xl">
                <a
                  href="https://github.com/milliorn?tab=repositories&q=&type=public&language=javascript&sort="
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <SiJavascript />
                </a>
              </div>
              <div className="p-4 text-center text-white bg-orange-600 text-7xl">
                <a
                  href="https://github.com/milliorn?tab=repositories&q=&type=public&language=html&sort="
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <SiHtml5 />
                </a>
              </div>
              <div className="p-4 text-center text-white bg-lightBlue-700 text-7xl">
                <a
                  href="https://github.com/milliorn?tab=repositories&q=css&type=public&language=&sort="
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <SiCss3 />
                </a>
              </div>
              <div className="p-4 text-center bg-white border-2 text-lightBlue-500 text-7xl">
                <a
                  href="https://github.com/milliorn?tab=repositories&q=react&type=public&language=&sort="
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <SiReact />
                </a>
              </div>
              <div className="p-4 text-center text-white bg-green-600 text-7xl">
                <a
                  href="https://github.com/milliorn?tab=repositories&q=&type=public&language=c%23&sort="
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <SiCsharp />
                </a>
              </div>
              <div className="p-4 text-center bg-white border-2 text-lightBlue-500 text-7xl">
                <a
                  href="https://github.com/milliorn?tab=repositories&q=tailwind&type=public&language=&sort="
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <SiTailwindcss />
                </a>
              </div>
              <div className="p-4 text-center text-white bg-purple-700 text-7xl">
                <a
                  href="https://github.com/milliorn?tab=repositories&q=gatsby&type=public&language=&sort="
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <SiGatsby />
                </a>
              </div>
              <div className="p-4 text-center text-white bg-purple-800 text-7xl">
                <a
                  href="https://github.com/milliorn?tab=repositories&q=bootstrap&type=public&language=&sort="
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <SiBootstrap />
                </a>
              </div>
              <div className="p-4 text-center text-white bg-orange-700 text-7xl">
                <a
                  href="https://github.com/milliorn?tab=repositories&q=postcss&type=public&language=&sort="
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <SiPostcss />
                </a>
              </div>
              <div className="p-4 text-center text-black bg-white border-2 text-7xl">
                <a
                  href="https://github.com/milliorn?tab=repositories&q=&type=public&language=rust&sort="
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <SiRust />
                </a>
              </div>
              <div className="p-4 text-center bg-white border-2 text-lightBlue-500 text-7xl">
                <a
                  href="https://github.com/milliorn?tab=repositories&q=docker&type=public&language=&sort="
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <SiDocker />
                </a>
              </div>
              <div className="p-4 text-center text-white bg-orange-600 text-7xl">
                <a
                  href="https://github.com/milliorn"
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <SiGit />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="m-1 bg-neutral-900">
        <h2 className="m-4 text-2xl text-center capitalize">
          how to contact me?
        </h2>
        <p className="text-center capitalize">
          Click a button to find me on the web.
        </p>
        <div class="flex flex-row justify-center">
          <button className="mx-2 my-4 text-3xl text-red-600 sm:text-4xl">
            <SiGmail />
          </button>
          <button className="mx-2 my-4 text-3xl bg-white text-lightBlue-600 sm:text-4xl">
            <SiLinkedin />
          </button>
          <button className="mx-2 my-4 text-3xl rounded-full text-lightBlue-500 sm:text-4xl">
            <SiTwitter />
          </button>
          <button className="mx-2 my-4 text-3xl text-black bg-white border-black sm:text-4xl">
            <SiGithub />
          </button>
          <button className="mx-2 my-4 text-3xl text-yellow-600 sm:text-4xl">
            <SiLeetcode />
          </button>
        </div>
      </footer>
    </div>
  );
}
