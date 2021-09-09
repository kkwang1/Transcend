import React, {useState} from "react";
import "../../../App.scss";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import { page } from "../../../components/Breadcrumb/config";
import SideButtons from "../../../components/SideButton/SideButtons";
import {pageInfo} from "./config";

export default function Career({ match }) {
  const [activeIndex, setActiveIndex] = useState(0);

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
                info={pageInfo}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
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
                  margin: "15px",
                  paddingBottom: "50px",
                  height: "100%"
                  
                }}
              >
                <iframe
                  id="inlineFrameExample"
                  title="Inline Frame Example"
                  width="100%"
                  height="100%"
                  src={pageInfo[activeIndex].url}
                  allowfullscreen={true}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
