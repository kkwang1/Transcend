import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Education from ".";
import Career from "./college";
import TransitionalPrograms from "./transitionalPrograms";

const route = ({ match }) => {
  console.log(match);
  return (
    <div>
      <Route exact path={match.path} component={Education} />
      <Route path={`${match.path}/college`} component={Career} />
      <Route path={`${match.path}/transitionalprograms`} component={TransitionalPrograms} />
    </div>
  );
};

export default route;
