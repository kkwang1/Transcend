import React from "react";
import Filter from "../../components/Filter";
import SearchBar from "../../components/SearchBar/SearchBar";
import "../../App.scss";
import NavPath from "../../components/NavPath/NavPath";

export default function Career({ match }) {
  return (
    <>
      <div className="layout-navpath">
        <NavPath path={match.path} />
      </div>
      <h1 className="layout-header">Career</h1>
    </>
  );
}
