import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { Accordion, AccordionContext, Card } from "react-bootstrap";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";

function ContextAwareToggle({ eventKey, title, callback }) {
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
      <div>{title}</div>
    </Accordion.Toggle>
  );
}

export default function Collapse({ eventKey, title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <Card className="c-collapse-container">
      <ContextAwareToggle eventKey={eventKey} title={title} />
      <Accordion.Collapse className="c-collapse-collapse" eventKey={eventKey}>
        {children}
      </Accordion.Collapse>
    </Card>
  );
}
