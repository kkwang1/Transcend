import React from "react";
import "../../App.scss";
import { BrowserRouter as Router, Switch, Route, useHistory, useLocation } from "react-router-dom";
import ButtonsGroup from "../../components/Button/ButtonsGroup";

export default function Education() {
  let history = useHistory();
  let location = useLocation();
  const info = [
    {
      title: "College/University",
      text: `Traditional higher education resources, ranging from vocational and 
      trade school to community college to four year universities.`,
      backgroundColor: "#F1F1F1",
      color: "#1B7B89",
      action: () => history.push(`${location.pathname}/college`)
    },
    {
      title: "Transitional Programs",
      text: `Short term educational programs geared towards developing and expanding 
      upon life skills for young adults transitioning out of secondary education.`,
      backgroundColor: "#F1F1F1",
      color: "#1B7B89",
      action: () => history.push(`${location.pathname}/programs`)
    },
  ];
  return (
    <>
      <h1 className="layout-header">Education</h1>
      <p>
        You indicated community college in your transition plan under
        postsecondary education.
        <a href=""> See community colleges we think could fit your needs </a>
        or explore all education options below.
      </p>
      <div className="layout-btn">
        <ButtonsGroup info={info} />
      </div>
    </>
  );
}
