import React from "react";
import { useHistory, useLocation } from "react-router";
import "../../App.scss";
import ButtonsGroup from "../../components/Button/ButtonsGroup";
import NavPath from "../../components/NavPath/NavPath";
import QuickLinks from "../../components/QuickLink/QuickLinks";
import { quickLinks } from "./config";

export default function IndependentLiving({ match }) {
  let history = useHistory();
  let location = useLocation();

  const info = [
    {
      title: "Living At Home",
      backgroundColor: "#F1F1F1",
      color: "#1B7B89",
      action: () => history.push(`${location.pathname}/livingathome`),
    },
    {
      title: "Assisted Living",
      backgroundColor: "#F1F1F1",
      color: "#1B7B89",
      action: () => history.push(`${location.pathname}/assistedliving`),
    },
    {
      title: "Group Homes",
      backgroundColor: "#F1F1F1",
      color: "#1B7B89",
      action: () => history.push(`${location.pathname}/grouphomes`),
    },
    {
      title: "Residential Programs",
      backgroundColor: "#F1F1F1",
      color: "#1B7B89",
      action: () => history.push(`${location.pathname}/residentialprograms`),
    },
  ];
  return (
    <>
      <div className="layout-navpath">
        <NavPath path={match.path} />
      </div>
      <h1 className="layout-header">Independent Living</h1>
      <div className="layout-content">
        <p>
          You indicated seeking out <b>assisted living</b> in your transition
          plan.
        </p>
        <p>
          <u>Here are some options we found for assisted living.</u>
        </p>
        <div className="layout-btn">
          <ButtonsGroup info={info} />
        </div>
      </div>
      <h3 className="layout-header">QUICK LINKS</h3>
      <div className="layout-content layout-bottom">
        <QuickLinks info={quickLinks} />
      </div>
    </>
  );
}
