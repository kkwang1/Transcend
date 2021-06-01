import React from "react";
import DashboardGroups from "../../components/Dashboard/DashboardsGroup";
import SearchBar from "../../components/SearchAndFilter/SearchBar";
import "../../App.scss";
import { dashboardInfo, selectInfo } from "./config";
import SelectGroups from "../../components/Select/SelectGroup";
import NavPath from "../../components/NavPath/NavPath";

export default function GroupHomes({ match }) {
  return (
    <>
      <div className="layout-navpath">
        <NavPath path={match.path} />
      </div>
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
