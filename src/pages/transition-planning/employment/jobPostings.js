import React from "react";
import "../../../App.scss";
import SideButtons from "../../../components/SideButton/SideButtons";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import { jobPostingInfo } from "./config";

export default function JobPosting({ match }) {

  return (
    <div>
      <div className="layout-breadcrumb">
        <Breadcrumb path={match.path} />
      </div>
      <h1 className="layout-header">Job Postings</h1>
      <div
        style={{
          padding: "0px 50px",
          display: "flex",
          width: "100%",
          height: "700px",
        }}
      >
        <div
          style={{
            marginRight: "35px",
            minWidth: "65%",
            backgroundColor: "#F1F1F1",
            borderRadius: "20px",
            padding: "15px",
          }}
        >
          <iframe
            id="inlineFrameExample"
            title="Inline Frame Example"
            width="100%"
            height="100%"
            src="https://www.pacareerlink.pa.gov/jponline/individual"
          ></iframe>
        </div>
        <div
          style={{
            minWidth: "25%",
            backgroundColor: "#F1F1F1",
            borderRadius: "10px",
            marginBottom: "50px",
            height: "100%",
          }}
        >
          <div style={{ margin: "15px 30px", height: "100%" }}>
            <div
              style={{
                color: "#000",
                textAlign: "center",
                marginBottom: "15px",
              }}
            >
              <h4>SKILLS & TIPS</h4>
            </div>
            <div style={{ height: "85%", display: "grid" }}>
              <SideButtons info={jobPostingInfo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
