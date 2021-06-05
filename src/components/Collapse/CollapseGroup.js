import { React, useState } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import Collapse from "./Collapse";
import "./style.css";

export default function CollapseGroup({ info }) {
  return (
    <Accordion defaultActiveKey="0">
      {info.map((s) => (
        <Collapse
          title={s.title}
          eventKey={s.key}
          children={s.children}
        />
      ))}
    </Accordion>
  );
}
