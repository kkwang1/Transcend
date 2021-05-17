import React from "react";
import { useHistory, useLocation } from "react-router";
import "../../App.scss";
import ButtonsGroup from "../../components/Button/ButtonsGroup";

export default function Employment() {
  let history = useHistory();
  let location = useLocation();

  const info = [
    {
      title: "Vocational Training",
      backgroundColor: "#F1F1F1",
      color: "#1B7B89",
      action: () => history.push(`${location.pathname}/vocationaltraining`),
    },
    {
      title: "Job Postings",
      backgroundColor: "#F1F1F1",
      color: "#1B7B89",
      action: () => history.push(`${location.pathname}/jobpostings`),
    },
    {
      title: "Career Aptitude",
      backgroundColor: "#F1F1F1",
      color: "#1B7B89",
      action: () => history.push(`${location.pathname}/career`),
    },
  ];
  return (
    <>
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
          tabs to find postsecondary programs, or{" "}
          <a href="/transitionalplanning/dayprograms" style={{ color: "#000" }}>
            <u>create your own day program</u>
          </a>{" "}
          for living at home.
        </p>
        <div className="layout-btn">
          <ButtonsGroup info={info} />
        </div>
      </div>
    </>
  );
}
