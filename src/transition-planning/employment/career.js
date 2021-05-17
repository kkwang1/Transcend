import React from "react";
import Filter from "../../components/Filter";
import SearchBar from "../../components/SearchBar/SearchBar";
import "../../App.scss";

export default function Career() {
  return (
    <>
      <h1 className="layout-header">Job Postings</h1>
      <div>
        <SearchBar />
        <Filter />
      </div>
    </>
  );
}