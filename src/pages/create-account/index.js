import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import "../../App.scss";
import PaginationFooter from "../../components/Pagination/PaginationFooter";
import QuestionnaireItem from "./QuestionnaireItem";

export default function CreateAccount() {
  const [pageNum, setPageNum] = useState(1);
  const [isParent, setIsParent] = useState(false);
  let history = useHistory();

  return (
    <>
      <h1
        className="layout-header"
        style={{ marginTop: "50px", marginBottom: "0px" }}
      >
        Create Account
      </h1>
      <div
        style={{
          display: "table",
          height: "500px",
          margin: "auto",
        }}
      >
        <div style={{ display: "table-cell", verticalAlign: "middle" }}>
          <QuestionnaireItem
            itemNum={pageNum}
            isParent={isParent}
            setIsParent={setIsParent}
          />
        </div>
      </div>
      {pageNum == 7 ? (
        <>
          <div>
            <PaginationFooter
              pageNum={pageNum}
              setPageNum={setPageNum}
              totalPageNum={7}
            />
          </div>
          <div className="layout-bottom" style={{ margin: "25px 40%" }}>
            <Button
              className="layout-btn"
              onClick={() => history.push(`/userprofile`)}
            >
              CREATE
            </Button>
          </div>
        </>
      ) : (
        <div className="layout-bottom layout-content">
          <PaginationFooter
            pageNum={pageNum}
            setPageNum={setPageNum}
            totalPageNum={7}
          />
        </div>
      )}
    </>
  );
}
