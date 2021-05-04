import React from "react";
import Filter from "../../components/Filter";
import SearchBar from "../../components/SearchBar";
import "../App.scss";

export default function jobPostings() {
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