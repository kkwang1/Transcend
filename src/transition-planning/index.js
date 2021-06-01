import React from "react";
import { useHistory, useLocation } from "react-router";
import "../App.scss";
import ButtonsGroup from "../components/Button/ButtonsGroup";
import SearchFilter from "../components/SearchAndFilter/SearchFilter";
// import SelectGroup from "../components/Select/SelectGroup";

/* example usage of graphql:

async function loadGreeting() {
  const response = await fetch('http://localhost:9000/graphql', {
    method: 'POST',
    headers: { 'content-type':'application/json'},
    body: JSON.stringify(query: '{ greeting }') // we have an item "greeting"
  })
  const responseBody = await response.json();
  return responseBody.data.greeting;
}

state = "";
showGreeting() {
  loadGreeting().then(text => state = text)
}

*/
export default function TransitionPlanning({match}) {
  let history = useHistory();
  let location = useLocation();

  const btnInfo = [
    {
      title: "EDUCATION",
      backgroundColor: "#F1F1F1",
      color: "#203E45",
      action: () => history.push(`${location.pathname}/education`),
    },
    {
      title: "EMPLOYMENT",
      backgroundColor: "#F1F1F1",
      color: "#203E45",
      action: () => history.push(`${location.pathname}/employment`),
    },
    {
      title: "INDEPENDENT LIVING",
      backgroundColor: "#F1F1F1",
      color: "#203E45",
      action: () => history.push(`${location.pathname}/independentliving`),
    },
    {
      title: "DAY PROGRAMS",
      backgroundColor: "#F1F1F1",
      color: "#203E45",
      action: () => history.push(`${location.pathname}/dayprograms`),
    },
  ];

  const selectInfo = [
    {
      title: "Filter",
      options: ["option1", "option2", "option3"]

    },
    {
      title: "Filter",
      options: ["option1", "option2", "option3"]

    },
    {
      title: "Filter",
      options: ["option1", "option2", "option3"]

    }
  ]

  return (
    <div>
      <h1 className="layout-main-header">Transitional Planning</h1>
      <div style={{ width: "65%", margin: "auto" }}>
        <SearchFilter />
      </div>
      <h3 className="layout-header" style={{ textAlign: "center" }}>
        Explore the following sections:{" "}
      </h3>
      <div className="layout-btn layout-bottom" style={{ margin: "1rem 5rem"}}>
        <ButtonsGroup info={btnInfo} />
      </div>
    </div>
  );
}
