import React from "react";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink onClick={() => {props.searchFunction("cats")}} to="/cats">Cats</NavLink>
        </li>
        <li>
          <NavLink onClick={() => {props.searchFunction("dogs")}} to="/dogs">Dogs</NavLink>
        </li>
        <li>
          <NavLink onClick={() => {props.searchFunction("computers")}} to="/computers">Computers</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
