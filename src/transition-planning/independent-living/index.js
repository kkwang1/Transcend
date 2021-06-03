import React from "react";
import { useHistory, useLocation } from "react-router";
import "../../App.scss";
import ButtonsGroup from "../../components/Button/ButtonsGroup";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import QuickLinks from "../../components/QuickLink/QuickLinks";
import { quickLinks } from "./config";

export default function IndependentLiving({ match }) {
  let history = useHistory();
  let location = useLocation();

  const info = [
    {
      title: "LIVING AT HOME",
      backgroundColor: "#F1F1F1",
      color: "#1B7B89",
      action: () => history.push(`${location.pathname}/livingathome`),
    },
    {
      title: "ASSITED LIVING",
      backgroundColor: "#F1F1F1",
      color: "#1B7B89",
      action: () => history.push(`${location.pathname}/assistedliving`),
    },
    {
      title: "GROUP HOMES",
      backgroundColor: "#F1F1F1",
      color: "#1B7B89",
      action: () => history.push(`${location.pathname}/grouphomes`),
    },
    {
      title: "RESIDENTIAL PROGRAMS",
      backgroundColor: "#F1F1F1",
      color: "#1B7B89",
      action: () => history.push(`${location.pathname}/residentialprograms`),
    },
  ];
  return (
    <>
      <div className="layout-breadcrumb">
        <Breadcrumb path={match.path} />
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
        <p>
          Search for housing and assisted living options in your state using
          these databases.
        </p>
        <QuickLinks info={quickLinks} />
      </div>
    </>
  );
}
