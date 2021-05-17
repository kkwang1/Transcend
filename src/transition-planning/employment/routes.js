import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Employment from ".";
import Career from "./career";
import JobPostings from "./jobPostings";
import VocationalTrainings from "./vocationalTraining";

const route = () => {
  return (
    <>
      <Route
        path="/transitionalplanning/employment/career"
        component={Career}
      />
      <Route exact path="/transitionalplanning/employment" component={Employment} />
      <Route path="/transitionalplanning/employment/vocationaltraining" component={VocationalTrainings} />
      <Route path="/transitionalplanning/employment/jobpostings" component={JobPostings} />
    </>
  );
};

export default route;
