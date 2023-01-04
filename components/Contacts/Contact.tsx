import ContactImage from "./ContactImage";
import ContactText from "./ContactText";

// Contact component
export default function Contact(): JSX.Element {
  return (
    <div
      id="contact"
      className="w-full md:h-screen p-2 flex items-center py-16 md:py-32"
    >
      <div className="max-w-7xl	m-auto md:grid grid-cols-2 gap-8">
        <ContactImage />
        <ContactText />
      </div>
    </div>
  );
}
