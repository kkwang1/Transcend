import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "./style.css";
import Filter from "./Filter";
import DashboardGroups from "../Dashboard/DashboardsGroup";

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
  const optionStr = JSON.stringify(options)
    .replaceAll('"id"', "id")
    .replaceAll('"text"', "text")
    .replaceAll('"category"', "category")
    .replaceAll('"subcategory"', "subcategory");
  const response = await fetch("http://localhost:9000/graphql", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      query: `{ searchTerm(term:"${term}", options:${optionStr}) { name\nhref\ncategory\nsubcategory } }`,
    }),
  });
  const responseBody = await response.json();
  if (responseBody.data) {
    return responseBody.data.searchTerm.map(resource => {
      return {
        name: resource.name,
        location: resource.subcategory + ", " + resource.category,
        href: resource.href
      }
    });
  } else {
    alert("Sorry, but we could not process your request.");
    return [];
  }
}

export default function SearchBar(props) {
  const [resultState, updateResults] = useState([]);
  const [textState, changeText] = useState();

  const catList = [
    { id: 0, text: "Education" },
    { id: 1, text: "Employment" },
    { id: 2, text: "Independent Living" },
    { id: 3, text: "Day Programs" },
    { id: 4, text: "Know Your Rights" },
    { id: 5, text: "Funding" },
  ];
  const [catState, changeCat] = useState([]);

  const subList = [
    { id: 0, text: "College (general)" },
    { id: 1, text: "College (four year)" },
    { id: 2, text: "Education: Articles and Info" },
    { id: 3, text: "Transitional Programs" },
    { id: 4, text: "Vocational Training" },
    { id: 5, text: "Employment: Articles and Info" },
    { id: 6, text: "Job Postings" },
    { id: 7, text: "Career Aptitude Tools" },
    { id: 8, text: "Living at Home" },
    { id: 9, text: "Assisted Living" },
    { id: 10, text: "Group Homes" },
    { id: 11, text: "Residential Programs" },
    { id: 12, text: "Day Programs" },
    { id: 13, text: "Know Your Rights" },
    { id: 14, text: "Funding" },
  ];
  const [subState, changeSub] = useState([]);

  const filterOptions = {
    category: [catState, changeCat, catList],
    subcategory: [subState, changeSub, subList],
  };

  useEffect(() => {
    if (!catState.length && !subState.length && !textState) {
      updateResults([]);
    } else {
      loadSearch(textState, filterOptions).then((results) =>
        updateResults(results)
      );
    }
  }, [catState, subState, textState]);

  const filterList = [];
  for (var key in filterOptions) {
    filterList.push(
      <Filter
        key={key}
        name={key}
        title={"Filter by " + key}
        items={filterOptions[key][2]}
        prompt={filterOptions[key][0]}
        updateFn={filterOptions[key][1]}
      />
    );
  }

  return (
    <div>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          loadSearch(textState, filterOptions).then((results) =>
            updateResults(results)
          );
          updateResults([{
            name: "a good resource",
            location: "Employment: Articles and Info, Employment",
            href: "https://google.com"
          }, {
            name: "another good resource",
            location: "Employment: Articles and Info, Employment",
            href: "https://google.com"
          }]);
            }}
      >
        <Form.Row>
          <Form.Control
            className="input-search"
            placeholder="Search all resources"
            onChange={(event) => changeText(event.target.value)}
          />
        </Form.Row>
      </Form>
      <div className="filter-area">{filterList}</div>
      { resultState.length > 0 ?
        <DashboardGroups info={ [
          {
            title: "Search Results",
            desc: "Resources from our personal database",
            schoolsInfo: resultState,
            url: ""
          }
        ] }/>
        :
        <div></div>
      }
    </div>
  );
}
