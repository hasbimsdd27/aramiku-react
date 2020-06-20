import React from "react";
import numeral from "numeral";

export default (props) => {
  return (
    <>
      <div className="channels-card">
        <div className="channels-card-image">
          <img
            src={props.ImgSrc}
            alt={props.ImgAlt ? props.imgAlt : props.ImgSrc}
            style={{ cursor: "pointer" }}
          />
        </div>
        {props.IsSubscribed ? (
          <div className="channels-card-image-btn">
            <button type="button" className="btn btn-outline-secondary btn-sm">
              Subscribed <b>{numeral(props.Subscriber).format("0.00 a")}</b>
            </button>
          </div>
        ) : (
          <div className="channels-card-image-btn">
            <button type="button" className="btn btn-outline-danger btn-sm">
              Subscribe <b>{numeral(props.Subscriber).format("0.00 a")}</b>
            </button>
          </div>
        )}
        <div className="channels-card-body">
          <div className="channels-tittle">
            <a
              href={props.ChannelLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.ChannelName}
            </a>
          </div>
          <div className="channels-view">{props.Subscriber} subscribers</div>
        </div>{" "}
      </div>
    </>
  );
};
