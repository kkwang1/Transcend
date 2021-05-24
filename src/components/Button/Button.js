import React from "react";
import { Card } from "react-bootstrap";
import "./style.css";
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
      className="card-button"
      style={{
        backgroundColor: backgroundColor,
        color: color,
      }}
      onClick={() => action()}
    >
      <Card.Body style={{alignItems: !text && "center"}}>
        <div className="button-text">
          {title && <Card.Title>{title}</Card.Title>}
          {text && <Card.Text>{text}</Card.Text>}
        </div>
      </Card.Body>
    </Card>
  );
}
