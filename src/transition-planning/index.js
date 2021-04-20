import React, { useState } from "react";
import Drawer from "../components/Drawer";
import "./style.css";

export default function TransitionPlanning() {
  return (
    <div>
      <Drawer title="SKILLS & TIPS">
        <p href="https://www.google.com">
          Application
          <br />
          tips & tricks
        </p>
        <p href="https://www.cmu.edu">Interview Skills</p>
        <p href="https://www.facebook.com">In the Workplace</p>
      </Drawer>
    </div>
  );
}
