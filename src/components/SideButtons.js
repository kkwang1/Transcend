import React from "react";
import { Card } from "react-bootstrap";

/* 
Name: info
Usage: create a deck of buttons
Type: Array
Description:
  an array of objects that has the following properties (all not required):
    - title
    - text
    - backgroundColor
    - color
    - action 
*/
export default function SideButtons({ info }) {
  return info.map((s) => (
    <Card className="mb-2">
      <Card.Body>
        {s.title && <Card.Title style={{marginBottom: "0px"}}>{s.title}</Card.Title>}
        {s.text && <Card.Text style={{marginTop: "revert"}}>{s.text}</Card.Text>}
      </Card.Body>
    </Card>
  ));
}
