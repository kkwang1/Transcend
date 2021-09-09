import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./UserProfile";

const route = () => {
  return (
    <div>
      <Route
        exact
        path="/userprofile"
        component={UserProfile}
      />
    </div>
  );
};

export default route;

