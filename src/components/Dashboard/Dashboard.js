import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { Card } from "react-bootstrap";
import "./style.css";

export default function Dashboard({
  title="",
  desc="",
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
                <a href={s.href} target="_blank_">
                  <Card.Link
                    className="text-muted"
                    style={{ textDecoration: "underline" }}
                  >
                    {s.name} | {s.location}
                  </Card.Link>
                </a>
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
      { url ?
        // only display the footer if the url isn't blank
        <Card.Footer>
          <a href={url} target="_blank_">
            <small className="text-muted">See All</small>
          </a>
        </Card.Footer>
        :
        <Card.Footer></Card.Footer>
      }
    </Card>
  );
}
