import "./App.css";
import hero from "./images/hero.jpg";

export default function App() {
  return (
    <div className="mx-auto 2xl:container">
      <div className="relative">
        <img src={hero} alt="hero" className="absolute w-screen h-100" />
        <div class="table w-full z-10 relative text-white">
          <div class="table-header-group">
            <div class="table-row">
              <div class="table-cell text-center">Home</div>
              <div class="table-cell text-center">About</div>
              <div class="table-cell text-center">Skills</div>
              <div class="table-cell text-center">Contact</div>
            </div>
          </div>
        </div>
        <div class="relative">
          <h1 className="absolute w-screen text-3xl text-center text-white h-100">
            React Developer
          </h1>
        </div>
      </div>
    </div>
  );
}
