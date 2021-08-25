import React from "react";
import { useHistory, useLocation } from "react-router";
import "../../../App.scss";
import ButtonsGroup from "../../../components/Button/ButtonsGroup";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import QuickLinks from "../../../components/QuickLink/QuickLinks";
import { quickLinks } from "./config";

export default function KnowYourRights({ match }) {
  let history = useHistory();
  let location = useLocation();

  const info = [
    {
      title: "FUNDING",
      backgroundColor: "#F1F1F1",
      color: "#1B7B89",
      action: () => history.push(`${location.pathname}/funding`),
    },
    {
      title: "LEGAL RIGHTS",
      backgroundColor: "#F1F1F1",
      color: "#1B7B89",
      action: () => history.push(`${location.pathname}/legalrights`),
    },
    {
      title: "GET ON THE LIST",
      backgroundColor: "#F1F1F1",
      color: "#1B7B89",
      action: () => history.push(`${location.pathname}/getonthelist`),
    },
  ];

  return (
    <>
      <div className="layout-breadcrumb">
        <Breadcrumb path={match.path} />
      </div>
      <h1 className="layout-header">Know Your Rights</h1>
      <div className="layout-content">
        <p>
          Knowing you rights is a critical part of building self-advocacy
          skills. Explore the funding policies that apply to you.
        </p>
        <div className="layout-btn">
          <ButtonsGroup info={info} />
        </div>
      </div>
      <h3 className="layout-header">QUICK LINKS</h3>
      <div className="layout-content layout-bottom">
        <p>Explore the above information by office sites. </p>
        <QuickLinks info={quickLinks} />
      </div>
    </>
  );
}
