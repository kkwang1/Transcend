import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Button({
  title,
  text,
  linkPath,
  backgroundColor = "",
  color = "",
}) {
  console.log(color);
  let history = useHistory();
  return (
    <Card
      style={{
        backgroundColor: backgroundColor,
        color: color,
        border: "none",
        borderRadius: "15px",
      }}
      onClick={() => history.push(linkPath)}
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
