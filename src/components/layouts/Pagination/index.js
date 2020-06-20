import React from "react";
import { Pagination } from "components/utils/PaginationSettings";

export default (props) => {
  const data = Pagination(
    props.FirstPage,
    props.LastPage,
    props.ShowLimit,
    props.CurrentPage
  );
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center pagination-sm mb-4">
        <li
          className={`page-item ${
            props.CurrentPage === props.FirstPage && "disabled"
          }`}
          onClick={() =>
            props.CurrentPage === props.FirstPage
              ? {}
              : props.OnClick(props.CurrentPage - 1)
          }
          style={{ cursor: "pointer" }}
        >
          <span className="page-link">Previous</span>
        </li>
        {data.map((item, index) => (
          <li
            className="page-item"
            key={index}
            onClick={() => item !== "..." && props.OnClick(item)}
            style={{ cursor: "pointer" }}
          >
            <span className="page-link">{item}</span>
          </li>
        ))}

        <li
          className={`page-item ${
            props.CurrentPage === props.LastPage && "disabled"
          }`}
          onClick={() =>
            props.CurrentPage === props.LastPage
              ? {}
              : props.OnClick(props.CurrentPage + 1)
          }
          style={{ cursor: "pointer" }}
        >
          <span className="page-link">Next</span>
        </li>
      </ul>
    </nav>
  );
};
