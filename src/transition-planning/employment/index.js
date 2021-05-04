import React from "react";
import "../App.scss";

export default function Employment() {
  const info = [
    {
      title: "Vocational Training",
      backgroundColor: "#F1F1F1",
      color: "#203E45",
    },
    {
      title: "Job Postings",
      backgroundColor: "#F1F1F1",
      color: "#203E45",
    },
    {
      title: "Career Aptitude",
      backgroundColor: "#F1F1F1",
      color: "#203E45",
    },
  ];
  return (
    <>
      <h1 className="layout-header">Employment</h1>
      <p>
        You have indicated that competitive employment is not part of your
        transition plan. We recommend you check out the <a href="">education</a>{" "}
        or <a href="">independent living</a> tabs to find postsecondary
        programs, or <a href="">create your own day program</a> for living at
        home.
      </p>
      <div className="layout-btn">
        <ButtonsGroup info={info} />
      </div>
    </>
  );
}
