import React, { useState } from "react";
import "../../App.scss";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
// import PaginationFooter from "../../components/Pagination/PaginationFooter";
import QuickLinks from "../../components/QuickLink/QuickLinks";
import { quickLinks } from "./config";

export default function AllRights({ match }) {
  const [pageNum, setPageNum] = useState(1);

  return (
    <div>
      <div className="layout-breadcrumb">
        <Breadcrumb path={match.path} />
      </div>
      <h3 className="layout-header">All Legal Rights</h3>
      <div className="layout-content layout-bottom">
        <QuickLinks info={quickLinks} />
      </div>
      {/* <PaginationFooter info={quickLinks} pageNum={pageNum} setPageNum={setPageNum} /> */}
    </div>
  );
}
