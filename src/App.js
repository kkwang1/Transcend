import "./App.css";
import { React, useState } from "react";
import Main from "./main/index";
import TransitionPlanning from "./transition-planning/route";
import AlternativePathways from "./alternative-pathways";
import Community from "./community";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import NavBar from "./components/NavBar";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <Router>
      <div style={{ direction: "rtl" }}>
        {open && <Sidebar setOpenSidebar={setOpen} />}
      </div>
      <div style={{opacity: open && "0.5"}}>
        <NavBar openSidebar={open} setOpenSidebar={setOpen} />
        <Switch>
          <Route exact path="/" component={Main} />
          <TransitionPlanning />
          <Route path="/community" exact component={Community} />
          <Route
            path="/alternativepathways"
            exact
            component={AlternativePathways}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
