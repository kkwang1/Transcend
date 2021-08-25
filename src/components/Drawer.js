import React from "react";
import arrow from "../../images/right_arrow.png";

// inputs: props.title is the title; should have children with href props

export default function Drawer(props) {
  return (
    <div className="drawer">
      <h2 className="drawer-title">{props.title}</h2>
      <div className="drawer-body">
        {props.children.map((child, index) => {
          return (
            <a
              href={child.props.href}
              target="_blank"
              rel="noreferrer"
              className="drawer-button"
              key={`drawerId_${index}`}
            >
              <div className="drawer-text">{child}</div>
              <img className="drawer-arrow" src={arrow} alt="" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
