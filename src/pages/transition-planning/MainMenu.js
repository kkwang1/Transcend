import React from "react";
import { useHistory, useLocation } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBriefcase,
  faHome,
  faSchool,
  faGavel,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";

export default function MainMenu() {
  let history = useHistory();
  let location = useLocation();
  const infoCol1 = [
    {
      title: "EDUCATION",
      icon: faGraduationCap,
      subitems: [
        {
          subtitle: "College/University",
          url: `${location.pathname}/education/college`,
        },
        {
          subtitle: "Transition Programs",
          url: `${location.pathname}/education/transitionalprograms`,
        },
      ],
      url: `${location.pathname}/education`,
    },
    {
      title: "INDEPENDENT LIVING",
      icon: faHome,
      subitems: [
        {
          subtitle: "Living at Home",
          url: `${location.pathname}/independentliving/livingathome`,
        },
        {
          subtitle: "Assisted Living",
          url: `${location.pathname}/independentliving/assistedliving`,
        },
        {
          subtitle: "Group Homes",
          url: `${location.pathname}/independentliving/grouphomes`,
        },
        {
          subtitle: "Residential Programs",
          url: `${location.pathname}/independentliving/residentialprograms`,
        },
      ],
      url: `${location.pathname}/independentliving`,
    },
    {
      title: "DAY PROGRAMS",
      icon: faSchool,
      url: `${location.pathname}/dayprograms`,
    },
  ];

  const infoCol2 = [
    {
      title: "EMPLOYMENT",
      icon: faBriefcase,
      subitems: [
        {
          subtitle: "Vocational Training",
          url: `${location.pathname}/employment/vocationaltraining`,
        },
        {
          subtitle: "Job Postings",
          url: `${location.pathname}/employment/jobpostings`,
        },
        {
          subtitle: "Career Aptitude",
          url: `${location.pathname}/employment/career`,
        },
      ],
      url: `${location.pathname}/employment`,
    },
    {
      title: "KNOW YOUR RIGHTS",
      icon: faGavel,
      subitems: [
        {
          subtitle: "Funding",
          url: `${location.pathname}/knowyourrights/funding`,
        },
        {
          subtitle: "Legal Rights",
          url: `${location.pathname}/knowyourrights/legalrights`,
        },
        {
          subtitle: "Get on the List",
          url: `${location.pathname}/knowyourrights/getonthelist`,
        },
      ],
      url: `${location.pathname}/knowyourrights`,
    },
  ];

  const menuItems = (info) => (
    <div>
      {info.map((s) => (
        <div className="t-main-menu">
          <FontAwesomeIcon
            icon={s.icon}
            style={{ fontSize: "40px", marginRight: "40px" }}
          />
          <div style={{ marginTop: "5px" }}>
            <a href={s.url}>
              <h5>{s.title}</h5>
            </a>
            {s.subitems &&
              s.subitems.map((t) => (
                <a href={t.url}>
                  <p>{t.subtitle}</p>
                </a>
              ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div
      className="layout-bottom"
      style={{
        width: "50%",
        margin: "auto",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      {menuItems(infoCol1)}
      {menuItems(infoCol2)}
    </div>
  );
}
