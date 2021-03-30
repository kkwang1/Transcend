import "./App.css";
import Main from "./main/index";
import TransitionPlanning from "./transition-planning";
import AlternativePathways from "./alternative-pathways";
import Community from "./community";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="transitionplanning"
            exact
            component={TransitionPlanning}
          />
          <Route exact path="/" component={Main} />
          <Route path="community" exact component={Community} />
          <Route path="alternativepathways" exact component={AlternativePathways} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
