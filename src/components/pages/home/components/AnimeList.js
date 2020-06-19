import React from "react";

const AnimeList = () => {
    return (
        <>
            <hr className="mt-0" />
            <div className="video-block section-padding">
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-title">
                            <div className="btn-group float-right right-action">
                                <a href="/" className="right-action-link text-gray" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Sort by <i className="fa fa-caret-down" aria-hidden="true"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" href="/"><i className="fas fa-fw fa-star"></i> &nbsp; Top Rated</a>
                                    <a className="dropdown-item" href="/"><i className="fas fa-fw fa-signal"></i> &nbsp; Viewed</a>
                                    <a className="dropdown-item" href="/"><i className="fas fa-fw fa-times-circle"></i> &nbsp; Close</a>
                                </div>
                            </div>
                            <h6>Popular Channels</h6>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="channels-card">
                            <div className="channels-card-image">
                                <a href="/"><img className="img-fluid" src="https://askbootstrap.com/preview/vidoe-v1-3/theme-six/img/s1.png" alt="" /></a>
                                <div className="channels-card-image-btn"><button type="button" className="btn btn-outline-danger btn-sm">Subscribe <strong>1.4M</strong></button></div>
                            </div>
                            <div className="channels-card-body">
                                <div className="channels-title">
                                    <a href="/">Channels Name</a>
                                </div>
                                <div className="channels-view">
                                    382,323 subscribers
            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="channels-card">
                            <div className="channels-card-image">
                                <a href="/"><img className="img-fluid" src="https://askbootstrap.com/preview/vidoe-v1-3/theme-six/img/s2.png" alt="" /></a>
                                <div className="channels-card-image-btn"><button type="button" className="btn btn-outline-danger btn-sm">Subscribe <strong>1.4M</strong></button></div>
                            </div>
                            <div className="channels-card-body">
                                <div className="channels-title">
                                    <a href="/">Channels Name</a>
                                </div>
                                <div className="channels-view">
                                    382,323 subscribers
            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="channels-card">
                            <div className="channels-card-image">
                                <a href="/"><img className="img-fluid" src="https://askbootstrap.com/preview/vidoe-v1-3/theme-six/img/s3.png" alt="" /></a>
                                <div className="channels-card-image-btn"><button type="button" className="btn btn-outline-secondary btn-sm">Subscribed <strong>1.4M</strong></button></div>
                            </div>
                            <div className="channels-card-body">
                                <div className="channels-title">
                                    <a href="/">Channels Name <span title="" data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle"></i></span></a>
                                </div>
                                <div className="channels-view">
                                    382,323 subscribers
            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="channels-card">
                            <div className="channels-card-image">
                                <a href="/"><img className="img-fluid" src="https://askbootstrap.com/preview/vidoe-v1-3/theme-six/img/s4.png" alt="" /></a>
                                <div className="channels-card-image-btn"><button type="button" className="btn btn-outline-danger btn-sm">Subscribe <strong>1.4M</strong></button></div>
                            </div>
                            <div className="channels-card-body">
                                <div className="channels-title">
                                    <a href="/">Channels Name</a>
                                </div>
                                <div className="channels-view">
                                    382,323 subscribers
            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AnimeList;