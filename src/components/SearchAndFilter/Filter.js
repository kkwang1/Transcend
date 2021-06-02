import React from "react";
import { Multiselect } from "multiselect-react-dropdown";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

/*
input: props.title is the title; props.items should be a list of objects with a
id field and a text field (name of the filter option)

ex. [{id: 0, text: "option 1"}, {id: 1, text: "option 2"}]

props.prompt should be a list of filters to initialize with.

ex. [{id: 1, text: "option 2"}]

finally, props.updateFn is a function that updates a state variable with
the selected items.
*/

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this[this.props.name] = React.createRef();
  }
  render() {
    return (
      <div className="filter">
        <FontAwesomeIcon
          icon={faAngleDown}
          style={{
            position: "absolute",
            right: "15px",
            top: "15px",
            color: "#bdbdbd",
          }}
        />
        <Multiselect
          options={this.props.items}
          displayValue="text"
          selectedValues={this.props.prompt}
          showCheckbox={true}
          placeholder={this.props.title}
          ref={this[this.props.name]}
          onSelect={this.props.updateFn}
          onRemove={this.props.updateFn}
          closeIcon="cancel"
          closeOnSelect={false}
          hidePlaceholder={true}
          avoidHighlightFirstOption={true}
          style={{
            multiselectContainer: {
              fontSize: "smaller",
            },
            searchBox: {
              borderRadius: "initial",
            },
            chips: {
              padding: "2px 10px",
              marginBottom: "initial",
              background: "#1b7b89",
            },
            option: {
              // To change css for dropdown options
              hover: {
                background: "red",
              },
            },
          }}
        />
      </div>
    );
  }
}
