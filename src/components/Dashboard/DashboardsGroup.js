import React from "react";
import { CardDeck } from "react-bootstrap";
import Dashboard from "./Dashboard";
import {dashboardInfo} from '../../transition-planning/education/config';

export default function DashboardGroups({
  info = dashboardInfo, //mock data, remember to remove  
  backgroundColor = "",
  color = "#1B7B89",
}) {
  return (
    // <CardDeck style={{"margin": "10px"}}>
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
