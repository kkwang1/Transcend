import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
/* 
Usage: create buttons
Description:
    - title: string
    - text: string
    - backgroundColor: string 
    - color: string
    - action: callback function 
*/
export default function Button({
  title,
  text,
  action,
  backgroundColor = "",
  color = "",
}) {
  return (
    <Card
      style={{
        backgroundColor: backgroundColor,
        color: color,
        // border: "none",
        // borderRadius: "15px",
        // cursor: "pointer",
      }}
      onClick={() => action()}
    >
      <Card.Body>
        <div className="button-text">
          {title && <Card.Title>{title}</Card.Title>}
          {text && <Card.Text>{text}</Card.Text>}
        </div>
      </Card.Body>
    </Card>
  );
}
