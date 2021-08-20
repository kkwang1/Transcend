import { React } from "react";
import { Accordion } from "react-bootstrap";
import Collapse from "./Collapse";

export default function CollapseGroup({ info, border }) {
  console.log(border)
  return (
    <Accordion defaultActiveKey="0">
      {info.map((s) => (
        <Collapse
          title={s.title}
          description={s.description}
          eventKey={s.key}
          children={s.children}
          hasProgressBar={s.hasProgressBar}
          border={border}
        />
      ))}
    </Accordion>
  );
}