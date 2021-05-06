import React from "react";
import "../App.scss";

export default function DayPrograms() {
  const info = [
    {
      title: "Living at Home",
      backgroundColor: "#F1F1F1",
      color: "#1B7B89",
    },
    {
      title: "Assisted Living",
      backgroundColor: "#F1F1F1",
      color: "#1B7B89",
    },
    {
      title: "Group Homes",
      backgroundColor: "#F1F1F1",
      color: "#1B7B89",
    },
    {
      title: "Residential Programs",
      backgroundColor: "#F1F1F1",
      color: "#1B7B89",
    }
  ];
  return (
    <>
      <h1 className="layout-header">Day Programs</h1>
      <p>
        You indicated seeking out assisted living in your transition plan. 
        Here are some options we found for assisted living.
      </p>
      <div className="layout-btn">
        <ButtonsGroup info={info} />
      </div>
    </>
  );
}
