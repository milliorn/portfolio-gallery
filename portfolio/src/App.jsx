import "./App.css";

export default function App() {
  return (
    <div className="mx-auto 2xl:container text-white">
      <nav id="navbar" className="fixed z-10 table w-full drop-shadow-2xl	m-1 p-1">
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

      <div
        id="hero"
        className="h-screen w-screen bg-slate-300 bg-[url('./images/hero.jpg')] bg-cover bg-no-repeat"
      >
        <div className="grid h-screen w-screen content-center justify-center">
          <span className=" text-4xl capitalize text-white">Web Developer</span>
        </div>
      </div>
    </div>
  );
}
