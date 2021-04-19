import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { Card } from "react-bootstrap";
import "./style.css";

export default function Dashboard({
  title,
  desc,
  schoolsInfo,
  saved = false,
  url = "",
  backgroundColor,
  color,
}) {
  return (
    <Card
      className="text-left"
      style={{ backgroundColor: backgroundColor, color: color }}
    >
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div class="scrollbar" id="style-1">
          <div class="force-overflow">
            <p style={{ fontSize: "0.8em" }}>{desc}</p>
            {schoolsInfo.map((s) => (
              <div style={{ margin: "10px" }}>
                <Card.Link
                  className="text-muted"
                  href={url}
                  style={{ textDecoration: "underline" }}
                >
                  {s.name} | {s.location}
                </Card.Link>
                <FontAwesomeIcon
                  icon={faBookmark}
                  style={{
                    fontSize: "1.5em",
                    float: "right",
                    verticalAlign: "middle",
                  }}
                  color={saved ? "#1B7B89" : "#DEDEDE"}
                />
              </div>
            ))}
          </div>
        </div>
      </Card.Body>
      <Card.Footer>
        <Card.Link href={url}>
          <small className="text-muted">See All</small>
        </Card.Link>
      </Card.Footer>
    </Card>
  );
}
