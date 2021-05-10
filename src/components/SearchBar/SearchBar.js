import React, { useState } from "react";
import { Form } from "react-bootstrap";
import searchIcon from "../../images/search.png";
import "./style.css";

// inputs: props.prompt is the initial text in the search bar

export default function SearchBar(props) {
  const [textState, changeText] = useState(props.prompt);
  console.log(textState);
  return (
    // <div className="search-bar">
    //   <img className="search-icon" src={ searchIcon } alt="" />
    //   <input
    //     className="search-text"
    //     type="text"
    //     value={ textState }
    //     onChange={ (event) => changeText(event.target.value) }
    //   />
    // </div>
    <Form>
      <Form.Control
        className="input-search"
        placeholder="Search all resources"
        onChange={(event) => changeText(event.target.value)}
      />
    </Form>
  );
}
