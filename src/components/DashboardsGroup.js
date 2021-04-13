import React from "react";
import { CardDeck } from "react-bootstrap";
import Dashboard from "./Dashboard";

export default function DashboardGroups({
  info,
  backgroundColor = "",
  color = "#1B7B89",
}) {
  return (
    <CardDeck>
      {info.map((s) => (
        <Dashboard
          title={s.title}
          desc={s.desc}
          schoolsInfo={s.schoolsInfo}
          url={s.url}
          backgroundColor={backgroundColor}
          color={color}
        />
      ))}
    </CardDeck>
  );
}
