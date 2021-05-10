import React, { useState } from "react";
import TitleBanner from "../images/title_banner.jpg";
import { Button } from "react-bootstrap";
import "./style.css";
import { btnInfo } from "./config";
import ButtonsGroup from "../components/Button/ButtonsGroup";
import "../App.scss";

export default function Main() {
  return (
    <>
      <div style={{ position: "relative" }}>
        <img src={TitleBanner} style={{ width: "100%" }} />
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
        <h3 className="layout-header" style={{ textAlign: "center", color: "#000" }}>
          Explore the following sections:{" "}
        </h3>
        <ButtonsGroup info={btnInfo} />
      </div>
    </>
  );
}
