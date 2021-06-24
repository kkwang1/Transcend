import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-bootstrap";
import CreationPage from "../components/CreationPage/CreationPage";
import { info } from "./config";

export default function QuestionnaireItem(props) {
  const item = {
    1: (
      <>
        <h5>
          Help us customize resources for you by answering a few questions.
        </h5>
        <h1>I am a...</h1>
        <div
          style={{ display: "inline-flex" }}
          onClick={() => props.setIsParent(false)}
        >
          <div style={{ margin: "20px" }}>
            <FontAwesomeIcon
              icon={faUserGraduate}
              color="#C4C4C4"
              style={{ fontSize: "7rem", margin: "auto", display: "flex" }}
            />
            <h4
              style={{
                marginTop: "20px",
                textAlign: "center",
                color: "#1B7B89",
              }}
            >
              STUDENT
            </h4>
          </div>
          <div
            style={{ margin: "20px" }}
            onClick={() => props.setIsParent(true)}
          >
            <FontAwesomeIcon
              icon={faUserFriends}
              color="#C4C4C4"
              style={{ fontSize: "7rem", margin: "auto", display: "flex" }}
            />
            <h4
              style={{
                marginTop: "20px",
                textAlign: "center",
                color: "#1B7B89",
              }}
            >
              PARENT or CAREGIVER
            </h4>
          </div>
        </div>
      </>
    ),
    2: (
      <div className="layout-content">
        {props.isParent ? (
          <CreationPage
            before={"My child is"}
            after={"years old."}
            options={info.ageRange}
          />
        ) : (
          <CreationPage
            before={"I am"}
            after={"years old."}
            options={info.ageRange}
          />
        )}
      </div>
    ),
    3: (
      <>
        <div className="layout-content">
          {props.isParent ? (
            <CreationPage
              before={"My child reside in"}
              after={""}
              options={info.stateNames}
            />
          ) : (
            <CreationPage
              before={"I reside in"}
              after={""}
              options={info.stateNames}
            />
          )}
        </div>
      </>
    ),
    4: (
      <div style={{ display: "flex" }}>
        <h3 style={{ margin: "auto" }}>
          How far along are you in the transition process?
        </h3>
        <div>
          <h5>*check all that apply.</h5>
          <Form>
            {info.process.map((s, index) => (
              <Form.Check type={"radio"} id={`id-${index}`} label={s} />
            ))}
          </Form>
        </div>
      </div>
    ),
    5: (
      <div style={{ display: "flex" }}>
        <h3 style={{ margin: "auto" }}>
          Do you fall under any of the 13 IDEA disability categories?
        </h3>
        <div>
          <h5>*check all that apply.</h5>
          <Form>
            {info.disabilityCategories.map((s, index) => (
              <Form.Check type={"checkbox"} id={`id-${index}`} label={s} />
            ))}
          </Form>
        </div>
      </div>
    ),
    6: (
      <div className="layout-content">
        <h3>What best describes your economic need?</h3>
        <CreationPage before={"I am"} after={""} options={info.funds} />
      </div>
    ),
    7: (
      <div style={{ display: "flex" }}>
        <h3 style={{ margin: "auto" }}>
          What best describes your postsecondary goals in the following
          sections?
        </h3>

        <div>
          <Form>
            <h5>Education:</h5>
            <Form.Control as="select" custom>
              {info.education.map((s) => (
                <option>{s}</option>
              ))}
            </Form.Control>
            <h5>Employment:</h5>
            <Form.Control as="select" custom>
              {info.employment.map((s) => (
                <option>{s}</option>
              ))}
            </Form.Control>
            <h5>Independent Living:</h5>
            <Form.Control as="select" custom>
              {info.independentLiving.map((s) => (
                <option>{s}</option>
              ))}
            </Form.Control>
          </Form>
        </div>
      </div>
    ),
  };
  return item[props.itemNum];
}
