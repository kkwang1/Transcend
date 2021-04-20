import React from "react";
import mobiscroll from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";

mobiscroll.settings = {
  theme: "mobiscroll",
  themeVariant: "light"
};

/*
input: props.title is the title; props.items should be a list of objects with a
value field (for indexing) and a text field (name of the filter option)

ex. [{value: 0, text: "option 1"}, {value: 1, text: "option 2"}]

finally, props.prompt should be a list of indices to initialize with.
*/

export default function Filter(props) {
  return (
    <label className="filter">
      { props.title }
      <mobiscroll.Select
        select="multiple"
	touchUi={ false }
	value={ props.prompt }
	data={ props.items }
      />
    </label>
  );
}
