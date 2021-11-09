import "./App.css";
import { React, useState} from "react";
import Main from "./pages/main/index";
import TransitionPlanning from "./pages/transition-planning/routes";
import UserProfile from "./pages/user/routes";
import CreateAccount from "./pages/create-account/routes";
import AlternativePathways from "./pages/alternative-pathways";
import Community from "./pages/community";
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
      <div style={{ opacity: open && "0.5" }}>
        <NavBar openSidebar={open} setOpenSidebar={setOpen} />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route
            path={"/userprofile"}
            component={UserProfile}
          />
          <Route
            path={"/transitionalplanning"}
            component={TransitionPlanning}
          />
          <Route path={"/community"} component={Community} />
          <Route
            path={"/alternativepathways"}
            component={AlternativePathways}
          />
          <Route path={"/createaccount"} component={CreateAccount} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
