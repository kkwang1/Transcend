import React from "react";
import SearchBar from "../../components/SearchAndFilter/SearchBar";
import "../../App.scss";
import SelectGroups from "../../components/Select/SelectGroup";
import Dashboard from "../../components/Dashboard/Dashboard";
import { dashboardInfo } from "./config";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

export default function Funding({ match }) {
  const selectInfo = [
    {
      title: "All specialities",
      options: ["option1", "option2", "option3"],
    },
    {
      title: "All degrees",
      options: ["option1", "option2", "option3"],
    },
    {
      title: "All accomodations",
      options: ["option1", "option2", "option3"],
    },
    {
      title: "All types",
      options: ["option1", "option2", "option3"],
    },
  ];

  return (
    <div>
      <div className="layout-breadcrumb">
        <Breadcrumb path={match.path} />
      </div>
      <h1 className="layout-header">Funding</h1>
      <div className="layout-content">
        <p>
          Explore public and private funding that you may be entitles to or may
          be qualify for.
        </p>
      </div>
      <div
        style={{
          padding: "0px 50px",
          display: "flex",
          width: "100%",
        }}
      >
        <div style={{ marginRight: "35px", minWidth: "50%" }}>
          <SearchBar />
          <SelectGroups info={selectInfo} />
          <div
            style={{
              marginTop: "15px",
              paddingBottom: "50px",
            }}
          >
            <Dashboard
              schoolsInfo={dashboardInfo[0].schoolsInfo}
              backgroundColor={dashboardInfo[0].backgroundColor}
              color={dashboardInfo[0].color}
            />
          </div>
        </div>
        <div
          style={{
            minWidth: "45%",
            backgroundColor: "#F1F1F1",
            borderRadius: "10px",
            marginBottom: "50px",
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
              <h5>FUNDING INFO</h5>
            </div>
            <div style={{ height: "85%", display: "grid", backgroundColor: "#fff" }}>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
