import React from "react";
import DashboardGroups from "../../components/Dashboard/DashboardsGroup";
import SearchBar from "../../components/SearchAndFilter/SearchBar";
import "../../App.scss";
import { collegeDashboardInfo, selectInfo } from "./config";
import SelectGroups from "../../components/Select/SelectGroup";
import "./style.css";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

export default function College({ match }) {
  return (
    <>
      <div className="layout-breadcrumb">
        <Breadcrumb path={match.path} />
      </div>
      <h1 className="layout-header">College</h1>
      <div style={{ padding: "0px 50px" }}>
        <SearchBar />
        <SelectGroups info={selectInfo} />

        <div
          style={{
            marginTop: "15px",
            paddingBottom: "50px",
          }}
        >
          <DashboardGroups info={collegeDashboardInfo} />
        </div>
      </div>
    </>
  );
}
