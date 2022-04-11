import React from "react";

const Hero = (props) => {
  return (
    <header id={props.id} className={props.className}>
      <div className={props.divClassName}>
        <span className={props.spanClassName}>{props.spanText}</span>
      </div>
    </header>
  );
};

export default Hero;
