import React from "react";
import SearchBar from "../../../../components/SearchAndFilter/SearchBar";
import "../../../../App.scss";
import SelectGroups from "../../../../components/Select/SelectGroup";
import Dashboard from "../../../../components/Dashboard/Dashboard";
import { collegeDashboardInfo } from "../../education/config";
import SideButtons from "../../../../components/SideButton/SideButtons";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import { vocationalTrainingsInfo } from "../config";
import "./style.css";

export default function VocationalTrainings({ match }) {
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
      <h1 className="layout-header">Vocational Trainings</h1>
      <div className = "scroll-bar">
        <div className = "mid-divider">
          <div className = "sub-header">
            <h4>VOCATIONAL PROGRAM SEARCH</h4>
          </div>
          <SearchBar />
          <SelectGroups info={selectInfo} />
          <div className = "searchbar-border">
            <Dashboard 
              title={"Vocational training programs  in your area"}
              schoolsInfo={collegeDashboardInfo[0].schoolsInfo}
              backgroundColor={collegeDashboardInfo[0].backgroundColor}
              color={collegeDashboardInfo[0].color}
            />
          </div>
        </div>
        <div className = "right-sidebar">
          <div className = "sidebar-top">
            <div className = "sidebar-title">
              <h4>SKILLS & TIPS</h4>
            </div>
            <div style={{ height: "85%", display: "grid" }}>
              <SideButtons info={vocationalTrainingsInfo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}