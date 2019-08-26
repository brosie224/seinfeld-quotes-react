import React from "react";
import Logo from "../newSeinfeldLogo.png";
import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

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
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
  </nav>

  // <Navbar bg="light" expand="lg">
  //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //   <Navbar.Collapse id="basic-navbar-nav">
  //     <Nav className="mr-auto" />
  //     <Form inline>
  //       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
  //       <Button variant="outline-success">Search</Button>
  //     </Form>
  //   </Navbar.Collapse>
  // </Navbar>

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
