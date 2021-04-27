import "./App.css";
import Main from "./main/index";
import TransitionPlanning from "./transition-planning";
import AlternativePathways from "./alternative-pathways";
import Community from "./community";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/SideMenu/SideMenu";

function App() {
  return (
      <Router>
        <Switch>
          <Menu>
            <Route
              path="/transitionalplanning"
              component={TransitionPlanning}
            />
            <Route exact path="/" component={Main} />
            <Route path="/community" exact component={Community} />
            <Route
              path="/alternativepathways"
              exact
              component={AlternativePathways}
            />
          </Menu>
        </Switch>
      </Router>
  );
}

export default App;
