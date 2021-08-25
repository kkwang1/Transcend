import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-bootstrap";
import CreationPage from "../../components/CreationPage/CreationPage";
import { info } from "./config";

export default function QuestionnaireItem(props) {
  const item = {
    1: (
      <>
        <h4>
          Help us customize resources for you by answering a few questions.
        </h4>
        <h1>I am a...</h1>
        <div
          style={{ display: "flex", marginTop: "50px" }}
          
        >
          <div style={{ width: "50%" }} onClick={() => props.setIsParent(false)}>
            <FontAwesomeIcon
              icon={faUserGraduate}
              color={props.isParent ? "#C4C4C4" : "#1B7B89"}
              style={{ fontSize: "7rem", margin: "auto", display: "flex" }}
            />
            <h4
              style={{
                marginTop: "20px",
                textAlign: "center",
                color: props.isParent ? "#C4C4C4" : "#1B7B89",
              }}
            >
              STUDENT
            </h4>
          </div>
          <div style={{ width: "50%" }} onClick={() => props.setIsParent(true)}>
            <FontAwesomeIcon
              icon={faUserFriends}
              color={!props.isParent ? "#C4C4C4" : "#1B7B89"}
              style={{ fontSize: "7rem", margin: "auto", display: "flex" }}
            />
            <h4
              style={{
                marginTop: "20px",
                textAlign: "center",
                color: !props.isParent ? "#C4C4C4" : "#1B7B89",
              }}
            >
              PARENT or CAREGIVER
            </h4>
          </div>
        </div>
      </>
    ),
    2: (
      <>
        {props.isParent ? (
          <CreationPage
            before={"My child is"}
            after={"years old."}
            options={info.ageRange}
            selected={2}
          />
        ) : (
          <CreationPage
            before={"I am"}
            after={"years old."}
            options={info.ageRange}
            selected={2}
          />
        )}
      </>
    ),
    3: (
      <>
        <div>
          {props.isParent ? (
            <CreationPage
              before={"My child reside in"}
              after={""}
              options={info.stateNames}
              selected={44}
            />
          ) : (
            <CreationPage
              before={"I reside in"}
              after={""}
              options={info.stateNames}
              selected={44}
            />
          )}
        </div>
      </>
    ),
    4: (
      <div style={{ display: "flex" }}>
        <h1 style={{ margin: "auto 50px", width: "50%", textAlign: "center" }}>
          How far along are you in the transition process?
        </h1>
        <div style={{ width: "50%" }}>
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
        <h1 style={{ margin: "auto 100px", width: "50%", textAlign: "center" }}>
          Do you fall under any of the 13 IDEA disability categories?
        </h1>
        <div style={{ width: "50%" }}>
          <h3 style={{ marginTop: "5rem", marginBottom: "1rem" }}>
            *check all that apply.
          </h3>
          <Form style={{ marginLeft: "10%" }}>
            {info.disabilityCategories.map((s, index) => (
              <Form.Check
                type={"checkbox"}
                id={`id-${index}`}
                label={s}
                style={{ margin: "10px" }}
              />
            ))}
          </Form>
        </div>
      </div>
    ),
    6: (
      <>
        <h1 style={{ marginBottom: "50px" }}>
          What best describes your economic need?
        </h1>
        <CreationPage before={"I am "} after={""} options={info.funds} />
      </>
    ),
    7: (
      <div style={{ display: "flex" }}>
        <h1 style={{ margin: "auto 50px", width: "60%", textAlign: "center" }}>
          What best describes your postsecondary goals in the following
          sections?
        </h1>

        <div style={{ width: "50%" }}>
          <h3 style={{marginTop: "20px"}}>Education:</h3>
          <CreationPage
            before={""}
            after={""}
            options={info.education}
            selected={1}
            noFooter={true}
            creationLabelStyle={{textAlign: "revert"}}
            pageSelectStyle={{ fontSize: "30px", maxWidth: "75%", padding: "8px" }}
          />
          <h3 style={{marginTop: "20px"}}>Employment:</h3>
          <CreationPage
            before={""}
            after={""}
            options={info.employment}
            selected={4}
            noFooter={true}
            creationLabelStyle={{textAlign: "revert"}}
            pageSelectStyle={{ fontSize: "30px", maxWidth: "75%", padding: "8px" }}
          />
          <h3 style={{marginTop: "20px"}}>Independent Living:</h3>
          <CreationPage
            before={""}
            after={""}
            options={info.independentLiving}
            selected={1}
            noFooter={true}
            creationLabelStyle={{textAlign: "revert"}}
            pageSelectStyle={{ fontSize: "30px", maxWidth: "75%", padding: "8px" }}
          />
        </div>
      </div>
    ),
  };
  return item[props.itemNum];
}
