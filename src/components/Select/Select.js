import React from "react";
import { DropdownButton, Dropdown, Form } from "react-bootstrap";
import "./style.css";

/* 
Usage: create dropdown
Description: 
    - title: string
    - options: string array
*/
export default function Select({ title, options }) {
  return (
    // <DropdownButton
    //   id={`dropdown-variants-${title}`}
    //   title={title}
    //   style={{ display: "table-cell", padding: "5px" }}
    //   className="dropdown-link"
    // >
    //   {options.map((s) => (
    //     <Dropdown.Item eventKey={s}>{s}</Dropdown.Item>
    //   ))}
    // </DropdownButton>
    <Form style={{ display: "table-cell" }}>
      <Form.Group
        // id={`dropdown-variants-${title}`}
        // title={title}
        // style={{ display: "table-cell", padding: "5px" }}
        className="select-group"
      >
        <Form.Control as="select" className="select-control">
          {options.map((s) => (
            <option style={{color: "red"}}>{s}</option>
          ))}
        </Form.Control>
      </Form.Group>
    </Form>
  );
}
