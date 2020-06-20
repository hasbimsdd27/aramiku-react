import React from "react";

export default (props) => {
  return (
    <>
      <span
        className="right-action-link text-gray"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        style={{ cursor: "pointer" }}
      >
        {props.LabelComponent}{" "}
      </span>
      <div
        className="dropdown-menu dropdown-menu-right"
        x-placement="bottom-end"
        style={{
          position: "absolute",
          willChange: "transform",
          top: "0px",
          left: "0px",
          transform: "translate3d(-92px, 21px, 0px)",
        }}
      >
        {props.DropdownItem.map((item, index) => (
          <div
            className="dropdown-item"
            style={{ cursor: "pointer" }}
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </>
  );
};
