import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faBars,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Nav, Navbar } from "react-bootstrap";
import Logo from "../images/logo.png";

export default function NavBar({setOpenSideBar}) {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="home">
        <img src={Logo} width="200px"></img>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="transitionplanning">Transition Planning</Nav.Link>
        <Nav.Link href="alternativepaths">Alternative Paths</Nav.Link>
        <Nav.Link href="community">Community</Nav.Link>
      </Nav>
      <FontAwesomeIcon
        icon={faSearch}
        style={{ fontSize: "2em", margin: "10px" }}
        color="#DEDEDE"
      />
      <FontAwesomeIcon
        icon={faUserCircle}
        style={{ fontSize: "2em", margin: "10px" }}
        color="#DEDEDE"
      />
      <FontAwesomeIcon
        icon={faBars}
        style={{ fontSize: "2em", margin: "10px" }}
        color="#DEDEDE"
        onClick={() => setOpenSideBar(true)}
      />
    </Navbar>
  );
}
