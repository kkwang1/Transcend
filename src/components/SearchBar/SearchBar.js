import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import searchIcon from "../../images/search.png";
import "./style.css";
import Filter from "../Filter";

/*
Adding new filters - need to edit schema.graphql and SearchBar.js
In this file:
- add filter_name to optionStr in loadSearch()
- add filter_name to the query in loadSearch()
- create a list of all of the filter's options and create state for it in
  SearchBar()
- add "filter_name: [new_state, change_state_fn, new_option_list]" to
  filterOptions
*/

async function loadSearch(term, options) {
  const optionStr = JSON.stringify(options).replaceAll('\"id\"', 'id')
                                           .replaceAll('\"text\"', 'text')
                                           .replaceAll('\"category\"', 'category');
  console.log(optionStr);
  const response = await fetch('http://localhost:9000/graphql', {
    method: 'POST',
    headers: { 'content-type':'application/json'},
    body: JSON.stringify({
      query: `{ searchTerm(term:"${ term }", options:${ optionStr }) { name\nhref\ncategory } }`
    })
  })
  const responseBody = await response.json();
  if (responseBody.data) {
    return responseBody.data.searchTerm;
  } else {
    alert("Sorry, but we could not process your request.");
    return [];
  }
}

export default function SearchBar(props) {
  const [resultState, updateResults] = useState([]);
  const [textState, changeText] = useState("");

  const catList = [
    {id: 0, text: "education"},
    {id: 1, text: "employment"}
  ];
  const [catState, changeCat] = useState([]);

  const filterOptions = {
    category: [catState, changeCat, catList]
  };

  const filterList = [];
  for (var key in filterOptions) {
    filterList.push(<Filter
      key={key}
      title={("Filter by " + key)}
      items={(filterOptions[key])[2]}
      prompt={(filterOptions[key])[0]}
      updateFn={(filterOptions[key])[1]}
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
      {/* <div className="filter-area">
        { filterList }
      </div>
      <div className="submit-search">
        <Button
          variant="primary"
          onClick={ () => loadSearch(textState, filterOptions).then(results => updateResults(results)) }
        >
          Search
        </Button>
      </div>
      <div className="result-area">
        <p>{ JSON.stringify(resultState) }</p>
      </div> */}
    </div>
  );
}
