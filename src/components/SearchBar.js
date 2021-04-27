import React, { useState } from "react";
import searchIcon from "../images/search.png";

// inputs: props.prompt is the initial text in the search bar

export default function SearchBar(props) {
  const [textState, changeText] = useState(props.prompt);
  return (
  <div className="search-bar">
    <img className="search-icon" src={ searchIcon } alt="" />
    <input
      className="search-text"
      type="text"
      value={ textState }
      onChange={ (event) => changeText(event.target.value) }
    />
  </div>
  );
}
