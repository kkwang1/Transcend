import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "./style.css";

/* 
Usage: create dropdown
Description: 
    - title: string
    - options: string array
*/
export default function Select({ title, options }) {
  return (
    <DropdownButton
      id={`dropdown-variants-${title}`}
      title={title}
      style={{ display: "table-cell", padding: "5px" }}
      className="dropdown-link"
    >
      {options.map((s) => (
        <Dropdown.Item eventKey={s}>{s}</Dropdown.Item>
      ))}
    </DropdownButton>
  );
}
