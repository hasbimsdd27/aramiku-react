import React from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout';
// import Carousel from './components/Carousel';
import AnimeList from './components/AnimeList';

function HomePage() {
    return (
        <MainLayout>
            {/* <Carousel /> */}
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
                            <h6>Featured Videos</h6>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="video-card">
                            <div className="video-card-image">
                                <a className="play-icon" href="/"><i className="fas fa-play-circle"></i></a>
                                <a href="/"><img className="img-fluid" src="assets/images/thumbnail-video.jpg" alt="" /></a>
                                <div className="time">3:50</div>
                            </div>
                            <div className="video-card-body">
                                <div className="video-title">
                                    <a href="/">There are many variations of passages of Lorem</a>
                                </div>
                                <div className="video-page text-success">
                                    Education <a title="" data-placement="top" data-toggle="tooltip" href="/" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></a>
                                </div>
                                <div className="video-view">
                                    1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="video-card">
                            <div className="video-card-image">
                                <a className="play-icon" href="/"><i className="fas fa-play-circle"></i></a>
                                <a href="/"><img className="img-fluid" src="assets/images/thumbnail-video.jpg" alt="" /></a>
                                <div className="time">3:50</div>
                            </div>
                            <div className="video-card-body">
                                <div className="video-title">
                                    <a href="/">There are many variations of passages of Lorem</a>
                                </div>
                                <div className="video-page text-success">
                                    Education <a title="" data-placement="top" data-toggle="tooltip" href="/" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></a>
                                </div>
                                <div className="video-view">
                                    1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="video-card">
                            <div className="video-card-image">
                                <a className="play-icon" href="/"><i className="fas fa-play-circle"></i></a>
                                <a href="/"><img className="img-fluid" src="assets/images/thumbnail-video.jpg" alt="" /></a>
                                <div className="time">3:50</div>
                            </div>
                            <div className="video-card-body">
                                <div className="video-title">
                                    <a href="/">There are many variations of passages of Lorem</a>
                                </div>
                                <div className="video-page text-danger">
                                    Education <a title="" data-placement="top" data-toggle="tooltip" href="/" data-original-title="Unverified"><i className="fas fa-frown text-danger"></i></a>
                                </div>
                                <div className="video-view">
                                    1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="video-card">
                            <div className="video-card-image">
                                <a className="play-icon" href="/"><i className="fas fa-play-circle"></i></a>
                                <a href="/"><img className="img-fluid" src="assets/images/thumbnail-video.jpg" alt="" /></a>
                                <div className="time">3:50</div>
                            </div>
                            <div className="video-card-body">
                                <div className="video-title">
                                    <a href="/">There are many variations of passages of Lorem</a>
                                </div>
                                <div className="video-page text-success">
                                    Education <a title="" data-placement="top" data-toggle="tooltip" href="/" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></a>
                                </div>
                                <div className="video-view">
                                    1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="video-card">
                            <div className="video-card-image">
                                <a className="play-icon" href="/"><i className="fas fa-play-circle"></i></a>
                                <a href="/"><img className="img-fluid" src="assets/images/thumbnail-video.jpg" alt="" /></a>
                                <div className="time">3:50</div>
                            </div>
                            <div className="video-card-body">
                                <div className="video-title">
                                    <a href="/">There are many variations of passages of Lorem</a>
                                </div>
                                <div className="video-page text-success">
                                    Education <a title="" data-placement="top" data-toggle="tooltip" href="/" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></a>
                                </div>
                                <div className="video-view">
                                    1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="video-card">
                            <div className="video-card-image">
                                <a className="play-icon" href="/"><i className="fas fa-play-circle"></i></a>
                                <a href="/"><img className="img-fluid" src="assets/images/thumbnail-video.jpg" alt="" /></a>
                                <div className="time">3:50</div>
                            </div>
                            <div className="video-card-body">
                                <div className="video-title">
                                    <a href="/">There are many variations of passages of Lorem</a>
                                </div>
                                <div className="video-page text-danger">
                                    Education <a title="" data-placement="top" data-toggle="tooltip" href="/" data-original-title="Unverified"><i className="fas fa-frown text-danger"></i></a>
                                </div>
                                <div className="video-view">
                                    1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="video-card">
                            <div className="video-card-image">
                                <a className="play-icon" href="/"><i className="fas fa-play-circle"></i></a>
                                <a href="/"><img className="img-fluid" src="assets/images/thumbnail-video.jpg" alt="" /></a>
                                <div className="time">3:50</div>
                            </div>
                            <div className="video-card-body">
                                <div className="video-title">
                                    <a href="/">There are many variations of passages of Lorem</a>
                                </div>
                                <div className="video-page text-success">
                                    Education <a title="" data-placement="top" data-toggle="tooltip" href="/" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></a>
                                </div>
                                <div className="video-view">
                                    1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="video-card">
                            <div className="video-card-image">
                                <a className="play-icon" href="/"><i className="fas fa-play-circle"></i></a>
                                <a href="/"><img className="img-fluid" src="assets/images/thumbnail-video.jpg" alt="" /></a>
                                <div className="time">3:50</div>
                            </div>
                            <div className="video-card-body">
                                <div className="video-title">
                                    <a href="/">There are many variations of passages of Lorem</a>
                                </div>
                                <div className="video-page text-success">
                                    Education <a title="" data-placement="top" data-toggle="tooltip" href="/" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></a>
                                </div>
                                <div className="video-view">
                                    1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AnimeList />
        </MainLayout>
    );
}

export default HomePage;
