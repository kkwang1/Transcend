import React from "react";
import TransitionPlanning from ".";
import IndependentLivingRoutes from "./independent-living/routes";
import DayPrograms from "./day-programs";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import EducationRoutes from "./education/routes";
import EmploymentRoutes from "./employment/routes";

const route = () => {
  return (
    <div>
      <Route
        exact
        path="/transitionalplanning"
        component={TransitionPlanning}
      />
      <Route
        path="/transitionalplanning/employment"
        component={EmploymentRoutes}
      />
      <Route
        path="/transitionalplanning/education"
        component={EducationRoutes}
      />
      <Route
        path="/transitionalplanning/independentliving"
        component={IndependentLivingRoutes}
      />
      <Route path="/transitionalplanning/dayprograms" component={DayPrograms} />
    </div>
  );
};

export default route;
