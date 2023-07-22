import ContactButtonsContainer from "./ContactButtonsContainer";

// holds text and buttons in contact
export default function ContactText(): JSX.Element {
  return (
    <div className="pt-8">
      <p className="uppercase text-xl tracking-widest text-indigo-600 text-center ">
        Contact
      </p>
      <h2 className="py-4 text-center">Jagdeep Singh</h2>
      <p className="py-2 text-gray-600 text-center">Web Developer</p>
      <p className="py-2 text-gray-600 text-center">
        Available for Freelance or Full-Time Positions. Contact me and
        let&apos;s start our journey!
      </p>
      <ContactButtonsContainer />
    </div>
  );
}
