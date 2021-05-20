import React from "react";
import "../../App.scss";
import SideButtons from "../../components/SideButton.js/SideButtons";

export default function LivingAtHome() {
  return (
    <>
      <h1 className="layout-header">Living at Home</h1>
      <div className="layout-content">
        <p>
          Living at home after school can be a very sensible and economically
          sound decision.<br></br>
          Below are some resources for fostering independence at home.
        </p>
        <div
          style={{
            display: "flex",
            width: "100%",
            paddingBottom: "50px",
            marginTop: "30px"
          }}
        >
          <div>
            <SideButtons
              backgroundColor="#F1F1F1"
              color="#1B7B89"
              info={[
                { title: "Self-sufficiency" },
                { title: "Guardianship" },
                { title: "Economic Success" },
                { title: "Support" },
                { title: "Fullfillment & Recreation" },
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
  );
}
