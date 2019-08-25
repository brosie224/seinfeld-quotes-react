import React from "react";
import Logo from "../newSeinfeldLogo.png";
import { Link } from "react-router-dom";
// import Navbar from "react-bootstrap/Navbar";
// import Button from "react-bootstrap/Button";

const navStyle = {
  textDecoration: "none",
  color: "rgb(204, 41, 51)"
};

const Nav = () => (
  <nav>
    <img src={Logo} height="50" alt="logo" />
    <li>
      <Link to="/" style={navStyle}>
        Quotes
      </Link>
    </li>
    <li>
      <Link to="add-quote" style={navStyle}>
        Add Quote
      </Link>
    </li>
    <li>
      <Link to="/search" style={navStyle}>
        Search (move to right as input box)
      </Link>
    </li>
  </nav>

  // <Navbar bg="dark" variant="dark">
  //   <Navbar.Brand href="#home">Navbar</Navbar.Brand>
  //   <Nav className="mr-auto">
  //     <Link to="/" style={navStyle}>
  //       Home
  //     </Link>
  //   </Nav>
  //   {/* <Form inline>
  //     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
  //   <Button variant="outline-info">Search</Button>
  //   </Form> */}
  // </Navbar>
);

export default Nav;
