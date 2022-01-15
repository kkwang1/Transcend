import React, {useState} from "react";
import "../../../../App.scss";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import { page } from "../../../../components/Breadcrumb/config";
import SideButtons from "../../../../components/SideButton/SideButtons";
import {pageInfo} from "../config";
import "./style.css";

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
          <div className = "embedded-link">
            <div className = "side-buttons">
              <SideButtons
                info={pageInfo}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            </div>
            <div className = "embedded-border">
              <div className = "embedded-bottom">
                <iframe className = "inline-frame"
                  id="inlineFrameExample"
                  title="Inline Frame Example"
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
