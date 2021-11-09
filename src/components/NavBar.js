import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faBars } from "@fortawesome/free-solid-svg-icons";
import { Nav, Navbar } from "react-bootstrap";
import Logo from "../images/logo.png";
import "../App.scss";
import { Link } from "react-router-dom";

export default function NavBar({ openSidebar, setOpenSidebar }) {
  return (
    <Navbar bg="light" variant="light" style={{ zIndex: "99" }}>
      <Link to="/">
        <img src={Logo} width="200px"></img>
      </Link>
      <Nav className="mr-auto">
        <Link
          style={{ margin: "10px", color: "rgba(0, 0, 0, 0.5)" }}
          to="/transitionalplanning"
        >
          Transition Planning
        </Link>
        <Link
          style={{ margin: "10px", color: "rgba(0, 0, 0, 0.5)" }}
          to="/alternativepathways"
        >
          Alternative Pathways
        </Link>
        <Link
          style={{ margin: "10px", color: "rgba(0, 0, 0, 0.5)" }}
          to="/community"
        >
          Community
        </Link>
      </Nav>
      <Link to="/userprofile">
        <FontAwesomeIcon
          icon={faUserCircle}
          style={{ fontSize: "2em", margin: "10px" }}
          color="#DEDEDE"
        />
      </Link>
      <FontAwesomeIcon
        icon={faBars}
        style={{ fontSize: "2em", margin: "10px" }}
        color="#DEDEDE"
        onClick={() => setOpenSidebar(!openSidebar)}
      />
    </Navbar>
  );
}
