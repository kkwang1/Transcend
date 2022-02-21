import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "./style.css";
import Filter from "./Filter";
import DashboardGroups from "../Dashboard/DashboardsGroup";
import Papa from "papaparse";

/*
Adding new filters:
- create a list of all of the filter's options and create state for it in
  SearchBar()
- add "filter_name: [new_state, change_state_fn, new_option_list]" to
 filterOptions
*/

/* old code fetching data from GraphQL
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
*/

// for the sake of simplicity, include the resources as a static array loaded
// from the csv file
async function getData() {
  const data = Papa.parse(await fetchCsv());

  // returns an array with 69 entries (resources), each containing an array
  // with the resource's properties
  return data; 
}

async function fetchCsv() {
  const response = await fetch("data/resources.csv"); // needs to be in public directory
  const reader = response.body.getReader();
  const result = await reader.read();
  const decoder = new TextDecoder("utf-8");
  const csv = await decoder.decode(result.value);
  return csv;
}

/*
output a filtered version of the data that returns only entries that have a
property (at index i) matching at least one thing in the list of criteria.

delim decides how the property text is split, such that an entry can have
multiple instances of a property at once (ex. if an entry has multiple
categories, they're separated by "; ")
*/
function filterData(data, i, criteria, delim) {
  let ans = [];

  for (let j=0; j<data.length; j++) {
    let entry = data[j];

    // for a given entry, go through each of its property instances and check
    // if it's in the list of criteria. If this happens at least once, add the
    // entry to the output
    let categories = (entry[i]).split(delim);
    for (let k=0; k<categories.length; k++) {
      if (criteria.includes(categories[k])) {
        ans.push(entry);
        break;
      }
    }
  }
  
  return ans;
}

// load resources, filtered according to the given search term and filter options
async function loadSearch(term, options) {
  let ret = await getData().then(result => {
    if (result.data.length <= 0) {
      console.log("empty data input");
      return [];
    }
    let ans = result.data;
    let keys = (result.data)[0]; // first entry of data will indicate key names
    ans.shift(); // don't include the row with key names in the search result

    // filter by each property
    for (var prop in options) {
      if (options[prop][0].length > 0) {

        // if the property is being filtered for, put it into filterData
        let textList = (options[prop][0]).map(obj => obj.text); // get list of active filters for this prop
        let i = keys.indexOf(prop); // get column index
        if (i < 0) {
          console.log("set of keys is invalid");
          return [];
        }

        ans = filterData(ans, i, textList, "; ");
      }
    }

    // filter by search term(s) (if there is one)
    if (term.length > 0) {

      // search for each word individually
      const matchCrit = term.split(/[\s,.!?:;]+/);

      let i = keys.indexOf("name"); // get column index
      if (i < 0) {
        console.log("set of keys is invalid");
        return [];
      }

      // find entries whose name includes the search term(s) somewhere
      ans = filterData(ans, i, matchCrit, /[\s,.!?:;]+/);
    }
  
    // instead of arrays, format each resource as an object
    return ans.map(arr => {
      return {
        href: arr[keys.indexOf("href")],
        name: arr[keys.indexOf("name")],
        location: arr[keys.indexOf("subcategory")]
      }
    })
  }).catch(error => {
    console.log(error);
    return [];
  });
  
  return ret;
}

export default function SearchBar(props) {
  const [resultState, updateResults] = useState([]);
  const [textState, changeText] = useState("");

  // initialize filterOptions with a list of all possible options and a state
  // variable for each property we want to filter by

  const catList = [
    { id: 0, text: "Education" },
    { id: 1, text: "Employment" },
    { id: 2, text: "Independent Living" },
    { id: 3, text: "Day Programs" },
    { id: 4, text: "Know Your Rights" }
  ];
  const [catState, changeCat] = useState([]);

  const subList = [
    { id: 0, text: "Education Quick Links" },
    { id: 1, text: "Vocational & Trade School" },
    { id: 2, text: "Community College" },
    { id: 3, text: "Four Year College" },
    { id: 4, text: "Vocational Training" },
    { id: 5, text: "Transitional Programs" },
    { id: 6, text: "Transitional Programs vs. Higher Education" },
    { id: 7, text: "Employment Quick Links" },
    { id: 8, text: "Vocational Training Programs" },
    { id: 9, text: "Employment Skills and Tips" },
    { id: 10, text: "Job Postings" },
    { id: 11, text: "Inclusive Workplaces" },
    { id: 12, text: "Career Aptitude Tools" },
    { id: 13, text: "Independent Living Quick Links" },
    { id: 14, text: "Living at Home" },
    { id: 15, text: "Assisted Living" },
    { id: 16, text: "Group Homes" },
    { id: 17, text: "Residential Programs" },
    { id: 18, text: "Integrated Community Living" },
    { id: 19, text: "Day Programs" },
    { id: 20, text: "Types of Day Programs" },
    { id: 21, text: "Know Your Rights Quick Links" },
    { id: 22, text: "Legal Rights" },
    { id: 23, text: "Funding" }
  ];
  const [subState, changeSub] = useState([]);

  const filterOptions = {
    category: [catState, changeCat, catList],
    subcategory: [subState, changeSub, subList],
  };

  // uncomment to update results as text is typed/as filters are altered
  /*
  useEffect(() => {
    let isMounted = true;
    if (!catState.length && !subState.length && !textState) {
      updateResults([]);
    } else {
      (async () => {
        let res = await loadSearch(textState, filterOptions).then(result => {
          return result;
        }).catch(error => {
          console.log(error);
          return [];
        });
        // only want to make async changes if component is mounted
        if (isMounted) updateResults(res);
      }) ();
    }
    return () => { isMounted = false }; // when dismounting component, update var
  }, [catState, subState, textState]);
  */

  // create a Filter element for each property written into filterOptions
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
          (async () => {
            let res = await loadSearch(textState, filterOptions).then(result => {
              return result;
            }).catch(error => {
              console.log(error);
              return [];
            });
            updateResults(res);
          }) ();
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
