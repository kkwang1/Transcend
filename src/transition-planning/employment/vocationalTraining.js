import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "../../App.scss";
import SelectGroups from "../../components/Select/SelectGroup";
import Dashboard from "../../components/Dashboard/Dashboard";
import { dashboardInfo } from "../../components/Dashboard/data";
import SideButtons from "../../components/SideButtons";

export default function VocationalTrainings() {
  const selectInfo = [
    {
      title: "All fields",
      options: ["option1", "option2", "option3"],
    },
    {
      title: "All skill levels",
      options: ["option1", "option2", "option3"],
    },
    {
      title: "All program types",
      options: ["option1", "option2", "option3"],
    },
  ];
  return (
    <>
      <h1 className="layout-header">Vocational Trainings</h1>
      <div style={{ margin: "0px 50px" }}>
        <div style={{ marginRight: "20px", float: "left", width: "60%" }}>
          <div
            style={{ color: "#000", textAlign: "center", marginBottom: "15px" }}
          >
            <h5>VOCATIONAL PROGRAM SEARCH</h5>
          </div>
          <SearchBar />
          <SelectGroups info={selectInfo} />
          <div style={{ marginTop: "15px", paddingBottom: "50px" }}>
            <Dashboard
              title={dashboardInfo[0].title}
              desc={dashboardInfo[0].desc}
              schoolsInfo={dashboardInfo[0].schoolsInfo}
              backgroundColor={dashboardInfo[0].backgroundColor}
              color={dashboardInfo[0].color}
            />
          </div>
        </div>
        <div>
          <div>
            <SideButtons
              info={[
                {
                  title: "Hello",
                  text: "refbejkbf frejflrekf jpjdeiwjdlwejmcdlkewjflnc  iljdlejwlkewjnefjn",
                },
                { title: "Hello" },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}
