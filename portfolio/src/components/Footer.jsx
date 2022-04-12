import React from "react";
import { SiGmail } from "react-icons/si";
import { footerData } from "../assets/data";
import { randomElement, currentyear } from "../assets/util";

const Footer = (props) => {
  const buildFooter = footerData.map((e, i) => (
    <a href={e.href} className={e.className} target="_blank" rel="noreferrer">
      {e.icon}
    </a>
  ));

  return (
    <footer className="sm:block pt-4 mt-4 sm:m-0 bg-neutral-900">
      <h2 className="m-4 text-2xl text-center capitalize">{props.h2}</h2>
      <p className="text-center capitalize">{props.p}</p>
      <div class="flex flex-row justify-center">
        <a
          href="mailto: scottmilliorn@gmail.com"
          className="mx-2 my-4 text-3xl text-red-600 sm:text-4xl"
        >
          <SiGmail />
        </a>
        {randomElement(buildFooter)}
      </div>
      <p className="text-center text-xs leading-loose">
        © {currentyear} Scott Milliorn
      </p>
      <br />
    </footer>
  );
};

export default Footer;
