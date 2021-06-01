import React from "react";
import SearchBar from "../../components/SearchAndFilter/SearchBar";
import "../../App.scss";
import SelectGroups from "../../components/Select/SelectGroup";
import Dashboard from "../../components/Dashboard/Dashboard";
import { dashboardInfo } from "./config";
import SideButtons from "../../components/SideButton/SideButtons";
import NavPath from "../../components/NavPath/NavPath";

export default function ResidentialPrograms({ match }) {
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
      <div className="layout-navpath">
        <NavPath path={match.path} />
      </div>
      <h1 className="layout-header">Residential Programs</h1>
      <div
        style={{
          padding: "0px 50px",
          display: "flex",
          width: "100%",
        }}
      >
        <div style={{ marginRight: "35px", minWidth: "65%" }}>
          <SearchBar />
          <SelectGroups info={selectInfo} />
          <div
            style={{
              marginTop: "15px",
              paddingBottom: "50px",
            }}
          >
            <Dashboard
              title="Residential programs and facilities in your area"
              schoolsInfo={dashboardInfo[0].schoolsInfo}
              backgroundColor={dashboardInfo[0].backgroundColor}
              color={dashboardInfo[0].color}
            />
          </div>
        </div>
        <div
          style={{
            minWidth: "25%",
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
              <h5>PERMANENT RESIDENCE & INTEGRATED COMMUNITIES</h5>
            </div>
            <div style={{ height: "85%", display: "grid" }}>
              <SideButtons
                info={[
                  { title: "Embedded Link#1" },
                  { title: "Embedded Link#2" },
                  { title: "Embedded Link#3" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
