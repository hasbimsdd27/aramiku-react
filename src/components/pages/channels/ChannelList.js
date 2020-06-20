import React from "react";
import Dropdown from "components/layouts/Dropdown";
import ChannelsCard from "components/layouts/ChannelsCard";

export default (props) => {
  const DummyData = [
    {
      id: 1,
      name: "Channel 1",
      image:
        "https://askbootstrap.com/preview/vidoe-v1-3/theme-four/img/s1.png",
      isSubscribed: false,
      subs: 1000000,
      link: "https://askbootstrap.com/preview/vidoe-v1-3/theme-four/img/s1.png",
    },
    {
      id: 2,
      name: "Channel 1",
      image:
        "https://askbootstrap.com/preview/vidoe-v1-3/theme-four/img/s1.png",
      isSubscribed: true,
      subs: 1000000,
      link: "https://askbootstrap.com/preview/vidoe-v1-3/theme-four/img/s1.png",
    },
  ];

  return (
    <div className="video-block section-padding">
      <div className="row">
        <div className="col-md-12">
          <div className="main-tittle">
            <div className="btn-group float-right right-action">
              <Dropdown
                LabelComponent={
                  <>
                    Sort By{" "}
                    <i className="fa fa-caret-down" aria-hidden="true"></i>
                  </>
                }
                DropdownItem={[
                  <>
                    <i class="fas fa-fw fa-star"></i>&nbsp;TopRated
                  </>,
                  <>
                    <i class="fas fa-fw fa-signal"></i>&nbsp;Viewed
                  </>,
                  <>
                    <i class="fas fa-fw fa-times-circle"></i>&nbsp;Close
                  </>,
                ]}
              />
            </div>
            <h6>Channels</h6>
          </div>
        </div>

        {DummyData.map((item) => (
          <div className="col-xl-3 col-sm-6 mb-3" key={item.id}>
            <ChannelsCard
              Subscriber={item.subs}
              ChannelName={item.name}
              IsSubscribed={item.isSubscribed}
              ImgSrc={item.image}
              ChannelLink={item.link}
            />{" "}
          </div>
        ))}
      </div>{" "}
    </div>
  );
};
