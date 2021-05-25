import React from "react";
import { useHistory, useLocation } from "react-router";
import "../App.scss";
import ButtonsGroup from "../components/Button/ButtonsGroup";
import SearchBar from "../components/SearchBar/SearchBar";
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
      {/* <Drawer title="SKILLS & TIPS">
        <p href="https://www.google.com">
          Application
          <br />
          tips & tricks
        </p>
        <p href="https://www.cmu.edu">Interview Skills</p>
        <p href="https://www.facebook.com">In the Workplace</p>
      </Drawer> */}
      {/* <h1>Transitional Planning</h1>
      {openSideBar && <Sidebar setOpenSideBar={setOpenSideBar} />}
      <SideMenu>
        <NavBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
      </SideMenu>  */}
      <h1 className="layout-main-header">Transitional Planning</h1>
      <div style={{ width: "65%", margin: "auto" }}>
        <SearchBar />
        {/*
        <SelectGroup info={selectInfo}/>
        <div style={{ margin: "15px" }}>
          <Filter />
        </div> */}
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
