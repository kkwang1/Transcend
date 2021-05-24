import React from "react";
import "../../App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  useLocation,
} from "react-router-dom";
import ButtonsGroup from "../../components/Button/ButtonsGroup";
import NavPath from "../../components/NavPath/NavPath";

export default function Education({ match }) {
  let history = useHistory();
  let location = useLocation();

  const info = [
    {
      title: "COLLEGE / UNIVERSITY",
      text: `Traditional higher education resources, ranging from vocational and trade school 
      to community college to four year universities with accomodations for individuals 
      with disabilities.`,
      backgroundColor: "#F1F1F1",
      color: "#1B7B89",
      action: () => history.push(`${location.pathname}/college`),
    },
    {
      title: "TRANSITIONAL PROGRAMS",
      text: `Short term educational programs geared towards developing and expanding 
      upon life skills for young adults transitioning out of secondary education.`,
      backgroundColor: "#F1F1F1",
      color: "#1B7B89",
      action: () => history.push(`${location.pathname}/transitionalprograms`),
    },
  ];
  return (
    <>
      <div className="layout-navpath">
        <NavPath path={match.path} />
      </div>
      <h1 className="layout-header">Education</h1>
      <div className="layout-content">
        <p>
          You indicated <b>community college</b> in your transition plan under
          postsecondary education.
        </p>
        <p>
          <a href=""> See community colleges we think could fit your needs </a>
          or explore all education options below.
        </p>
        <div
          className="layout-btn"
          style={{ padding: "0px 180px", minHeight: "250px" }}
        >
          <ButtonsGroup info={info} />
        </div>
      </div>
    </>
  );
}
