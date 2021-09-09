import React, { useEffect, useState } from "react";
import "./style.css";
import { Form } from "react-bootstrap";
import { cssNumber } from "jquery";

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
  const space = " ";

  return (
    <form
      onSubmit={(res) => {
        handleSubmit(res);
      }}
      className="creationLabel"
      style={props.isSelectGroup && { textAlign: "revert" }}
    >
      {props.before.concat(" ")}
      <select
        className="pageSelect"
        style={
          props.isSelectGroup && {
            fontSize: "30px",
            maxWidth: "75%",
            padding: "8px",
          }
        }
        onChange={e => props.onChange(e.target.value)}
      >
        {props.options.map((curVal, i) => {
          if (i == props.selected) {
            return (
              <option selected value={i} key={i}>
                {" "}
                {curVal}{" "}
              </option>
            );
          } else {
            return (
              <option value={i} key={i}>
                {" "}
                {curVal}{" "}
              </option>
            );
          }
        })}
      </select>
      {space.concat(props.after)}
      {!props.isSelectGroup && (
        <h4 className="instruction" style={{ marginTop: "10px" }}>
          *select one option from the dropdown menu
        </h4>
      )}
    </form>
  );
}
