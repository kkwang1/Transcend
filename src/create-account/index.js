import React, { useEffect, useState } from "react";
import "../App.scss";
import PaginationFooter from "../components/Pagination/PaginationFooter";
import QuestionnaireItem from "./QuestionnaireItem";

export default function CreateAccount() {
  const [pageNum, setPageNum] = useState(1);
  const [isParent, setIsParent] = useState();

  return (
    <>
      <div className="layout-content" style={{}}>
        <QuestionnaireItem
          itemNum={pageNum}
          isParent={isParent}
          setIsParent={setIsParent}
        />
      </div>

      <div className="layout-bottom" style={{ float: "right" }}>
        <PaginationFooter
          pageNum={pageNum}
          setPageNum={setPageNum}
          totalPageNum={7}
        />
      </div>
    </>
  );
}
