import React from "react";
import { Card } from "react-bootstrap";

export default function OlderButton({
  title,
  text,
  backgroundColor = "",
  color = "",
}) {
  return (
    <Card style={{ backgroundColor: backgroundColor, color: color }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}