import { React } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from "react-pro-sidebar";
import "./style.css";
import Logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../../App.scss";

export default function Sidebar({ setOpenSidebar }) {
  return (
    <div className="sideBar">
      <ProSidebar>
        <div>
          <img src={Logo} width="50%"></img>
          <div style={{ float: "right", padding: "10px" }}>
            <FontAwesomeIcon
              icon={faTimes}
              style={{ fontSize: "1.5em", verticalAlign: "middle" }}
              color="#DEDEDE"
              onClick={() => setOpenSidebar(false)}
            />
          </div>
        </div>
        <SidebarContent>
          <Menu>
            <div className="header">SERVICES</div>
            <SubMenu title="Transition Planning">
              <MenuItem path="/education">
                Education
                <Link to="/transitionalplanning/education" onClick={() => setOpenSidebar(false)}/>
              </MenuItem>
              <MenuItem>
                Employment
                <Link to="/transitionalplanning/employment" onClick={() => setOpenSidebar(false)}/>
              </MenuItem>
              <MenuItem>
                Independent living
                <Link to="/transitionalplanning/independentliving" onClick={() => setOpenSidebar(false)}/>
              </MenuItem>
              <MenuItem>
                Day Programs
                <Link to="/transitionalplanning/dayprograms" onClick={() => setOpenSidebar(false)}/>
              </MenuItem>
              <MenuItem>
                Know your rights
                <Link to="/transitionalplanning/rights" onClick={() => setOpenSidebar(false)}/>
              </MenuItem>
            </SubMenu>
            <SubMenu title={"Community"}>
              <MenuItem>
                Virtual communities
                <Link to="/community/virtual" onClick={() => setOpenSidebar(false)}/>
              </MenuItem>
              <MenuItem>
                Your community
                <Link to="/community/yourcommunity" onClick={() => setOpenSidebar(false)}/>
              </MenuItem>
              <MenuItem>
                Mentorship
                <Link to="/community/mentorship" onClick={() => setOpenSidebar(false)}/>
              </MenuItem>
              <MenuItem>
                Start your own community
                <Link to="/community/startyourown" onClick={() => setOpenSidebar(false)}/>
              </MenuItem>
            </SubMenu>
            <MenuItem>
              Day Program
              <Link to="/dayprogram" onClick={() => setOpenSidebar(false)}/>
            </MenuItem>
          </Menu>
          <div className="header">PROFILE</div>
          <Menu>
            <MenuItem>
              Edit account
              <Link to="/profile/view" onClick={() => setOpenSidebar(false)}/>
            </MenuItem>
            <MenuItem>
              Saved items
              <Link to="/profile/saved" onClick={() => setOpenSidebar(false)}/>
            </MenuItem>
            <MenuItem>
              Search history
              <Link to="/profile/reccomendations" onClick={() => setOpenSidebar(false)}/>
            </MenuItem>
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </div>
  );
}
