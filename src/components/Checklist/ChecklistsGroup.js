import { React, useState } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import Checklist from "./Checklist";

export default function ChecklistsGroup({ info }) {
  return (
    <Accordion defaultActiveKey="0">
      {info.map((s) => (
        <Checklist
          title={s.title}
          description={s.description}
          eventKey={s.key}
          children={s.children}
          hasProgressBar={s.hasProgressBar}
        />
      ))}
    </Accordion>
  );
}
