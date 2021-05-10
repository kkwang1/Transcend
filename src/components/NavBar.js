import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faBars,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Nav, Navbar } from "react-bootstrap";
import Logo from "../images/logo.png";
import "../App.scss";

export default function NavBar({openSidebar, setOpenSidebar}) {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="/">
        <img src={Logo} width="200px"></img>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link style={{margin: "auto"}} href="/transitionalplanning">Transitional Planning</Nav.Link>
        <Nav.Link style={{margin: "auto"}} href="/alternativepathways">Alternative Pathways</Nav.Link>
        <Nav.Link style={{margin: "auto"}} href="/community">Community</Nav.Link>
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
        onClick={() => setOpenSidebar(!openSidebar)}
      />
    </Navbar>
  );
}
