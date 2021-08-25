import React, { useEffect, useState } from "react";
import "../../App.scss";
import PaginationFooter from "../../components/Pagination/PaginationFooter";
import QuestionnaireItem from "./QuestionnaireItem";

export default function CreateAccount() {
  const [pageNum, setPageNum] = useState(1);
  const [isParent, setIsParent] = useState(false);

  return (
    <>
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

      <div className="layout-bottom layout-content" style={{ float: "right" }}>
        <PaginationFooter
          pageNum={pageNum}
          setPageNum={setPageNum}
          totalPageNum={7}
        />
      </div>
    </>
  );
}
