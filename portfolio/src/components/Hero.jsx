import React from "react";

const Hero = (props) => {
  return (
    <header
      id={props.id}
      className="h-screen w-full bg-[url('../assets/hero.jpg')] bg-cover bg-no-repeat container"
    >
      <div className="container grid content-center justify-center w-screen h-screen">
        <span className="text-4xl text-white capitalize">{props.spanText}</span>
      </div>
    </header>
  );
};

export default Hero;
