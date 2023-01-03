import Link from "next/link";

export function BackButton(): JSX.Element {
  return <Link href="/#projects">
    <p className="underline cursor-pointer ml-4">Back</p>
  </Link>;
}
