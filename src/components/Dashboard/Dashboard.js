import React, { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { Card } from "react-bootstrap";
import "./style.css";
import { StoreContext } from "../../utils/store";

export default function Dashboard({
  title = "",
  desc = "",
  schoolsInfo,
  url = "",
  backgroundColor,
  color,
}) {
  const { bookmarks, setBookmarks } = useContext(StoreContext);

  const objectsEqual = (o1, o2) =>
    Object.keys(o1).length === Object.keys(o2).length &&
    Object.keys(o1).every((p) => o1[p] === o2[p]);

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
            {schoolsInfo.map((s) => {
              return (
                <div style={{ margin: "10px" }}>
                  <a
                    href={s.href}
                    target="_blank_"
                    style={{ textDecoration: "underline" }}
                  >
                    {s.name} | {s.location}
                  </a>
                  <FontAwesomeIcon
                    icon={faBookmark}
                    style={{
                      fontSize: "1.5em",
                      float: "right",
                      verticalAlign: "middle",
                    }}
                    color={
                      bookmarks.filter((i) => {
                        return i.name == s.name && i.location == s.location;
                      }).length > 0
                        ? "#1B7B89"
                        : "#DEDEDE"
                    }
                    onClick={() => {
                      const newBookmarks = bookmarks.filter((i) => {
                        return i.name != s.name || i.location != s.location;
                      });
                      const saved =
                        bookmarks.length > 0 &&
                        newBookmarks.length < bookmarks.length;
                      if (!saved) {
                        newBookmarks.push({
                          name: s.name,
                          location: s.location,
                        });
                      }
                      setBookmarks(newBookmarks);
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Card.Body>
      {url ? (
        // only display the footer if the url isn't blank
        <Card.Footer>
          <a href={url} target="_blank_">
            <small className="text-muted">See All</small>
          </a>
        </Card.Footer>
      ) : (
        <Card.Footer></Card.Footer>
      )}
    </Card>
  );
}
