import { text } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { CardDeck } from "react-bootstrap";
import Button from "./Button";
import "./style.css";

/* 
Name: info
Usage: create a deck of buttons
Type: Array
Description:
  an array of objects that has the following properties (all not required):
    - title
    - text
    - backgroundColor
    - color
    - action 
*/

export default function ButtonsGroup({ info }) {
  return (
    <div className="buttonGroup">
      <CardDeck>
        {info.map((s) => (
          <Button
            text={s.text}
            title={s.title}
            backgroundColor={s.backgroundColor}
            color={s.color}
            action={s.action}
          />
        ))}
      </CardDeck>
    </div>
  );
}
