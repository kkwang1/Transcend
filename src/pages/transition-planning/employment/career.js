import React from "react";
import "../../../App.scss";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import SideButtons from "../../../components/SideButton/SideButtons";

export default function Career({ match }) {
  return (
    <>
      <>
        <div className="layout-breadcrumb">
          <Breadcrumb path={match.path} />
        </div>
        <h1 className="layout-header">Career</h1>
        <div className="layout-content">
          <p>
            Knowing which career is right for you is an important first step.
            While we can’t fully give you that answer, these aptitude tests and
            toolkits can be good starting points.
          </p>
          <div
            style={{
              display: "flex",
              width: "100%",
              paddingBottom: "50px",
              marginTop: "30px",
            }}
          >
            <div>
              <SideButtons
                backgroundColor="#F1F1F1"
                color="#1B7B89"
                info={[
                  { title: "MyFuture" },
                  { title: "Career One Stop Toolkit" },
                  { title: "Finding your Career Path" },
                  { title: "Your Career Superstar" },
                  { title: "Career Examples for Diverse Learners" },
                ]}
              />
            </div>
            <div
              style={{
                marginLeft: "35px",
                minWidth: "65%",
                backgroundColor: "#F1F1F1",
                borderRadius: "20px",
              }}
            >
              <div
                style={{
                  marginTop: "15px",
                  paddingBottom: "50px",
                }}
              >
                {/* <Dashboard
                title={dashboardInfo[0].title}
                desc={dashboardInfo[0].desc}
                schoolsInfo={dashboardInfo[0].schoolsInfo}
                backgroundColor={dashboardInfo[0].backgroundColor}
                color={dashboardInfo[0].color}
              /> */}
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
