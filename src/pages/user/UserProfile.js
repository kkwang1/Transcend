import React, { useContext } from "react";
import Avatar from "../../images/avatar.png";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import SideButtons from "../../components/SideButton/SideButtons";
import { StoreContext } from "../../utils/store";
import "./style.css";

export default function UserProfile() {
  const SearchHistoryInfo = [
    {
      title: "KNOW YOUR RIGHTS",
      text: (
        <Breadcrumb path="transitionplanning/knowyourrights" disable={true} />
      ),
      action: () => {
        return;
      },
    },
    {
      title: "JOB POSTINGS",
      text: (
        <Breadcrumb
          path="transitionplanning/employment/jobpostings"
          disable={true}
        />
      ),
      action: () =>
        window.open(
          "https://www.pathwaysofpa.com/5-great-companies-that-employ-adults-with-special-needs/",
          "_blank"
        ),
    },
    {
      title: "COLLEGE",
      text: (
        <Breadcrumb
          path="transitionplanning/education/college"
          disable={true}
        />
      ),
      action: () =>
        window.open(
          "https://www.pathwaysofpa.com/5-great-companies-that-employ-adults-with-special-needs/",
          "_blank"
        ),
    },
    {
      title: "EDUCATION",
      text: <Breadcrumb path="transitionplanning/education" disable={true} />,
      action: () =>
        window.open(
          "https://www.pathwaysofpa.com/5-great-companies-that-employ-adults-with-special-needs/",
          "_blank"
        ),
    },
  ];

  const resourceInfo1 = [
    {
      title: "SAVED JOB LIST",

      text: (
        <Breadcrumb
          path="transitionplanning/employment/jobpostings"
          disable={true}
        />
      ),
      action: () =>
        window.open(
          "https://www.pathwaysofpa.com/5-great-companies-that-employ-adults-with-special-needs/",
          "_blank"
        ),
    },
  ];

  const tempJobList = [
    { name: "Job 1", location: "location 1", href: "" },
    { name: "Job 2", location: "location 2", href: "" },
    { name: "Job 3", location: "location 3", href: "" },
  ];

  const tempCollegeList = [
    { name: "College 1", location: "location 1", href: "" },
    { name: "College 2", location: "location 2", href: "" },
    { name: "College 3", location: "location 3", href: "" },
  ];

  const { savedJobs, savedColleges } = useContext(StoreContext);

  const resourceInfo2 = [
    {
      title: "SAVED COLLEGE LIST",
      text: (
        <Breadcrumb
          path="transitionplanning/education/college"
          disable={true}
        />
      ),
      action: () =>
        window.open(
          "https://www.pathwaysofpa.com/5-great-companies-that-employ-adults-with-special-needs/",
          "_blank"
        ),
    },
  ];

  const resourceList = (info) => {
    return (
      <div style={{ marginLeft: "20px" }}>
        {info.map((s) => (
          <a
            href={s.href}
            target="_blank_"
            style={{ textDecoration: "underline", color: "#FFF" }}
          >
            <p>
              {s.name} | {s.location}
            </p>
          </a>
        ))}
      </div>
    );
  };

  return (
    <div className="userProfileContainer">
      <div className="firstRow">
        <div className="avatarImage">
          <img src={Avatar} />
        </div>
        <div className="avatarNameContainer">
          <div className="avatarName">Noah Cohen</div>
        </div>
        <div className="profileInfo">
          <div
            style={{
              color: "#000",
              padding: "20px",
            }}
          >
            <h4>Profile</h4>
            <p>17 years old from Pittsburgh, PA</p>
          </div>
        </div>
      </div>
      <div className="secondAndThirdRow">
        <div style={{ margin: "15px 30px" }}>
          <div className="profileRowTitle">
            <h4>Saved Resources</h4>
          </div>
          <div
            className="savedResources"
            style={{
              marginBottom: "40px",
            }}
          >
            <SideButtons info={resourceInfo1} backgroundColor="#F1F1F1" />
            {resourceList(tempJobList)}
          </div>
          <div className="savedResources">
            <SideButtons info={resourceInfo2} backgroundColor="#F1F1F1" />
            {resourceList(tempCollegeList)}
          </div>
        </div>
      </div>
      <div className="secondAndThirdRow">
        <div style={{ margin: "15px 30px" }}>
          <div className="profileRowTitle">
            <h4>Search History</h4>
          </div>
          <div style={{ height: "85%", display: "grid" }}>
            <SideButtons info={SearchHistoryInfo} backgroundColor="#F1F1F1" />
          </div>
        </div>
      </div>
    </div>
  );
}
