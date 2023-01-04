// text found in hero component
export default function HeroText(): JSX.Element {
  return (
    <>
      <div>
        <p className="uppercase text-sm tracking-widest text-gray-600">
          Let&apos;s build web applications!
        </p>
      </div>

      <h1 className="py-4 text-gray-700">
        Hello, I&apos;m <span className="text-indigo-600">Scott</span>
      </h1>
      <h1 className="py-4 text-gray-700">Web Developer</h1>
      <p className="py-4 text-gray-600 max-w-xs m-auto">
        Focused on building responsive, mobile first web applications while
        learning back-end technologies.
      </p>
    </>
  );
}
