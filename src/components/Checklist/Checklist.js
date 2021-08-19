import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { Accordion, AccordionContext, Card } from "react-bootstrap";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import "./style.css";

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
      className="c-checklist-toggle"
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
          <div className="c-checklist-toggle-title">{title}</div>
          {description.length > 0 && <div className="c-checklist-toggle-desc">{description}</div>}
        </div>
        {hasProgressBar && (
          <>
            <div class="c-checklist-toggle-vl"></div>
            <div style={{ width: "50%" }}></div>
          </>
        )}
      </div>
    </Accordion.Toggle>
  );
}

export default function Checklist({
  eventKey,
  title,
  description,
  children,
  hasProgressBar = false,
}) {
  const [open, setOpen] = useState(false);
  return (
    <Card className="c-checklist-container">
      <ContextAwareToggle
        eventKey={eventKey}
        title={title}
        description={description}
        hasProgressBar={hasProgressBar}
      />
      <Accordion.Collapse className="c-checklist-collapse" eventKey={eventKey}>
        {children}
      </Accordion.Collapse>
    </Card>
  );
}
