import React from "react";
import TitleBanner from "../../images/title_banner.png";
import { Button } from "react-bootstrap";
import "./style.css";
import ButtonsGroup from "../../components/Button/ButtonsGroup";
import "../../App.scss";
import { useHistory, useLocation } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Main() {
  let history = useHistory();
  let location = useLocation();

  const btnInfo = [
    {
      title: "RESOURCES FOR TRANSITION PLANNING",
      text: `Find and save resources for planning transition into adulthood.
          Utilizing the information in your profile, our system can help
          you create an appropriate, feasible, and individualized
          transition plan.`,
      backgroundColor: "#F1F1F1",
      action: () => history.push(`/transitionalplanning`),
      color: "#1B7B89",
    },
    {
      title: "BUILD A COMMUNITY",
      text: `Connect with groups and communities of interest, ranging from
          service providers to educators to parents and students. Can’t
          find the group you’re looking for? Create your own!`,
      backgroundColor: "#F1F1F1",
      action: () => history.push(`/community`),
      color: "#1B7B89",
    },
    {
      title: "ALTERNATIVE PATHWAYS",
      text: `Have our system populate a customized day program (using
              information from your profile and a preliminary student
              assessment) for continued life skills learning and/or
              alternative forms of employment or fulfillment.`,
      backgroundColor: "#F1F1F1",
      action: () => history.push(`/alternativepathways`),
      color: "#1B7B89",
    },
  ];

  return (
    <div style={{ height: "100%" }}>
      <div style={{ position: "relative", height: "25%" }}>
        <img src={TitleBanner} style={{ width: "100%", height: "80%" }} />
        <div className="homeButton">
          <Button
            onClick={() => history.push(`/createaccount`)}
            style={{
              backgroundColor: "#1B7B89",
              width: "100%",
              height: "100%",
              fontSize: "large",
              fontWeight: "bold",
            }}
            // className="layout-btn"
          >
            GET STARTED
          </Button>
        </div>
      </div>
      <div style={{ display: "flex", margin: "3em", height: "25%" }}>
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
      <div style={{ margin: "4em" }}>
        <h3
          className="layout-header"
          style={{ textAlign: "center", color: "#000", marginBottom: "2em" }}
        >
          Explore the following sections:{" "}
        </h3>
        <div className="layout-bottom">
          <ButtonsGroup info={btnInfo} />
        </div>
      </div>
    </div>
  );
}
