import React from "react";
import Logo from "../newSeinfeldLogo.png";
import { Link } from "react-router-dom";

const navStyle = {
  textDecoration: "none",
  color: "rgb(204, 41, 51)"
};

const Nav = () => (
  <nav>
    <img src={Logo} height="50" alt="logo" />
    <li>
      <Link to="/" exact style={navStyle}>
        Home
      </Link>
    </li>
    <li>
      <Link to="/random-quote" style={navStyle}>
        Random Quote
      </Link>
    </li>
    <li>
      <Link style={navStyle}>Search Quotes</Link>
    </li>
    <li>
      <Link style={navStyle}>Add Quote</Link>
    </li>
  </nav>
);

export default Nav;
