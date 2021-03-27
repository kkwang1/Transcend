import React, { useState } from "react";
import Logo from "../images/logo.png";
import Cover from "../images/cover.png";
import { Nav, Navbar, Button, CardDeck, Card } from "react-bootstrap";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faBars,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Reports,
  ReportsOne,
  ReportsTwo,
  ReportsThree,
} from "../pages/Reports";
import Sidebar from "../components/sideBar/Sidebar";

export default function Main() {
  const [openSideBar, setOpenSideBar] = useState(false);
  // <Sidebar
  //   sidebar={<SideBarContent/>}
  //   open={openSideBar}
  //   onSetOpen={setOpenSideBar}
  //   styles={{ sidebar: { background: "white" } }}
  //   pullRight
  // >
  // </Sidebar>
  return (
    <>
      <Router>
        <Sidebar sidebar={openSideBar} setSidebar={setOpenSideBar} />
        <Switch>
          <Route path="/reports/reports1" exact component={ReportsOne} />
          <Route path="/reports/reports2" exact component={ReportsTwo} />
          <Route path="/reports/reports3" exact component={ReportsThree} />
        </Switch>
      </Router>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="home">
          <img src={Logo} width="200px"></img>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="transitionalplanning">Transitional Planning</Nav.Link>
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
      <div style={{ position: "relative" }}>
        <img src={Cover} style={{ width: "100%" }} />
        <div className="homeButton">
          <Button
            style={{
              backgroundColor: "#1B7B89",
              width: "100%",
              height: "100%",
              fontSize: "large",
              fontWeight: "bold",
            }}
          >
            GET STARTED
          </Button>
        </div>
      </div>
      <div style={{ display: "flex", margin: "3em" }}>
        <div style={{ margin: "auto 1.5em auto auto" }}>
          <h1>About the Service</h1>
        </div>
        <div style={{ width: "50%", textAlign: "left", margin: "auto" }}>
          <p style={{ fontSize: "1.2em" }}>
            Transcend is a digital platform meant to aid individuals with
            developmental disabilities and their families during their
            transition into adulthood. We noticed there is sometimes a lack of
            guidance and support for students and families when it comes to
            transition, so our goal is to (a) help to facilitate and ease the
            stress of planning and (b) point students to fulfilling and
            accessible options, as well as alternatives to traditional
            postsecondary pathways.
          </p>
        </div>
      </div>
      <div style={{ margin: "3em" }}>
        <CardDeck>
          <Card style={{ backgroundColor: "#F1F1F1", color: "#203E45" }}>
            <Card.Body>
              <Card.Title>RESOURCES FOR TRANSITIONAL PLANNING</Card.Title>
              <Card.Text>
                Find and save resources for planning transition into adulthood.
                Utilizing the information in your profile, our system can help
                you create an appropriate, feasible, and individualized
                transition plan.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ backgroundColor: "#F1F1F1", color: "#203E45" }}>
            <Card.Body>
              <Card.Title>BUILD A COMMUNITY</Card.Title>
              <Card.Text>
                Connect with groups and communities of interest, ranging from
                service providers to educators to parents and students. Can’t
                find the group you’re looking for? Create your own!
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ backgroundColor: "#F1F1F1", color: "#203E45" }}>
            <Card.Body>
              <Card.Title>ALTERNATIVE PATHWAYS</Card.Title>
              <Card.Text>
                Have our system populate a customized day program (using
                information from your profile and a preliminary student
                assessment) for continued life skills learning and/or
                alternative forms of employment or fulfillment.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    </>
  );
}
