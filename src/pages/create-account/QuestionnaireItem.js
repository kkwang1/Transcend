import React, { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-bootstrap";
import CreationPage from "../../components/CreationPage/CreationPage";
import { info } from "./config";
import { StoreContext } from "../../utils/store";
import { valHooks } from "jquery";

export default function QuestionnaireItem(props) {
  const { questionnaire, setQuestionnaire } = useContext(StoreContext);

  const item = {
    1: (
      <>
        <h4>
          Help us customize resources for you by answering a few questions.
        </h4>
        <h1>I am a...</h1>
        <div style={{ display: "flex", marginTop: "50px" }}>
          <div
            style={{ width: "50%" }}
            onClick={() =>
              setQuestionnaire({ ...questionnaire, isParent: false })
            }
          >
            <FontAwesomeIcon
              icon={faUserGraduate}
              color={questionnaire.isParent ? "#C4C4C4" : "#1B7B89"}
              style={{ fontSize: "7rem", margin: "auto", display: "flex" }}
            />
            <h4
              style={{
                marginTop: "20px",
                textAlign: "center",
                color: questionnaire.isParent ? "#C4C4C4" : "#1B7B89",
              }}
            >
              STUDENT
            </h4>
          </div>
          <div
            style={{ width: "50%" }}
            onClick={() =>
              setQuestionnaire({ ...questionnaire, isParent: true })
            }
          >
            <FontAwesomeIcon
              icon={faUserFriends}
              color={!questionnaire.isParent ? "#C4C4C4" : "#1B7B89"}
              style={{ fontSize: "7rem", margin: "auto", display: "flex" }}
            />
            <h4
              style={{
                marginTop: "20px",
                textAlign: "center",
                color: !questionnaire.isParent ? "#C4C4C4" : "#1B7B89",
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
        <CreationPage
          before={questionnaire.isParent ? "My child is" : "I am"}
          after={"years old."}
          options={info.ageRange}
          selected={questionnaire.ageRange}
          onChange={(val) => {
            setQuestionnaire({ ...questionnaire, ageRange: val });
          }}
        />
      </>
    ),
    3: (
      <>
        <div>
<<<<<<< Updated upstream
          <CreationPage
            before={props.isParent ? "My child reside in" : "I reside in"}
            after={""}
            options={info.stateNames}
            selected={questionnaire.stateNames}
            onChange={(val) =>
              setQuestionnaire({ ...questionnaire, stateNames: val })
            }
          />
=======
          {props.isParent ? (
            <CreationPage
              before={"My child resides in"}
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
>>>>>>> Stashed changes
        </div>
      </>
    ),
    4: (
      <div style={{ display: "flex" }}>
        <h1 style={{ margin: "auto 50px", width: "50%", textAlign: "center" }}>
          How far along are you in the transition process?
        </h1>
        <div style={{ width: "50%" }}>
          <Form>
            {info.process.map((s, index) => (
              <Form.Check
                type="radio"
                name="group1"
                id={`id-${index}`}
                label={s}
              />
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
        <CreationPage
          before={"I am "}
          after={""}
          options={info.funds}
          selected={questionnaire.funds}
          onChange={(val) => setQuestionnaire({ ...questionnaire, funds: val })}
        />
      </>
    ),
    7: (
      <div style={{ display: "flex" }}>
        <h1 style={{ margin: "auto 50px", width: "60%", textAlign: "center" }}>
          What best describes your postsecondary goals in the following
          sections?
        </h1>

        <div style={{ width: "50%" }}>
          <h3 style={{ marginTop: "20px" }}>Education:</h3>
          <CreationPage
            before={""}
            after={""}
            options={info.education}
            selected={questionnaire.education}
            isSelectGroup={true}
            onChange={(val) =>
              setQuestionnaire({ ...questionnaire, education: val })
            }
          />
          <h3 style={{ marginTop: "20px" }}>Employment:</h3>
          <CreationPage
            before={""}
            after={""}
            options={info.employment}
            selected={questionnaire.employment}
            isSelectGroup={true}
            onChange={(val) =>
              setQuestionnaire({ ...questionnaire, employment: val })
            }
          />
          <h3 style={{ marginTop: "20px" }}>Independent Living:</h3>
          <CreationPage
            before={""}
            after={""}
            options={info.independentLiving}
            selected={questionnaire.independentLiving}
            isSelectGroup={true}
            onChange={(val) =>
              setQuestionnaire({ ...questionnaire, independentLiving: val })
            }
          />
        </div>
      </div>
    ),
  };
  return item[props.itemNum];
}
