import React from "react";
import CreateAccount from ".";
import { BrowserRouter as Switch, Route } from "react-router-dom";

const route = () => {
  return (
    <div>
      <Route exact path="/createaccount" component={CreateAccount} />
    </div>
  );
};

export default route;
