import React from "react";
import { useHistory, useLocation } from "react-router";
import "../../App.scss";
import ButtonsGroup from "../../components/Button/ButtonsGroup";

export default function DayPrograms() {
  let history = useHistory();
  let location = useLocation();
  const info = [
    {
      title: "Living at Home",
      backgroundColor: "#F1F1F1",
      color: "#1B7B89",
      action: () => history.push(`${location.pathname}/livingathome`)
    },
    {
      title: "Assisted Living",
      backgroundColor: "#F1F1F1",
      color: "#1B7B89",
      action: () => history.push(`${location.pathname}/assitedliving`)
    },
    {
      title: "Group Homes",
      backgroundColor: "#F1F1F1",
      color: "#1B7B89",
      action: () => history.push(`${location.pathname}/grouphomes`)
    },
    {
      title: "Residential Programs",
      backgroundColor: "#F1F1F1",
      color: "#1B7B89",
      action: () => history.push(`${location.pathname}/residentialprograms`)
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
