import React from "react";
import Logo from "../newSeinfeldLogo.png";
import { Link } from "react-router-dom";

const navStyle = {
  textDecoration: "none",
  color: "rgb(204, 41, 51)"
};

const Nav = () => (
  <nav>
    <Link to="/">
      <img src={Logo} height="50" alt="logo" />
    </Link>
    <li>
      <Link to="/search" style={navStyle}>
        Search Quotes
      </Link>
    </li>
  </nav>
);

export default Nav;
