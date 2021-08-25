import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Employment from ".";
import Career from "./career";
import JobPostings from "./jobPostings";
import VocationalTrainings from "./vocationalTraining";

const route = ({match}) => {
  return (
    <div>
      <Route
        path={`${match.path}/career`}
        component={Career}
      />
      <Route exact path={match.path} component={Employment} />
      <Route path={`${match.path}/vocationaltraining`} component={VocationalTrainings} />
      <Route path={`${match.path}/jobpostings`} component={JobPostings} />
    </div>
  );
};

export default route;
