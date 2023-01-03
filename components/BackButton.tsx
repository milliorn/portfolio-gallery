import Link from "next/link";

// link found in project pages that navigates you back to previous page
export default function BackButton(): JSX.Element {
  return (
    <Link href="/#projects">
      <p className="underline cursor-pointer ml-4">Back</p>
    </Link>
  );
}
