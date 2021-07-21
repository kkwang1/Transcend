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
  }
  else {
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
    >
      <div className="creationLabel">
        {props.before.concat(" ")}
        <select className="pageSelect">
          {props.options.map((curVal) => {
            return <option value={curVal}> {curVal} </option>;
          })}
        </select>
        {space.concat(props.after)}
      </div>
      <br />
      <br />
      <h4 className="instruction">*select one option from the dropdown menu</h4>
    </form>
  );
}