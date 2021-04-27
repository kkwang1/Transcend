import React from "react";
import { CardDeck } from "react-bootstrap";
import Button from "./Button";

export default function ButtonsGroup({ info }) {
  return (
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
  );
}
