import HeroLinks from "./HeroLinks";
import HeroText from "./HeroText";

// container for hero element
export function HeroCoontainer(): JSX.Element {
  return (
    <div className="pt-56 lg:pt-0 text-5xl flex justify-center gap-16 py-3">
      <HeroText />
      <HeroLinks />
    </div>
  );
}
