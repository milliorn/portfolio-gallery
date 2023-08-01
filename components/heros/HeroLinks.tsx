import Link from "next/link";
import { heroData } from "./heroData";

// hero links component that creates buttons in hero
export default function HeroLinks(): JSX.Element {
  return (
    <div className="text-4xl flex justify-center gap-16 py-3">
      {heroData.map((hero) => (
        <Link
          key={hero.label}
          aria-label={hero.label}
          href={hero.href}
          target="_blank"
        >
          <div className={hero.style}>{hero.icon}</div>
        </Link>
      ))}
    </div>
  );
}
