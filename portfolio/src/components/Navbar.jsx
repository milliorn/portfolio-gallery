import React from "react";
import { navData } from "../assets/data";

const NavBar = (props) => {
  const buildNavBar = navData.map((e, i) => (
    <div className={props.className} onClick={props.onClick} id={e.id}>
      <span>{e.spanFirst}</span>
      <span className={props.spanClassName}>{e.spanLast}</span>
    </div>
  ));

  return (
    <nav className="container fixed z-10 table px-0 py-2 mx-0 bg-black drop-shadow-2xl">
      <div className="table-header-group">
        <div className="table-row text-xl capitalize divide-x">
          {buildNavBar}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
