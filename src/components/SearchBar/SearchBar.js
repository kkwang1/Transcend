import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import searchIcon from "../../images/search.png";
import "./style.css";
import Filter from "../Filter";

function submitSearch(term, options) {

}

export default function SearchBar(props) {
  const catList = [
    {id: 0, text: "education"},
    {id: 1, text: "employment"}
  ];
  const [textState, changeText] = useState(props.prompt);
  const [catState, changeCat] = useState(catList);

  const filterOptions = {
    category: [catState, catList]
  };

  const filterList = [];
  for (var key in filterOptions) {
    filterList.push(<Filter
      key={key}
      title={("Filter by " + key)}
      items={(filterOptions[key])[1]}
      prompt={(filterOptions[key])[0]}
    />);
  }
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
    <div>
      <Form>
        <Form.Control
          className="input-search"
          placeholder="Search all resources"
          onChange={(event) => changeText(event.target.value)}
        />
      </Form>
      <div className="filter-area">
        { filterList }
      </div>
      <div className="submit-search">
        <Button
          variant="outline-primary"
          onClick={ submitSearch }
        >
          Search
        </Button>
      </div>
    </div>
  );
}
