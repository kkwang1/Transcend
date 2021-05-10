import React from "react";
import { useHistory, useLocation } from "react-router";
import "../App.scss";
import ButtonsGroup from "../components/Button/ButtonsGroup";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar/SearchBar";
import SelectGroups from "../components/Select/SelectGroup";

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
export default function TransitionPlanning() {
  let history = useHistory();
  let location = useLocation();
  const info = [
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
      action: () => history.push(`${location.pathname}/independent-living`),
    },
    {
      title: "DAY PROGRAMS",
      backgroundColor: "#F1F1F1",
      color: "#203E45",
      action: () => history.push(`${location.pathname}/day-programs`),
    },
  ];

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
      <h1 className="layout-header">Transitional Planning</h1>
      <div style={{ width: "65%", margin: "auto" }}>
        <SearchBar />
        {/* <div style={{ margin: "15px" }}>
          <Filter />
        </div> */}
      </div>
      <h3 className="layout-header" style={{ textAlign: "center" }}>
        Explore the following sections:{" "}
      </h3>
      <div className="layout-btn" style={{ margin: "1rem 5rem" }}>
        <ButtonsGroup info={info} />
      </div>
    </div>
  );
}
