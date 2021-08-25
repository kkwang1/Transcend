import React from "react";
import "../../../App.scss";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import CollapseGroup from "../../../components/Collapse/CollapseGroup";
import { collapseInfo } from "./config";

export default function LegalRights({ match }) {
  return (
    <div>
      <div className="layout-breadcrumb">
        <Breadcrumb path={match.path} />
      </div>
      <h1 className="layout-header">Legal Rights</h1>
      <div className="layout-content layout-bottom">
        <p>
          Become familiar with legal policies and acts put in place for the
          protection of individuals with disabilities. Knowing these benefits
          can help to keep you on the same page with guardians, education, and
          employers.
        </p>
        <CollapseGroup info={collapseInfo} border={false}/>
        <p style={{ color: "#000", float: "right", fontWeight: "bold" }}>
          Or see{" "}
          <a href={`${match.path}/all`} style={{color: "#000"}}>
            <u>all legal rights</u>
          </a>{" "}
          for individuals with disabilities
        </p>
      </div>
    </div>
  );
}
