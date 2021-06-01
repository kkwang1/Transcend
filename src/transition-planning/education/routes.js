import React from "react";
import { Switch, Route } from "react-router-dom";
import Education from ".";
import College from "./college";
import TransitionalPrograms from "./transitionalPrograms";

const route = ({ match }) => {
  return (
    <div>
      <Route exact path={match.path} component={Education} />
      <Route path={`${match.path}/college`} component={College} />
      <Route
        path={`${match.path}/transitionalprograms`}
        component={TransitionalPrograms}
      />
    </div>
  );
};

export default route;
