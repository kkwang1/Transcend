import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import KnowYourRights from ".";
import Funding from "./funding";
import LegalRights from "./legalRights";
import GetOnTheList from "./getOnTheList";
import AllRights from "./allRights";

const route = ({ match }) => {
  return (
    <div>
      <Route exact path={match.path} component={KnowYourRights} />
      <Route path={`${match.path}/funding`} component={Funding} />
      <Route exact path={`${match.path}/legalrights`} component={LegalRights} />
      <Route path={`${match.path}/legalrights/all`} component={AllRights} />
      <Route path={`${match.path}/getonthelist`} component={GetOnTheList} />
    </div>
  );
};

export default route;
