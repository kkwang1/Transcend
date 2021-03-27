import React from "react";
import { CardDeck } from "react-bootstrap";
import Button from "./Button";

export default function ButtonDeck({info}) {
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
