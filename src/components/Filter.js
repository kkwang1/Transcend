import React from "react";
import { Multiselect } from "multiselect-react-dropdown";

/*
input: props.title is the title; props.items should be a list of objects with a
id field and a text field (name of the filter option)

ex. [{id: 0, text: "option 1"}, {id: 1, text: "option 2"}]

finally, props.prompt should be a list of filters to initialize with.

ex. [{id: 1, text: "option 2"}]
*/

export default function Filter(props) {
  return (
    <Multiselect
      className="filter"
      options={ props.items }
      displayValue="text"
      selectedValues={ props.prompt }
      showCheckbox={ true }
      placeholder={ props.title }
    />
  );
}
