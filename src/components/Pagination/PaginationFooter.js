import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import "./style.css";

export default function PaginationFooter(props) {
  const { pageNum, setPageNum, totalPageNum } = props;
  const [startIndex, setStartIndex] = useState(1);
  const [endIndex, setEndIndex] = useState(10);

  function addPaginationItems(num) {
    let res = [];
    for (let i = 1; i < totalPageNum + 1; i++) {
      res.push(
        <Pagination.Item
          onClick={() => setPageNum(i)}
          active={i == pageNum}
          style={{ fontWeight: i == pageNum && "bold" }}
        >
          {i}
        </Pagination.Item>
      );
    }
    return res;
  }

  useEffect(() => {
    if (pageNum <= 10) {
      setStartIndex(pageNum);
    } else if (pageNum > totalPageNum - 5) {
      setStartIndex(totalPageNum - 9);
    } else {
      setStartIndex(pageNum - 5);
    }
    setEndIndex(startIndex + 9);
  }, [pageNum]);

  return (
    <div className="pagination-footer">
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        {addPaginationItems()}
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  );
}
