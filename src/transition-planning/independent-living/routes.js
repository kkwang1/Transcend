import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import IndependentLiving from ".";
import AssistedLiving from "./assistedLiving";
import GroupHomes from "./groupHomes";
import LivingAtHome from "./livingAtHome";
import ResidentialPrograms from "./residentialPrograms";

const route = ({ match }) => {
  return (
    <div>
      <Route exact path={match.path} component={IndependentLiving} />
      <Route path={`${match.path}/assistedliving`} component={AssistedLiving} />
      <Route path={`${match.path}/grouphomes`} component={GroupHomes} />
      <Route path={`${match.path}/livingathome`} component={LivingAtHome} />
      <Route path={`${match.path}/residentialprograms`} component={ResidentialPrograms} />
    </div>
  );
};

export default route;
