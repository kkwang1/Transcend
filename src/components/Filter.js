import React from "react";
import { Multiselect } from "multiselect-react-dropdown";

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
    (this[this.props.name]) = React.createRef();
  }
  getItems() {
    return (this[this.props.name]).current.getSelectedItems();
  }
  render() {
    return (
      <Multiselect
        className="filter"
        options={ this.props.items }
        displayValue="text"
        selectedValues={ this.props.prompt }
        showCheckbox={ true }
        placeholder={ this.props.title }
        ref={ this[this.props.name] }
        onSelect={ (event) => this.props.updateFn(this.getItems()) }
        onRemove={ (event) => this.props.updateFn(this.getItems()) }
      />
    );
  }
}