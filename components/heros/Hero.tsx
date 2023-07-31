import { HeroCoontainer } from "./HeroCoontainer";

// hero component
function Hero(): JSX.Element {
  return (
    <div className="w-full h-screen text-center" id="hero">
      <div className="max-w-5xl w-full h-full mx-auto p-1 flex justify-center items-center">
        <HeroCoontainer />
      </div>
    </div>
  );
}

export default Hero;


