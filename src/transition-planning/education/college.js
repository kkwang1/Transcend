import React from "react";
import DashboardGroups from "../../components/Dashboard/DashboardsGroup";
import SearchBar from "../../components/SearchBar/SearchBar";
import "../../App.scss";
import { dashboardInfo, selectInfo } from "./config";
import SelectGroups from "../../components/Select/SelectGroup";
import "./style.css";

export default function College() {
  return (
    <>
      <h1 className="layout-header">College</h1>
      <div style={{ padding: "0px 50px" }}>
        <SearchBar />
        <div className="select-btn">
          <SelectGroups info={selectInfo} />
        </div>
        
        <div
          style={{
            marginTop: "15px",
            paddingBottom: "50px",
          }}
        >
          <DashboardGroups info={dashboardInfo} />
        </div>
      </div>
    </>
  );
}
