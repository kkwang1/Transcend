import React from "react";
import "../App.scss";
import ButtonsGroup from "../components/ButtonsGroup";

export default function TransitionPlanning() {
  const info = [
    {
      title: "Education",
      backgroundColor: "#F1F1F1",
      color: "#203E45",
    },
    {
      title: "Employment",
      backgroundColor: "#F1F1F1",
      color: "#203E45",
    },
    {
      title: "Independent Living",
      backgroundColor: "#F1F1F1",
      color: "#203E45",
    },
    {
      title: "Day Programs",
      backgroundColor: "#F1F1F1",
      color: "#203E45",
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
      <h3 className="layout-header" style={{ textAlign: "center" }}>
        Explore the following sections:{" "}
      </h3>
      <div className="layout-btn">
        <ButtonsGroup info={info} />
      </div>
    </div>
  );
}
