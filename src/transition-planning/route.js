import React from "react";
import TransitionPlanning from ".";
import Education from "./education";
import Employment from "./employment";
import IndependentLiving from "./independent-living";
import DayPrograms from "./day-programs";
import { BrowserRouter as Switch, Route } from "react-router-dom";

const route = () => {
  return (
    <Switch>
      <Route
        exact
        path="/transitionalplanning"
        component={TransitionPlanning}
      />
      <Route path="/transitionalplanning/education" component={Education} />
      <Route path="/transitionalplanning/employment" component={Employment} />
      <Route
        path="/transitionalplanning/independentliving"
        component={IndependentLiving}
      />
      <Route path="/transitionalplanning/dayprograms" component={DayPrograms} />
    </Switch>
  );
};

export default route;
