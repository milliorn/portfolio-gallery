import Link from "next/link";
import ContactButton from "./ContactButton";
import { contactButtons } from "./contactButtons";

// container to hold contact buttons
export default function ContactButtonsContainer(): JSX.Element {
  return (
    <div className="flex space-x-1 items-center justify-between max-w-xs m-auto py-0">
      {contactButtons.map((e) => (
        <Link aria-label={e.label} href={e.href} target="_blank" key={e.label}>
          <ContactButton className={e.className} button={e.button} />
        </Link>
      ))}
    </div>
  );
}
