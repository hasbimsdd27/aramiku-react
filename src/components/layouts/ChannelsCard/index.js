import React from "react";
import { Numerus } from "components/utils/Numerus";
import { Seperate } from "components/utils/Separator";

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
              Subscribed <b>{Numerus(props.Subscriber, 2)}</b>
            </button>
          </div>
        ) : (
          <div className="channels-card-image-btn">
            <button type="button" className="btn btn-outline-danger btn-sm">
              Subscribe <b>{Numerus(props.Subscriber, 2)}</b>
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
          <div className="channels-view">
            {Seperate(props.Subscriber)} subscribers
          </div>
        </div>{" "}
      </div>
    </>
  );
};
