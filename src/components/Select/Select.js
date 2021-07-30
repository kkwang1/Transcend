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
    <Form style={{ display: "table-cell" }}>
      <Form.Group
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
