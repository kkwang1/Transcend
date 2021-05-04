import React from "react";
import Filter from "../../components/Filter";
import SearchBar from "../../components/SearchBar";
import "../App.scss";

export default function residentialPrograms() {
  return (
    <>
      <h1 className="layout-header">Residential Programs</h1>
      <div>
        <SearchBar />
        <Filter />
      </div>
    </>
  );
}