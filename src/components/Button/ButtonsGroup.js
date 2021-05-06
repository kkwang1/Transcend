import React from "react";
import { CardDeck } from "react-bootstrap";
import Button from "./Button";
import "./style.css";

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
          />
        ))}
      </CardDeck>
    </div>
  );
}
