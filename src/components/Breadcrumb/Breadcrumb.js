import React from "react";
import { page } from "./config";

export default function Breadcrumb({ path }) {
  const pathList = path.split("/").filter((s) => s != "");
  const pageList = pathList.map((s) => page[s]);
  return (
    <p>
      <i>
        {pageList.map((s, index) => {
          if (index != pageList.length - 1) {
            return (
              <span style={{ color: "#BDBDBD" }}>
                <a
                  href={"/" + pathList.slice(0, index + 1).join("/")}
                  style={{ color: "#BDBDBD" }}
                >
                  {s}
                </a>{" "}
                >>{" "}
              </span>
            );
          }
          return (
            <a
              href={"/" + pathList.slice(0, index + 1).join("/")}
              style={{ color: "#203E45" }}
            >
              {s}
            </a>
          );
        })}
      </i>
    </p>
  );
}
