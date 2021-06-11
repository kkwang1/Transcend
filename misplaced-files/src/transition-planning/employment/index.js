import React from "react";
import { useHistory, useLocation } from "react-router";
import "../../App.scss";
import ButtonsGroup from "../../components/Button/ButtonsGroup";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import QuickLinks from "../../components/QuickLink/QuickLinks";
import { quickLinks } from "./config";

export default function Employment({ match }) {
  let history = useHistory();
  let location = useLocation();

  const info = [
    {
      title: "VOCATIONAL TRAINING",
      backgroundColor: "#F1F1F1",
      color: "#1B7B89",
      action: () => history.push(`${location.pathname}/vocationaltraining`),
    },
    {
      title: "JOB POSTINGS",
      backgroundColor: "#F1F1F1",
      color: "#1B7B89",
      action: () => history.push(`${location.pathname}/jobpostings`),
    },
    {
      title: "CAREER APTITUDE",
      backgroundColor: "#F1F1F1",
      color: "#1B7B89",
      action: () => history.push(`${location.pathname}/career`),
    },
  ];
  return (
    <>
      <div className="layout-breadcrumb">
        <Breadcrumb path={match.path} />
      </div>
      <h1 className="layout-header">Employment</h1>
      <div className="layout-content">
        <p>
          You have indicated that <b>competitive employment</b> is not part of
          your transition plan.
        </p>
        <p>
          We recommend you check out the{" "}
          <a href="/transitionalplanning/education" style={{ color: "#000" }}>
            <u>education</u>
          </a>{" "}
          or{" "}
          <a
            href="/transitionalplanning/independentliving"
            style={{ color: "#000" }}
          >
            <u>independent living</u>
          </a>{" "}
          tabs!
        </p>
        <div className="layout-btn">
          <ButtonsGroup info={info} />
        </div>
      </div>
      <h3 className="layout-header">QUICK LINKS</h3>
      <div className="layout-content layout-bottom">
        <p>
          Find important employment databases and job assistance using the
          following links.
        </p>
        <QuickLinks info={quickLinks} />
      </div>
    </>
  );
}
