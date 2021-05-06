import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function OlderButton({
  title,
  text,
  linkPath,
  backgroundColor = "",
  color = "",
}) {
  console.log(color)
  let history = useHistory();
  return (
    <Card
      style={{ backgroundColor: backgroundColor, color: color, border: "none" }}
      onClick={() => history.push(linkPath)}
    >
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}
