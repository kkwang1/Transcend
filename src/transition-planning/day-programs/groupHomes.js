import React from "react";
import DashboardGroups from "../../components/Dashboard/DashboardsGroup";
import Filter from "../../components/Filter";
import SearchBar from "../../components/SearchBar";
import "../App.scss";

export default function groupHomes() {
  return (
    <>
      <h1 className="layout-header">Group Homes</h1>
      <div>
        <SearchBar />
        <Filter />
        <DashboardGroups />
      </div>
    </>
  );
}