import React from "react";
import Filter from "../../components/Filter";
import SearchBar from "../../components/SearchBar";
import "../App.scss";

export default function assistedLivingLiving() {
  return (
    <>
      <h1 className="layout-header">Assisted Living</h1>
      <div>
        <SearchBar />
        <Filter />
      </div>
    </>
  );
}
