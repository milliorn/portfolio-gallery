import { HeroCoontainer } from "./HeroCoontainer";

// hero component
function Hero(): JSX.Element {
  return (
    <div className="w-full h-screen text-center" id="hero">
      <div className="text-5xl flex justify-center gap-16 py-3">
        <HeroCoontainer />
      </div>
    </div>
  );
}

export default Hero;


