import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import "./style.css";
import Filter from "./Filter";
import DashboardGroups from "../../components/Dashboard/DashboardsGroup";

// scrapes raw html from a college database after giving it a query based on
// the user's input
async function loadSearch(input, filters) {
  try {
    // temporarily fix certain parameters
    filters.pageNum = 0;

    const baseUrl = "https://thinkcollege.net/college-search";
    const searchTerm = `?search_api_views_fulltext=${ input }`;
    const pageNum = filters.pageNum == 0 ? "" : `&page=${ filters.pageNum }`;

    // unpack all additional args
    let argsList = [];
    for (let i in Object.entries(filters)) {
      let [key, val] = Object.entries(filters)[i];
      if (val && val[0].length > 0) {
        for (let j in val[0]) {
          argsList.push([key, val[0][j].text]);
        }
      }
    }

    // enumerate and format additional args
    const formattedArgs = argsList.map(entry => {
      let [key, val] = entry;
      switch(key) {
        case "location": 
          return `tc_state_province%3A${ val }`;
        case "number of years":
          return `field_prog_length_years%3A${ val }`;
        case "disability":
          return `field_prog_which_disabilities%3A${ val }`;
        case "type":
          return `tc_school_type%3A${ val }`;
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
    return [url, response.data];
  } catch (error) {
    alert("Sorry, but we could not process your request.");
    return ["", ""];
  }
}

// converts the raw html into a series of college objects
function parse(src) {
  let parser = new DOMParser();
  const doc = parser.parseFromString(src, "text/html");
  const nodes = doc.querySelectorAll(".program-box"); // get list of programs

  const programs = Array.from(nodes).map(program => {
    // the href will have the wrong base url, so processing is required:
    let hrefBad = program.querySelector(".program-search-program-name")
      .querySelector("a").getAttribute("href");
    let i = hrefBad.indexOf('/');
    return {
      name: program.querySelector(".program-search-program-name").innerText.trim(),
      university: program.querySelector(".program-university").innerText.trim(),
      location: program.querySelector(".program-location").innerText.trim(),
      description: program.querySelector(".panel-body").innerText.trim(),
      href: "https://thinkcollege.net" + hrefBad.slice(i)
    }
  });

  return programs;
}

export default function WebSearchBar(props) {
  const [textState, changeText] = useState("");
  const [urlStateVoc, updateUrlVoc] = useState("");
  const [urlStateCom, updateUrlCom] = useState("");
  const [urlStateCol, updateUrlCol] = useState("");
  const [resultStateVoc, updateResultsVoc] = useState([]);
  const [resultStateCom, updateResultsCom] = useState([]);
  const [resultStateCol, updateResultsCol] = useState([]);

  const yearsList = [
    { id: 0, text: "1 year" },
    { id: 1, text: "2 years" },
    { id: 2, text: "3 years" },
    { id: 3, text: "4 years" }
  ];
  const [yearsState, changeYears] = useState([]);

  const locList = [
    { id: 0, text: "Alabama" },
    { id: 1, text: "Alaska" },
    { id: 2, text: "Arizona" },
    { id: 3, text: "Arkansas" },
    { id: 4, text: "California" },
    { id: 5, text: "Colorado" },
    { id: 6, text: "Connecticut" },
    { id: 7, text: "Delaware" },
    { id: 8, text: "Florida" },
    { id: 9, text: "Georgia" },
    { id: 10, text: "Hawaii" },
    { id: 11, text: "Idaho" },
    { id: 12, text: "Illinois" },
    { id: 13, text: "Indiana" },
    { id: 14, text: "Iowa" },
    { id: 15, text: "Kansas" },
    { id: 16, text: "Kentucky" },
    { id: 17, text: "Louisiana" },
    { id: 18, text: "Maine" },
    { id: 19, text: "Maryland" },
    { id: 20, text: "Massachusetts" },
    { id: 21, text: "Michigan" },
    { id: 22, text: "Minnesota" },
    { id: 23, text: "Mississippi" },
    { id: 24, text: "Missouri" },
    { id: 25, text: "Montana" },
    { id: 26, text: "Nebraska" },
    { id: 27, text: "Nevada" },
    { id: 28, text: "New Hampshire" },
    { id: 29, text: "New Jersey" },
    { id: 30, text: "New Mexico" },
    { id: 31, text: "New York" },
    { id: 32, text: "North Carolina" },
    { id: 33, text: "North Dakota" },
    { id: 34, text: "Ohio" },
    { id: 35, text: "Oklahoma" },
    { id: 36, text: "Oregon" },
    { id: 37, text: "Pennsylvania" },
    { id: 38, text: "Rhode Island" },
    { id: 39, text: "South Carolina" },
    { id: 40, text: "South Dakota" },
    { id: 41, text: "Tennessee" },
    { id: 42, text: "Texas" },
    { id: 43, text: "Utah" },
    { id: 44, text: "Vermont" },
    { id: 45, text: "Virginia" },
    { id: 46, text: "Washington" },
    { id: 47, text: "West Virginia" },
    { id: 48, text: "Wisconsin" },
  ];
  const [locState, changeLoc] = useState([]);

  const disabilityList = [
    { id: 0, text: "Intellectual disability" },
    { id: 1, text: "Autism" },
    { id: 2, text: "Other disabilities" },
  ];
  const [disabilityState, changeDisability] = useState([]);

  const filterOptions = {
    "number of years": [yearsState, changeYears, yearsList],
    "location": [locState, changeLoc, locList],
    "disability": [disabilityState, changeDisability, disabilityList]
  };

  useEffect(() => {
      loadSearch(textState, {
        "type": [[{id: 0, text: "Technical or vocational/trade school"}]],
        ...filterOptions
      }).then((results) => {
        updateUrlVoc(results[0]);
        updateResultsVoc(parse(results[1]));
      });
      loadSearch(textState, {
        "type": [[{id: 1, text: "2-year community college or junior college"}]],
        ...filterOptions
      }).then((results) => {
        updateUrlCom(results[0]);
        updateResultsCom(parse(results[1]));
      });
      loadSearch(textState, {
        "type": [[{id: 2, text: "4-year college or university"}]],
        ...filterOptions
      }).then((results) => {
        updateUrlCol(results[0]);
        updateResultsCol(parse(results[1]));
      });
  }, [yearsState, locState, textState]);

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
          loadSearch(textState, {
            "type": [[{id: 0, text: "Technical or vocational/trade school"}]],
            ...filterOptions
          }).then((results) => {
            updateUrlVoc(results[0]);
            updateResultsVoc(parse(results[1]));
          });
          loadSearch(textState, {
            "type": [[{id: 1, text: "2-year community college or junior college"}]],
            ...filterOptions
          }).then((results) => {
            updateUrlCom(results[0]);
            updateResultsCom(parse(results[1]));
          });
          loadSearch(textState, {
            "type": [[{id: 2, text: "4-year college or university"}]],
            ...filterOptions
          }).then((results) => {
            updateUrlCol(results[0]);
            updateResultsCol(parse(results[1]));
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
      <div className="filter-area">{ filterList }</div>
      <DashboardGroups info={ [
        {
          title: "Vocational College & Trade School",
          desc: "Vocational colleges and trade schools specific in your area",
          schoolsInfo: resultStateVoc,
          url: urlStateVoc
        },
        {
          title: "Community College",
          desc: "Community colleges and two year degree programs near you",
          schoolsInfo: resultStateCom,
          url: urlStateCom
        },
        {
          title: "Four Year College",
          desc: "Community colleges and two year degree programs near you",
          schoolsInfo: resultStateCol,
          url: urlStateCol
        }
      ] }/>
    </div>
  );
}
