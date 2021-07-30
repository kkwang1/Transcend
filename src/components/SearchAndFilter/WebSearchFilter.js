import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import "./style.css";
import Filter from "./Filter";

// scrapes raw html from a college database after giving it a query based on
// the user's input
async function loadSearch(input, filters) {
  try {
    const baseUrl = "https://thinkcollege.net/college-search";
    const searchTerm = `?search_api_views_fulltext=${ input }`;
    const pageNum = filters.pageNum == 0 ? "" : `&page=${ filters.pageNum }`;

    // unpack all additional args
    let argsList = [];
    Object.entries(filters).forEach((entry, index) => {
      if (entry[1].length > 0) {
        entry[1].forEach((val, index) => {
          argsList.push([entry[0], val]);
        });
      }
    })

    // enumerate and format additional args
    const formattedArgs = argsList.map(entry => {
      switch(entry[0]) {
        case "location": 
          return `tc_state_province%3A${ entry[1] }`;
        case "numYears":
          return `field_prog_length_years%3A${ entry[1] }%20years`;
        default:
          return "";
      }
    });

    let argsUrl = "";
    let argCounter = 0;
    for (let i = 0; i < formattedArgs.length; i++) {
      if (formattedArgs[i]) {
        argsUrl += `&f%5B${ argCounter }%5D=${ formattedArgs[i] }`;
        argCounter++;
      }
    }

    // retrieve data
    const url = baseUrl + searchTerm + argsUrl + pageNum;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    alert(error);
    return "";
  }
}

// converts the raw html into a series of college objects
function parse(src) {
  return src;
}

export default function WebSearchBar(props) {
  const [resultState, updateResults] = useState("");
  const [textState, changeText] = useState("");

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

  const testFilters = {
    location: ["Pennsylvania"],
    numYears: [4],
    pageNum: 0
  };

  useEffect(() => {
    if (!catState.length && !subState.length && !textState) {
      updateResults("");
    } else {
      loadSearch(textState, testFilters).then((results) =>
        updateResults(parse(results))
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
          loadSearch(textState, testFilters).then((results) => {
            updateResults(parse(results));
          });
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
      <div className="result-area">
        <p style={{width: "800px"}}>{ resultState }</p>
      </div>
    </div>
  );
}
