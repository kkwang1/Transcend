import React from "react";
import SearchBar from "../../../components/SearchAndFilter/SearchBar";
import "../../../App.scss";
import SelectGroups from "../../../components/Select/SelectGroup";
import Dashboard from "../../../components/Dashboard/Dashboard";
import { collegeDashboardInfo } from "../education/config";
import SideButtons from "../../../components/SideButton/SideButtons";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";

export default function JobPosting({ match }) {
  const selectInfo = [
    {
      title: "All fields",
      options: ["option1", "option2", "option3"],
    },
    {
      title: "All skill levels",
      options: ["option1", "option2", "option3"],
    },
    {
      title: "All program types",
      options: ["option1", "option2", "option3"],
    },
  ];
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
              <SideButtons
                info={[
                  {
                    title: "Most Inclusive Workspaces",
                    text: "We’ve compiled this list of top-ranked, neuro-diverse, and inclusive workplaces in your area.",
                  },
                  {
                    title: "Thorough training included",
                    text: "The following businesses offer through training for their first-time employees, so no prior experience is needed.",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
