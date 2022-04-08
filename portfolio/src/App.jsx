import "./App.css";
import aboutImage from "./images/about.jpg";

export default function App() {
  return (
    <div className="container text-white bg-black">
      <nav
        id="navbar"
        className="fixed z-10 table w-full drop-shadow-2xl mx-0 p-1 bg-black"
      >
        <div className="table-header-group">
          <div className="table-row text-2xl">
            <a href="/" className="table-cell text-center">
              <span className="">Home</span>
            </a>
            <a href="/" className="table-cell text-center">
              <span>About</span>
            </a>
            <a href="/" className="table-cell text-center">
              <span>Skills</span>
            </a>
            <a href="/" className="table-cell text-center">
              <span>Contact</span>
            </a>
          </div>
        </div>
      </nav>

      <header
        id="hero"
        className="h-screen w-screen bg-[url('./images/hero.jpg')] bg-cover bg-no-repeat"
      >
        <div className="grid h-screen w-screen content-center justify-center">
          <span className=" text-4xl capitalize text-white">
            React Developer
          </span>
        </div>
      </header>

      <section id="about">
        <div className="sm:flex items-center mx-auto mb-12 sm:flex-row sm:mb-24 w-screen">
          {/*<!--Left Col-->*/}
          <div className="flex flex-col text-center items-start justify-center w-full px-8 py-8 lg:w-1/2 text-white">
            <h1 className="mx-auto my-0 text-4xl font-semibold capitalize">
              <span className="">Scott Milliorn</span>
            </h1>
            <p className="my-4 leading-normal mx-auto">
              Passionate developer. Experienced game developer. Focused on
              mobile first web development using React and Tailwind. Want to
              know more? Download my resume by clicking on the button.
            </p>
            <button className="p-1 mx-auto my-0 capitalize bg-gray-500 border border-gray-900 shadow hover:animate-pulse hover:bg-gray-400 text-white hover:text-gray-50 rounded-xl hover:shadow-lg hover:border-transparent">
              download resume
            </button>
          </div>
          {/*<!--Right Col-->*/}
          <div className="p-4 w-screen bg-black">
            <img src={aboutImage} alt="about" className="" />
          </div>
        </div>
      </section>
    </div>
  );
}
