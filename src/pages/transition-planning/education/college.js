import React from "react";
import WebSearchFilter from "../../../components/SearchAndFilter/WebSearchFilter";
import "../../../App.scss";
import "./style.css";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";

export default function College({ match }) {
  return (
    <>
      <div className="layout-breadcrumb">
        <Breadcrumb path={match.path} />
      </div>
      <h1 className="layout-header">College</h1>
      <div style={{ padding: "0px 50px" }}>
        <WebSearchFilter />
      </div>
    </>
  );
}
