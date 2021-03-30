import React from "react";
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

export default function Sidebar({ setOpenSideBar }) {
  return (
    <ProSidebar>
      <div>
        <img src={Logo} width="50%"></img>
        <div style={{ float: "right", padding: "10px" }}>
          <FontAwesomeIcon
            icon={faTimes}
            style={{ fontSize: "1.5em", verticalAlign: "middle" }}
            color="#DEDEDE"
            onClick={() => setOpenSideBar(false)}
          />
        </div>
      </div>
      <SidebarContent>
        <Menu iconShape="circle">
          <div className="header">Services</div>
          <SubMenu title="Transitional Planning">
            <MenuItem path="/education">
              Education
              <Link to="/transitionalplanning/education" />
            </MenuItem>
            <MenuItem>
              Employment
              <Link to="/transitionalplanning/employment" />
            </MenuItem>
            <MenuItem>
              Independent living
              <Link to="/transitionalplanning/independentliving" />
            </MenuItem>
            <MenuItem>
              Integrated communities
              <Link to="/transitionalplanning/integratedcommunities" />
            </MenuItem>
            <MenuItem>
              Know your rights
              <Link to="/transitionalplanning/rights" />v
            </MenuItem>
          </SubMenu>
          <SubMenu title={"Community"}>
            <MenuItem>
              Virtual communities
              <Link to="/community/virtual" />
            </MenuItem>
            <MenuItem>
              Your community
              <Link to="/community/yourcommunity" />
            </MenuItem>
            <MenuItem>
              Mentorship
              <Link to="/community/mentorship" />
            </MenuItem>
            <MenuItem>
              Start your own community
              <Link to="/community/startyourown" />
            </MenuItem>
          </SubMenu>
          <MenuItem>
            Day Program
            <Link to="/dayprogram" />
          </MenuItem>
        </Menu>
        <div className="header">Profile</div>
        <Menu>
          <MenuItem>
            View profile
            <Link to="/profile/view" />
          </MenuItem>
          <MenuItem>
            Saved items
            <Link to="/profile/saved" />
          </MenuItem>
          <MenuItem>
            Reccomendations
            <Link to="/profile/reccomendations" />
          </MenuItem>
        </Menu>
      </SidebarContent>
    </ProSidebar>
  );
}
