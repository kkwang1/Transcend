import React from "react";
import "../../../App.scss";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import CollapseGroup from "../../../components/Collapse/CollapseGroup";
import { collapseList } from "./config";

export default function GetOnTheList({ match }) {
  return (
    <div>
      <div className="layout-breadcrumb">
        <Breadcrumb path={match.path} />
      </div>
      <h1 className="layout-header">Get on the List</h1>
      <div className="layout-content layout-bottom">
        <p>
          Public and private programs and funds can have extremeley long
          waitlists (even those you are entitles to). Follow this checklist to
          ensure you’re on all of the lists that apply to you!
        </p>
        <CollapseGroup info={collapseList}/>
      </div>
    </div>
  );
}
