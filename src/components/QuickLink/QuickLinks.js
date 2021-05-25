import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

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
export default function QuickLinks({ info, backgroundColor = "", color = "" }) {
  return (
    <div style={{ backgroundColor: "#F1F1F1", borderRadius: "15px" }}>
      {info.map((s) => (
        <Card
          className="quickLinks"
          style={{ backgroundColor: `${backgroundColor}`, color: `${color}` }}
          onClick={() => window.open(s.url, "_blank")}
        >
          <Card.Body
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ textAlign: "left" }}>
              {s.title && (
                <Card.Title style={{ marginBottom: "0px" }}>
                  {s.title}
                </Card.Title>
              )}
              {s.text && (
                <Card.Text style={{ marginTop: "revert" }}>{s.text}</Card.Text>
              )}
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
