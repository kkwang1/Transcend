import React from "react";
import Select from "./Select";

/* 
Name: info
Type: Array
Description:
  an array of objects that has the following properties (all required):
    - title: string
    - options: string array
*/
export default function SelectGroups({ info }) {
  return (
    <div style={{ display: "table", width: "100%"}}>
    {info.map((s) => (
      <Select title={s.title} options={s.options} />
    ))}
  </div>
  );
}
