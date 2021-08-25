import React, { useState } from "react";
import "../../../App.scss";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import PaginationFooter from "../../../components/Pagination/PaginationFooter";
import QuickLinks from "../../../components/QuickLink/QuickLinks";
import { quickLinks } from "./config";

export default function AllRights({ match }) {
  const [pageNum, setPageNum] = useState(1);

  return (
    <div>
      <div className="layout-breadcrumb">
        <Breadcrumb path={match.path} />
      </div>
      <h3 className="layout-header">All Legal Rights</h3>
      <div className="layout-content">
        <QuickLinks info={quickLinks} />
      </div>
      <div className="layout-bottom" style={{float: "right"}}>
        <PaginationFooter pageNum={pageNum} setPageNum={setPageNum} totalPageNum={3}/>
      </div>
      
    </div>
  );
}
