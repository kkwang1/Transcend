import React from "react";
import Filter from "../../components/Filter";
import SearchBar from "../../components/SearchBar";
import "../App.scss";

export default function vocationalTrainings() {
  return (
    <>
      <h1 className="layout-header">Vocational Trainings</h1>
      <div>
        <SearchBar />
        <Filter />
      </div>
    </>
  );
}
