import React from "react";

const About = (props) => {
  return (
    <section id="about" className="bg-neutral-900">
      <div className="container items-center w-screen mx-auto my-4 sm:flex sm:flex-row">
        <div className="flex flex-col items-start justify-center w-full p-8 text-center text-white lg:w-1/2">
          <h1 className="mx-auto my-0 text-4xl font-semibold leading-loose capitalize">
            <span className="">{props.span}</span>
          </h1>
          <p className="mx-auto my-2 leading-normal">{props.paragraph}</p>
          <a
            download={props.download}
            href={props.href}
            target={props.target}
            className="p-2 mx-auto my-4 text-white capitalize bg-gray-500 border border-gray-900 rounded shadow outline outline-offset-1 outline-white hover:animate-pulse hover:bg-gray-400 hover:text-gray-50 hover:shadow-lg hover:border-transparent"
            rel={props.rel}
          >
            {props.text}
          </a>
        </div>
        <div className="w-screen px-4 sm:w-full sm:px-0">
          <img src={props.img} alt={props.alt} />
        </div>
      </div>
    </section>
  );
};

export default About;
