import React, { useState } from "react";
import { Form } from "react-bootstrap";
import searchIcon from "../../images/search.png";
import "./style.css";

// inputs: props.prompt is the initial text in the search bar

export default function SearchBar(props) {
  const [textState, changeText] = useState(props.prompt);
  return (
    <Form>
      <Form.Control
        className="input-search"
        placeholder="Search all resources"
        onChange={(event) => changeText(event.target.value)}
      />
    </Form>
  );
}