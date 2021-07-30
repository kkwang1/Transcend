import React, { useState } from "react";
import "./style.css";
import { Form } from "react-bootstrap";

async function makeDummy() {
  const response = await fetch("htp://localhost:9000/graphql", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ mutation: "" }),
  });
  const responseBody = await response.json();
  if (responseBody.data) {
    return responseBody.data.createDummy;
  } else {
    alert("Sorry, but we could not process your request.");
    return 0;
  }
}

export default function CreationPage(props) {
  const handleSubmit = (res) => {
    res.preventDefault();
    if (props.newUser) {
      makeDummy();
    }
  };
  const [curVal, setCurVal] = useState(" ");
  const space = " ";
  return (
    <form
      onSubmit={(res) => {
        handleSubmit(res);
      }}
      className="creationLabel"
      style={props.creationLabelStyle}
    >
      {props.before.concat(" ")}
      <select className="pageSelect" style={props.pageSelectStyle}>
        {props.options.map((curVal, i) => {
          if (i == props.selected) {
            return <option selected value={curVal}> {curVal} </option>;
          } else {
            return <option value={curVal}> {curVal} </option>;
          }
        })}
      </select>
      {space.concat(props.after)}
      {!props.noFooter && (
        <h4 className="instruction" style={{ marginTop: "10px" }}>
          *select one option from the dropdown menu
        </h4>
      )}
    </form>
  );
}
