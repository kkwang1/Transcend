import React from "react";
import "../../../../App.scss";
import SideButtons from "../../../../components/SideButton/SideButtons";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import { jobPostingInfo } from "../config";
import "./style.css";

export default function JobPosting({ match }) {

  return (
    <div>
      <div className="layout-breadcrumb">
        <Breadcrumb path={match.path} />
      </div>
      <h1 className="layout-header">Job Postings</h1>
      <div className = "layout-header-div">
        <div className = "layout-border">
          <iframe className = "inline-frame"
            id="inlineFrameExample"
            title="Inline Frame Example"
            width="100%"
            height="100%"
            src="https://www.pacareerlink.pa.gov/jponline/individual"
          ></iframe>
        </div>
        <div className = "right-sidebar">
          <div className = "right-padding" >
            <div className = "sidebar-header">
              <h4>SKILLS & TIPS</h4>
            </div>
            <div className = "buttons">
              <SideButtons info={jobPostingInfo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
