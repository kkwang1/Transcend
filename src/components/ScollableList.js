import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

export default function ScrollableList({
  title,
  info,
  backgroundColor = "",
  color = "",
}) {
  return (
    <Card style={{ backgroundColor: backgroundColor, color: color }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {info.map((s) => (
          <div>
            <Card.Text>
              {s.schoolName} | {s.location}
            </Card.Text>
            <faBookmark />
          </div>
        ))}
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">See All</small>
      </Card.Footer>
    </Card>
  );
}
