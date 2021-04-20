import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from "react-pro-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faAngleDoubleLeft,
  faGraduationCap,
  faBriefcase,
  faHome,
  faSchool,
  faGavel,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";

export default function SideMenu({ children }) {
  const [open, setOpen] = useState(false);
  return open ? (
    <div className="sidebar-main">
      <ProSidebar collapsed={!open} collapsedWidth="0px">
        <div style={{ textAlign: "right", padding: "10px" }}>
          <FontAwesomeIcon
            className="sidemenu-icon"
            icon={faAngleDoubleLeft}
            color="#000"
            onClick={() => setOpen(false)}
          />
        </div>
        <SidebarContent>
          <Menu>
            <SubMenu
              title="Eduction"
              icon={<FontAwesomeIcon icon={faGraduationCap} />}
            >
              <MenuItem>College/University</MenuItem>
              <MenuItem>Transitional Programs</MenuItem>
            </SubMenu>
            <SubMenu
              title="Employment"
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <MenuItem>Vocatinal Training</MenuItem>
              <MenuItem>Job Postings</MenuItem>
              <MenuItem>Career Aptitude</MenuItem>
            </SubMenu>
            <SubMenu
              title="Independent Living"
              icon={<FontAwesomeIcon icon={faHome} />}
            >
              <MenuItem>Living at Home</MenuItem>
              <MenuItem>Assisted Living</MenuItem>
              <MenuItem>Group Homes</MenuItem>
              <MenuItem>Residential Programs</MenuItem>
            </SubMenu>
            <MenuItem icon={<FontAwesomeIcon icon={faSchool} />}>
              Day Programs
            </MenuItem>
            <SubMenu
              title="Know Your Rights"
              icon={<FontAwesomeIcon icon={faGavel} />}
            >
              <MenuItem>Funding</MenuItem>
              <MenuItem>Legal Rights</MenuItem>
              <MenuItem>Get on the List</MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>
      </ProSidebar>
      <div style={{ marginLeft: open && "270px" }}>{children}</div>
    </div>
  ) : (
    <div className="sidemenu-icon-container1">
      <div className="sidemenu-icon-container2">
        <FontAwesomeIcon
          className="sidemenu-icon"
          icon={faAngleDoubleRight}
          color="#DEDEDE"
          onClick={() => setOpen(true)}
        />
      </div>
      {children}
    </div>
  );
}
