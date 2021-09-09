import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { Accordion, AccordionContext, Card } from "react-bootstrap";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import "./style.css";
import ListProgressBar from "../ProgressBar/ProgressBar";

function ContextAwareToggle({
  eventKey,
  title,
  description,
  callback,
  hasProgressBar,
}) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <Accordion.Toggle
      className="c-collapse-toggle"
      as={Card.Header}
      eventKey={eventKey}
      onClick={decoratedOnClick}
    >
      <FontAwesomeIcon
        icon={isCurrentEventKey ? faCaretUp : faCaretDown}
        color="#DEDEDE"
        style={{ fontSize: "2rem", marginRight: "20px" }}
      />
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ width: "50%" }}>
          <div className="c-collapse-toggle-title">{title}</div>
          {description && (
            <div className="c-collapse-toggle-desc">{description}</div>
          )}
        </div>
        {hasProgressBar && (
          <>
            <div class="c-collapse-toggle-vl"></div>
            <div style={{ width: "50%" }}>
              <ListProgressBar />
            </div>
          </>
        )}
      </div>
    </Accordion.Toggle>
  );
}

export default function Collapse({
  eventKey,
  title,
  description,
  children,
  hasProgressBar = false,
  border = true,
}) {
  const [open, setOpen] = useState(false);
  return (
    <Card
      className={
        border ? "c-collapse-container" : "c-collapse-container-noborder"
      }
    >
      <ContextAwareToggle
        eventKey={eventKey}
        title={title}
        description={description}
        hasProgressBar={hasProgressBar}
      />
      <Accordion.Collapse className="c-collapse-collapse" eventKey={eventKey}>
        {children}
      </Accordion.Collapse>
    </Card>
  );
}
