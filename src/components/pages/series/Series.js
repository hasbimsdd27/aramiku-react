import React from "react";
import MainLayout from '../../layouts/MainLayout/MainLayout';

const SeriesPage = () => {
    return (
        <MainLayout>
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
                            <h6>Channels</h6>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <article className="col-xl-3 col-md-6 col-sm-12" data-alternate="[Welcome to Demon School! Iruma-kun]" data-anime-id="9215" data-controller="anime-card" data-english="Welcome to Demon School, Iruma-kun" data-native="é&shy;”å…¥ã‚Šã¾ã—ãŸï¼å…¥é–“ãã‚“" data-premiere-precision="4" data-premiere="1578126900" data-romaji="Mairimashita! Iruma-kun" data-target="anime-card-list.card">
                                <div className="anime-card">
                                    <h5 className="main-title" style={{}}>
                                        <a data-target="anime-card.mainTitle" href="https://www.livechart.me/anime/9215">
                                            Mairimashita! Iruma-kun ajsaj jkdjb jkdsj jkjksd
                                </a>
                                    </h5>
                                    <ol className="anime-tags">
                                        <li><a href="https://www.livechart.me/tags/5">Comedy</a></li>
                                        <li><a href="https://www.livechart.me/tags/7">Demons</a></li>
                                        <li><a href="https://www.livechart.me/tags/10">Fantasy</a></li>
                                        <li><a href="https://www.livechart.me/tags/43">Shounen</a></li>
                                        <li><a href="https://www.livechart.me/tags/52">Supernatural</a></li>
                                    </ol>
                                    <div className="poster-container">
                                        <div className="episode-countdown" data-action="click->anime-card#showEpisodeTime" data-target="anime-card.countdown" title="Click to view time/convert to another time zone">
                                            <span className="episode-label">EP15</span>:&nbsp;<time data-timestamp="1578731700">0d 16h 17m 22s</time></div>
                                        <img alt="Mairimashita! Iruma-kun" className="lazyload visible" data-lazy-loaded="true" data-src="https://u.livechart.me/anime/9215/poster_image/fa375adc062cea4399cde9bf04af00c3.png?style=small&amp;format=jpg" data-srcset="https://u.livechart.me/anime/9215/poster_image/fa375adc062cea4399cde9bf04af00c3.png?style=small&amp;format=jpg 1x, https://u.livechart.me/anime/9215/poster_image/fa375adc062cea4399cde9bf04af00c3.png?style=large&amp;format=jpg 2x" data-target="anime-card.poster" height="250" src="https://u.livechart.me/anime/9215/poster_image/fa375adc062cea4399cde9bf04af00c3.png?style=small&amp;format=jpg" srcset="https://u.livechart.me/anime/9215/poster_image/fa375adc062cea4399cde9bf04af00c3.png?style=small&amp;format=jpg 1x, https://u.livechart.me/anime/9215/poster_image/fa375adc062cea4399cde9bf04af00c3.png?style=large&amp;format=jpg 2x" style={{ borderStyle: "none", boxSizing: "inherit", display: "inline-block", height: "auto", maxWidth: "100%", opacity: 1, transition: "opacity 0.218s ease-in-out 0s", verticalAlign: "middle" }} width="175" />
                                        <div className="anime-extras">
                                            <div className="anime-extra">
                                                Leftover</div>
                                            <div className="anime-avg-user-rating" data-action="click->anime-card#showLibraryEditor" title="8.26 out of 10 based on 717 user ratings">
                                                <i className="icon-star"></i>8.26</div>
                                        </div>
                                    </div>
                                    <div className="anime-info">
                                        <ul className="anime-studios">
                                            <li style={{ boxSizing: "inherit", display: "inline-block", fontSize: "inherit", margin: "0px", padding: "0px" }}><a data-target="anime-card.studioLink" href="https://www.livechart.me/studios/19" style={{ backgroundColor: "transparent", boxSizing: "inherit", color: "#3b97fc", cursor: "pointer", lineHeight: "inherit", textDecorationLine: "none" }}>BN Pictures</a></li>
                                        </ul>
                                        <div className="anime-date" data-action="click->anime-card#showPremiereDateTime">
                                            Jan 4, 2020 at 5:35pm JST</div>
                                        <div className="anime-metadata">
                                            <div className="anime-source">
                                                Manga</div>
                                            <div className="anime-episodes">
                                                23 eps Ã— 25 min</div>
                                        </div>
                                        <div className="anime-synopsis">
                                            <div>
                                                A boy's chaotic life in a "prestigious" boarding school for elite demons!</div>
                                            <div>
                                                Iruma Suzuki, human, 14, one day finds himself sold to the devil. To add to his predicament, his doting owner and self-appointed "Grandpa" is the principal at his new school. Now Iruma must deal with a haughty student who challenges him to a duel, a girl with adjustment issues, and so many more scary beings! Can this ultimate pacifist dodge the slings and arrows that are flung his way? As he struggles frantically, Iruma's innate kindness begins to win over enemies.</div>
                                            <div className="text-italic">
                                                [Source:&nbsp;<a href="https://pf.nhk-ep.co.jp/detail/2194" rel="nofollow noopener" style={{ backgroundColor: "transparent", boxSizing: "inherit", color: "#3b97fc", cursor: "pointer", lineHeight: "inherit", textDecorationLine: "none" }}>NHK Enterprises</a>]</div>
                                        </div>
                                    </div>
                                    <ul className="related-links">
                                        <li style={{ boxSizing: "inherit", display: "inline-block", fontSize: "inherit", margin: "0px", padding: "0px" }}>
                                            <a className="website-icon" href="http://www6.nhk.or.jp/anime/program/detail.html?i=iruma" rel="noopener nofollow" style={{ background: "-webkit-image-set(url(https://s.livechart.me/assets/light-theme-sprites-7412705806c3adc4500d50bd771722350459011cb3b1169e4191e8b123c5a971.png) 1x,url(https://s.livechart.me/assets/light-theme-sprites@2x-fcc01a2e6e2361f12b37111a38cb85c8d61c7080313ba0a595903f4067432053.png) 2x) 0px -210px / 60px 390px no-repeat", borderRadius: "50%", boxSizing: "inherit", color: "#3b97fc", cursor: "pointer", display: "inline-block", height: "30px", lineHeight: "inherit", textDecorationLine: "none", width: "30px" }} ></a></li>
                                        <li style={{ boxSizing: "inherit", display: "inline-block", fontSize: "inherit", margin: "0px", padding: "0px" }}>
                                            <a className="preview-icon" data-action="anime-card#showVideos" href="https://www.livechart.me/anime/9215/videos" style={{ background: "-webkit-image-set(url(https://s.livechart.me/assets/light-theme-sprites-7412705806c3adc4500d50bd771722350459011cb3b1169e4191e8b123c5a971.png) 1x, url(https://s.livechart.me/assets/light-theme-sprites@2x-fcc01a2e6e2361f12b37111a38cb85c8d61c7080313ba0a595903f4067432053.png) 2x) 0px -270px / 60px 390px no-repeat", borderRadius: "50%", boxSizing: "inherit", color: "#3b97fc", cursor: "pointer", display: "inline-block", height: "30px", lineHeight: "inherit", textDecorationLine: "none", width: "30px" }}></a></li>
                                        <li style={{ boxSizing: "inherit", display: "inline-block", fontSize: "inherit", margin: "0px", padding: "0px" }}>
                                            <a className="watch-icon" data-action="anime-card#showStreams" href="https://www.livechart.me/anime/9215/streams" style={{ background: "-webkit-image-set(url(https://s.livechart.me/assets/light-theme-sprites-7412705806c3adc4500d50bd771722350459011cb3b1169e4191e8b123c5a971.png) 1x, url(https://s.livechart.me/assets/light-theme-sprites@2x-fcc01a2e6e2361f12b37111a38cb85c8d61c7080313ba0a595903f4067432053.png) 2x) 0px 0px / 60px 390px no-repeat", borderRadius: "50%", boxSizing: "inherit", color: "#3b97fc", cursor: "pointer", display: "inline-block", height: "30px", lineHeight: "inherit", textDecorationLine: "none", width: "30px" }}></a></li>
                                        <li style={{ boxSizing: "inherit", display: "inline-block", fontSize: "inherit", margin: "0px", padding: "0px" }}>
                                            <a className="anilist-icon" href="https://anilist.co/anime/107693" rel="noopener nofollow" style={{ background: "-webkit-image-set(url(https://s.livechart.me/assets/light-theme-sprites-7412705806c3adc4500d50bd771722350459011cb3b1169e4191e8b123c5a971.png) 1x, url(https://s.livechart.me/assets/light-theme-sprites@2x-fcc01a2e6e2361f12b37111a38cb85c8d61c7080313ba0a595903f4067432053.png) 2x) 0px -30px / 60px 390px no-repeat", borderRadius: "50%", boxSizing: "inherit", color: "#3b97fc", cursor: "pointer", display: "inline-block", height: "30px", lineHeight: "inherit", textDecorationLine: "none", width: "30px" }} ></a></li>
                                        <li style={{ boxSizing: "inherit", display: "inline-block", fontSize: "inherit", margin: "0px", padding: "0px" }}>
                                            <a className="mal-icon" href="https://myanimelist.net/anime/39196" rel="noopener nofollow" style={{ background: "-webkit-image-set(url(https://s.livechart.me/assets/light-theme-sprites-7412705806c3adc4500d50bd771722350459011cb3b1169e4191e8b123c5a971.png) 1x, url(https://s.livechart.me/assets/light-theme-sprites@2x-fcc01a2e6e2361f12b37111a38cb85c8d61c7080313ba0a595903f4067432053.png) 2x) 0px -330px / 60px 390px no-repeat", borderRadius: "50%", boxSizing: "inherit", color: "#3b97fc", cursor: "pointer", display: "inline-block", height: "30px", lineHeight: "inherit", textDecorationLine: "none", width: "30px" }} ></a></li>
                                        <li style={{ boxSizing: "inherit", display: "inline-block", fontSize: "inherit", margin: "0px", padding: "0px" }}>
                                            <a className="anidb-icon" href="http://anidb.net/a14660" rel="noopener nofollow" style={{ background: "-webkit-image-set(url(https://s.livechart.me/assets/light-theme-sprites-7412705806c3adc4500d50bd771722350459011cb3b1169e4191e8b123c5a971.png) 1x, url(https://s.livechart.me/assets/light-theme-sprites@2x-fcc01a2e6e2361f12b37111a38cb85c8d61c7080313ba0a595903f4067432053.png) 2x) 0px -300px / 60px 390px no-repeat", borderRadius: "50%", boxSizing: "inherit", color: "#3b97fc", cursor: "pointer", display: "inline-block", height: "30px", lineHeight: "inherit", textDecorationLine: "none", width: "30px" }} ></a></li>
                                        <li style={{ boxSizing: "inherit", display: "inline-block", fontSize: "inherit", margin: "0px", padding: "0px" }}>
                                            <a className="anime-planet-icon" href="http://www.anime-planet.com/anime/mairimashita-iruma-kun" rel="noopener nofollow" style={{ background: "-webkit-image-set(url(https://s.livechart.me/assets/light-theme-sprites-7412705806c3adc4500d50bd771722350459011cb3b1169e4191e8b123c5a971.png) 1x, url(https://s.livechart.me/assets/light-theme-sprites@2x-fcc01a2e6e2361f12b37111a38cb85c8d61c7080313ba0a595903f4067432053.png) 2x) 0px -180px / 60px 390px no-repeat", borderRadius: "50%", boxSizing: "inherit", color: "#3b97fc", cursor: "pointer", display: "inline-block", height: "30px", lineHeight: "inherit", textDecorationLine: "none", width: "30px" }} ></a></li>
                                        <li style={{ boxSizing: "inherit", display: "inline-block", fontSize: "inherit", margin: "0px", padding: "0px" }}>
                                            <a className="anisearch-icon" href="https://www.anisearch.com/anime/14154" rel="noopener nofollow" style={{ background: "-webkit-image-set(url(https://s.livechart.me/assets/light-theme-sprites-7412705806c3adc4500d50bd771722350459011cb3b1169e4191e8b123c5a971.png) 1x, url(https://s.livechart.me/assets/light-theme-sprites@2x-fcc01a2e6e2361f12b37111a38cb85c8d61c7080313ba0a595903f4067432053.png) 2x) 0px -60px / 60px 390px no-repeat", borderRadius: "50%", boxSizing: "inherit", color: "#3b97fc", cursor: "pointer", display: "inline-block", height: "30px", lineHeight: "inherit", textDecorationLine: "none", width: "30px" }} ></a></li>
                                        <li style={{ boxSizing: "inherit", display: "inline-block", fontSize: "inherit", margin: "0px", padding: "0px" }}>
                                            <a className="kitsu-icon" href="https://kitsu.io/anime/42310" rel="noopener nofollow" style={{ background: "-webkit-image-set(url(https://s.livechart.me/assets/light-theme-sprites-7412705806c3adc4500d50bd771722350459011cb3b1169e4191e8b123c5a971.png) 1x, url(https://s.livechart.me/assets/light-theme-sprites@2x-fcc01a2e6e2361f12b37111a38cb85c8d61c7080313ba0a595903f4067432053.png) 2x) -30px -240px / 60px 390px no-repeat", borderRadius: "50%", boxSizing: "inherit", color: "#3b97fc", cursor: "pointer", display: "inline-block", height: "30px", lineHeight: "inherit", textDecorationLine: "none", width: "30px" }} ></a></li>
                                        <li style={{ boxSizing: "inherit", display: "inline-block", fontSize: "inherit", margin: "0px", padding: "0px" }}>
                                            <a className="crunchyroll-icon" href="http://www.crunchyroll.com/welcome-to-demon-school-iruma-kun" rel="noopener nofollow" style={{ background: "-webkit-image-set(url(https://s.livechart.me/assets/light-theme-sprites-7412705806c3adc4500d50bd771722350459011cb3b1169e4191e8b123c5a971.png) 1x, url(https://s.livechart.me/assets/light-theme-sprites@2x-fcc01a2e6e2361f12b37111a38cb85c8d61c7080313ba0a595903f4067432053.png) 2x) 0px -360px / 60px 390px no-repeat", borderRadius: "50%", boxSizing: "inherit", color: "#3b97fc", cursor: "pointer", display: "inline-block", height: "30px", lineHeight: "inherit", textDecorationLine: "none", width: "30px" }} ></a></li>
                                    </ul>
                                </div>
                            </article>
                            <article className="col-xl-3 col-md-6 col-sm-12" data-alternate="[Welcome to Demon School! Iruma-kun]" data-anime-id="9215" data-controller="anime-card" data-english="Welcome to Demon School, Iruma-kun" data-native="é&shy;”å…¥ã‚Šã¾ã—ãŸï¼å…¥é–“ãã‚“" data-premiere-precision="4" data-premiere="1578126900" data-romaji="Mairimashita! Iruma-kun" data-target="anime-card-list.card">
                                <div className="anime-card">
                                    <h5 className="main-title" style={{}}>
                                        <a data-target="anime-card.mainTitle" href="https://www.livechart.me/anime/9215">
                                            Mairimashita! Iruma-kun ajsaj jkdjb jkdsj jkjksd
                                </a>
                                    </h5>
                                    <ol className="anime-tags">
                                        <li><a href="https://www.livechart.me/tags/5">Comedy</a></li>
                                        <li><a href="https://www.livechart.me/tags/7">Demons</a></li>
                                        <li><a href="https://www.livechart.me/tags/10">Fantasy</a></li>
                                        <li><a href="https://www.livechart.me/tags/43">Shounen</a></li>
                                        <li><a href="https://www.livechart.me/tags/52">Supernatural</a></li>
                                    </ol>
                                    <div className="poster-container">
                                        <div className="episode-countdown" data-action="click->anime-card#showEpisodeTime" data-target="anime-card.countdown" title="Click to view time/convert to another time zone">
                                            <span className="episode-label">EP15</span>:&nbsp;<time data-timestamp="1578731700">0d 16h 17m 22s</time></div>
                                        <img alt="Mairimashita! Iruma-kun" className="lazyload visible" data-lazy-loaded="true" data-src="https://u.livechart.me/anime/9215/poster_image/fa375adc062cea4399cde9bf04af00c3.png?style=small&amp;format=jpg" data-srcset="https://u.livechart.me/anime/9215/poster_image/fa375adc062cea4399cde9bf04af00c3.png?style=small&amp;format=jpg 1x, https://u.livechart.me/anime/9215/poster_image/fa375adc062cea4399cde9bf04af00c3.png?style=large&amp;format=jpg 2x" data-target="anime-card.poster" height="250" src="https://u.livechart.me/anime/9215/poster_image/fa375adc062cea4399cde9bf04af00c3.png?style=small&amp;format=jpg" srcset="https://u.livechart.me/anime/9215/poster_image/fa375adc062cea4399cde9bf04af00c3.png?style=small&amp;format=jpg 1x, https://u.livechart.me/anime/9215/poster_image/fa375adc062cea4399cde9bf04af00c3.png?style=large&amp;format=jpg 2x" style={{ borderStyle: "none", boxSizing: "inherit", display: "inline-block", height: "auto", maxWidth: "100%", opacity: 1, transition: "opacity 0.218s ease-in-out 0s", verticalAlign: "middle" }} width="175" />
                                        <div className="anime-extras">
                                            <div className="anime-extra">
                                                Leftover</div>
                                            <div className="anime-avg-user-rating" data-action="click->anime-card#showLibraryEditor" title="8.26 out of 10 based on 717 user ratings">
                                                <i className="icon-star"></i>8.26</div>
                                        </div>
                                    </div>
                                    <div className="anime-info">
                                        <ul className="anime-studios">
                                            <li style={{ boxSizing: "inherit", display: "inline-block", fontSize: "inherit", margin: "0px", padding: "0px" }}><a data-target="anime-card.studioLink" href="https://www.livechart.me/studios/19" style={{ backgroundColor: "transparent", boxSizing: "inherit", color: "#3b97fc", cursor: "pointer", lineHeight: "inherit", textDecorationLine: "none" }}>BN Pictures</a></li>
                                        </ul>
                                        <div className="anime-date" data-action="click->anime-card#showPremiereDateTime">
                                            Jan 4, 2020 at 5:35pm JST</div>
                                        <div className="anime-metadata">
                                            <div className="anime-source">
                                                Manga</div>
                                            <div className="anime-episodes">
                                                23 eps Ã— 25 min</div>
                                        </div>
                                        <div className="anime-synopsis">
                                            <div>
                                                A boy's chaotic life in a "prestigious" boarding school for elite demons!</div>
                                            <div>
                                                Iruma Suzuki, human, 14, one day finds himself sold to the devil. To add to his predicament, his doting owner and self-appointed "Grandpa" is the principal at his new school. Now Iruma must deal with a haughty student who challenges him to a duel, a girl with adjustment issues, and so many more scary beings! Can this ultimate pacifist dodge the slings and arrows that are flung his way? As he struggles frantically, Iruma's innate kindness begins to win over enemies.</div>
                                            <div className="text-italic">
                                                [Source:&nbsp;<a href="https://pf.nhk-ep.co.jp/detail/2194" rel="nofollow noopener" style={{ backgroundColor: "transparent", boxSizing: "inherit", color: "#3b97fc", cursor: "pointer", lineHeight: "inherit", textDecorationLine: "none" }}>NHK Enterprises</a>]</div>
                                        </div>
                                    </div>
                                    <ul className="related-links">
                                        <li style={{ boxSizing: "inherit", display: "inline-block", fontSize: "inherit", margin: "0px", padding: "0px" }}>
                                            <a className="website-icon" href="http://www6.nhk.or.jp/anime/program/detail.html?i=iruma" rel="noopener nofollow" style={{ background: "-webkit-image-set(url(https://s.livechart.me/assets/light-theme-sprites-7412705806c3adc4500d50bd771722350459011cb3b1169e4191e8b123c5a971.png) 1x,url(https://s.livechart.me/assets/light-theme-sprites@2x-fcc01a2e6e2361f12b37111a38cb85c8d61c7080313ba0a595903f4067432053.png) 2x) 0px -210px / 60px 390px no-repeat", borderRadius: "50%", boxSizing: "inherit", color: "#3b97fc", cursor: "pointer", display: "inline-block", height: "30px", lineHeight: "inherit", textDecorationLine: "none", width: "30px" }} ></a></li>
                                        <li style={{ boxSizing: "inherit", display: "inline-block", fontSize: "inherit", margin: "0px", padding: "0px" }}>
                                            <a className="preview-icon" data-action="anime-card#showVideos" href="https://www.livechart.me/anime/9215/videos" style={{ background: "-webkit-image-set(url(https://s.livechart.me/assets/light-theme-sprites-7412705806c3adc4500d50bd771722350459011cb3b1169e4191e8b123c5a971.png) 1x, url(https://s.livechart.me/assets/light-theme-sprites@2x-fcc01a2e6e2361f12b37111a38cb85c8d61c7080313ba0a595903f4067432053.png) 2x) 0px -270px / 60px 390px no-repeat", borderRadius: "50%", boxSizing: "inherit", color: "#3b97fc", cursor: "pointer", display: "inline-block", height: "30px", lineHeight: "inherit", textDecorationLine: "none", width: "30px" }}></a></li>
                                        <li style={{ boxSizing: "inherit", display: "inline-block", fontSize: "inherit", margin: "0px", padding: "0px" }}>
                                            <a className="watch-icon" data-action="anime-card#showStreams" href="https://www.livechart.me/anime/9215/streams" style={{ background: "-webkit-image-set(url(https://s.livechart.me/assets/light-theme-sprites-7412705806c3adc4500d50bd771722350459011cb3b1169e4191e8b123c5a971.png) 1x, url(https://s.livechart.me/assets/light-theme-sprites@2x-fcc01a2e6e2361f12b37111a38cb85c8d61c7080313ba0a595903f4067432053.png) 2x) 0px 0px / 60px 390px no-repeat", borderRadius: "50%", boxSizing: "inherit", color: "#3b97fc", cursor: "pointer", display: "inline-block", height: "30px", lineHeight: "inherit", textDecorationLine: "none", width: "30px" }}></a></li>
                                        <li style={{ boxSizing: "inherit", display: "inline-block", fontSize: "inherit", margin: "0px", padding: "0px" }}>
                                            <a className="anilist-icon" href="https://anilist.co/anime/107693" rel="noopener nofollow" style={{ background: "-webkit-image-set(url(https://s.livechart.me/assets/light-theme-sprites-7412705806c3adc4500d50bd771722350459011cb3b1169e4191e8b123c5a971.png) 1x, url(https://s.livechart.me/assets/light-theme-sprites@2x-fcc01a2e6e2361f12b37111a38cb85c8d61c7080313ba0a595903f4067432053.png) 2x) 0px -30px / 60px 390px no-repeat", borderRadius: "50%", boxSizing: "inherit", color: "#3b97fc", cursor: "pointer", display: "inline-block", height: "30px", lineHeight: "inherit", textDecorationLine: "none", width: "30px" }} ></a></li>
                                        <li style={{ boxSizing: "inherit", display: "inline-block", fontSize: "inherit", margin: "0px", padding: "0px" }}>
                                            <a className="mal-icon" href="https://myanimelist.net/anime/39196" rel="noopener nofollow" style={{ background: "-webkit-image-set(url(https://s.livechart.me/assets/light-theme-sprites-7412705806c3adc4500d50bd771722350459011cb3b1169e4191e8b123c5a971.png) 1x, url(https://s.livechart.me/assets/light-theme-sprites@2x-fcc01a2e6e2361f12b37111a38cb85c8d61c7080313ba0a595903f4067432053.png) 2x) 0px -330px / 60px 390px no-repeat", borderRadius: "50%", boxSizing: "inherit", color: "#3b97fc", cursor: "pointer", display: "inline-block", height: "30px", lineHeight: "inherit", textDecorationLine: "none", width: "30px" }} ></a></li>
                                        <li style={{ boxSizing: "inherit", display: "inline-block", fontSize: "inherit", margin: "0px", padding: "0px" }}>
                                            <a className="anidb-icon" href="http://anidb.net/a14660" rel="noopener nofollow" style={{ background: "-webkit-image-set(url(https://s.livechart.me/assets/light-theme-sprites-7412705806c3adc4500d50bd771722350459011cb3b1169e4191e8b123c5a971.png) 1x, url(https://s.livechart.me/assets/light-theme-sprites@2x-fcc01a2e6e2361f12b37111a38cb85c8d61c7080313ba0a595903f4067432053.png) 2x) 0px -300px / 60px 390px no-repeat", borderRadius: "50%", boxSizing: "inherit", color: "#3b97fc", cursor: "pointer", display: "inline-block", height: "30px", lineHeight: "inherit", textDecorationLine: "none", width: "30px" }} ></a></li>
                                        <li style={{ boxSizing: "inherit", display: "inline-block", fontSize: "inherit", margin: "0px", padding: "0px" }}>
                                            <a className="anime-planet-icon" href="http://www.anime-planet.com/anime/mairimashita-iruma-kun" rel="noopener nofollow" style={{ background: "-webkit-image-set(url(https://s.livechart.me/assets/light-theme-sprites-7412705806c3adc4500d50bd771722350459011cb3b1169e4191e8b123c5a971.png) 1x, url(https://s.livechart.me/assets/light-theme-sprites@2x-fcc01a2e6e2361f12b37111a38cb85c8d61c7080313ba0a595903f4067432053.png) 2x) 0px -180px / 60px 390px no-repeat", borderRadius: "50%", boxSizing: "inherit", color: "#3b97fc", cursor: "pointer", display: "inline-block", height: "30px", lineHeight: "inherit", textDecorationLine: "none", width: "30px" }} ></a></li>
                                        <li style={{ boxSizing: "inherit", display: "inline-block", fontSize: "inherit", margin: "0px", padding: "0px" }}>
                                            <a className="anisearch-icon" href="https://www.anisearch.com/anime/14154" rel="noopener nofollow" style={{ background: "-webkit-image-set(url(https://s.livechart.me/assets/light-theme-sprites-7412705806c3adc4500d50bd771722350459011cb3b1169e4191e8b123c5a971.png) 1x, url(https://s.livechart.me/assets/light-theme-sprites@2x-fcc01a2e6e2361f12b37111a38cb85c8d61c7080313ba0a595903f4067432053.png) 2x) 0px -60px / 60px 390px no-repeat", borderRadius: "50%", boxSizing: "inherit", color: "#3b97fc", cursor: "pointer", display: "inline-block", height: "30px", lineHeight: "inherit", textDecorationLine: "none", width: "30px" }} ></a></li>
                                        <li style={{ boxSizing: "inherit", display: "inline-block", fontSize: "inherit", margin: "0px", padding: "0px" }}>
                                            <a className="kitsu-icon" href="https://kitsu.io/anime/42310" rel="noopener nofollow" style={{ background: "-webkit-image-set(url(https://s.livechart.me/assets/light-theme-sprites-7412705806c3adc4500d50bd771722350459011cb3b1169e4191e8b123c5a971.png) 1x, url(https://s.livechart.me/assets/light-theme-sprites@2x-fcc01a2e6e2361f12b37111a38cb85c8d61c7080313ba0a595903f4067432053.png) 2x) -30px -240px / 60px 390px no-repeat", borderRadius: "50%", boxSizing: "inherit", color: "#3b97fc", cursor: "pointer", display: "inline-block", height: "30px", lineHeight: "inherit", textDecorationLine: "none", width: "30px" }} ></a></li>
                                        <li style={{ boxSizing: "inherit", display: "inline-block", fontSize: "inherit", margin: "0px", padding: "0px" }}>
                                            <a className="crunchyroll-icon" href="http://www.crunchyroll.com/welcome-to-demon-school-iruma-kun" rel="noopener nofollow" style={{ background: "-webkit-image-set(url(https://s.livechart.me/assets/light-theme-sprites-7412705806c3adc4500d50bd771722350459011cb3b1169e4191e8b123c5a971.png) 1x, url(https://s.livechart.me/assets/light-theme-sprites@2x-fcc01a2e6e2361f12b37111a38cb85c8d61c7080313ba0a595903f4067432053.png) 2x) 0px -360px / 60px 390px no-repeat", borderRadius: "50%", boxSizing: "inherit", color: "#3b97fc", cursor: "pointer", display: "inline-block", height: "30px", lineHeight: "inherit", textDecorationLine: "none", width: "30px" }} ></a></li>
                                    </ul>
                                </div>
                            </article>
                            <article className="col-xl-3 col-md-6 col-sm-12" data-alternate="[Welcome to Demon School! Iruma-kun]" data-anime-id="9215" data-controller="anime-card" data-english="Welcome to Demon School, Iruma-kun" data-native="é&shy;”å…¥ã‚Šã¾ã—ãŸï¼å…¥é–“ãã‚“" data-premiere-precision="4" data-premiere="1578126900" data-romaji="Mairimashita! Iruma-kun" data-target="anime-card-list.card">
                                <div className="anime-card">
                                    <h5 className="main-title" style={{}}>
                                        <a data-target="anime-card.mainTitle" href="https://www.livechart.me/anime/9215">
                                            Mairimashita! Iruma-kun ajsaj jkdjb jkdsj jkjksd
                                </a>
                                    </h5>
                                    <ol className="anime-tags">
                                        <li><a href="https://www.livechart.me/tags/5">Comedy</a></li>
                                        <li><a href="https://www.livechart.me/tags/7">Demons</a></li>
                                        <li><a href="https://www.livechart.me/tags/10">Fantasy</a></li>
                                        <li><a href="https://www.livechart.me/tags/43">Shounen</a></li>
                                        <li><a href="https://www.livechart.me/tags/52">Supernatural</a></li>
                                    </ol>
                                    <div className="poster-container">
                                        <div className="episode-countdown" data-action="click->anime-card#showEpisodeTime" data-target="anime-card.countdown" title="Click to view time/convert to another time zone">
                                            <span className="episode-label">EP15</span>:&nbsp;<time data-timestamp="1578731700">0d 16h 17m 22s</time></div>
                                        <img alt="Mairimashita! Iruma-kun" className="lazyload visible" data-lazy-loaded="true" data-src="https://u.livechart.me/anime/9215/poster_image/fa375adc062cea4399cde9bf04af00c3.png?style=small&amp;format=jpg" data-srcset="https://u.livechart.me/anime/9215/poster_image/fa375adc062cea4399cde9bf04af00c3.png?style=small&amp;format=jpg 1x, https://u.livechart.me/anime/9215/poster_image/fa375adc062cea4399cde9bf04af00c3.png?style=large&amp;format=jpg 2x" data-target="anime-card.poster" height="250" src="https://u.livechart.me/anime/9215/poster_image/fa375adc062cea4399cde9bf04af00c3.png?style=small&amp;format=jpg" srcset="https://u.livechart.me/anime/9215/poster_image/fa375adc062cea4399cde9bf04af00c3.png?style=small&amp;format=jpg 1x, https://u.livechart.me/anime/9215/poster_image/fa375adc062cea4399cde9bf04af00c3.png?style=large&amp;format=jpg 2x" style={{ borderStyle: "none", boxSizing: "inherit", display: "inline-block", height: "auto", maxWidth: "100%", opacity: 1, transition: "opacity 0.218s ease-in-out 0s", verticalAlign: "middle" }} width="175" />
                                        <div className="anime-extras">
                                            <div className="anime-extra">
                                                Leftover</div>
                                            <div className="anime-avg-user-rating" data-action="click->anime-card#showLibraryEditor" title="8.26 out of 10 based on 717 user ratings">
                                                <i className="icon-star"></i>8.26</div>
                                        </div>
                                    </div>
                                    <div className="anime-info">
                                        <ul className="anime-studios">
                                            <li style={{ boxSizing: "inherit", display: "inline-block", fontSize: "inherit", margin: "0px", padding: "0px" }}><a data-target="anime-card.studioLink" href="https://www.livechart.me/studios/19" style={{ backgroundColor: "transparent", boxSizing: "inherit", color: "#3b97fc", cursor: "pointer", lineHeight: "inherit", textDecorationLine: "none" }}>BN Pictures</a></li>
                                        </ul>
                                        <div className="anime-date" data-action="click->anime-card#showPremiereDateTime">
                                            Jan 4, 2020 at 5:35pm JST</div>
                                        <div className="anime-metadata">
                                            <div className="anime-source">
                                                Manga</div>
                                            <div className="anime-episodes">
                                                23 eps Ã— 25 min</div>
                                        </div>
                                        <div className="anime-synopsis">
                                            <div>
                                                A boy's chaotic life in a "prestigious" boarding school for elite demons!</div>
                                            <div>
                                                Iruma Suzuki, human, 14, one day finds himself sold to the devil. To add to his predicament, his doting owner and self-appointed "Grandpa" is the principal at his new school. Now Iruma must deal with a haughty student who challenges him to a duel, a girl with adjustment issues, and so many more scary beings! Can this ultimate pacifist dodge the slings and arrows that are flung his way? As he struggles frantically, Iruma's innate kindness begins to win over enemies.</div>
                                            <div className="text-italic">
                                                [Source:&nbsp;<a href="https://pf.nhk-ep.co.jp/detail/2194" rel="nofollow noopener" style={{ backgroundColor: "transparent", boxSizing: "inherit", color: "#3b97fc", cursor: "pointer", lineHeight: "inherit", textDecorationLine: "none" }}>NHK Enterprises</a>]</div>
                                        </div>
                                    </div>
                                    <ul className="related-links">
                                        <li style={{ boxSizing: "inherit", display: "inline-block", fontSize: "inherit", margin: "0px", padding: "0px" }}>
                                            <a className="website-icon" href="http://www6.nhk.or.jp/anime/program/detail.html?i=iruma" rel="noopener nofollow" style={{ background: "-webkit-image-set(url(https://s.livechart.me/assets/light-theme-sprites-7412705806c3adc4500d50bd771722350459011cb3b1169e4191e8b123c5a971.png) 1x,url(https://s.livechart.me/assets/light-theme-sprites@2x-fcc01a2e6e2361f12b37111a38cb85c8d61c7080313ba0a595903f4067432053.png) 2x) 0px -210px / 60px 390px no-repeat", borderRadius: "50%", boxSizing: "inherit", color: "#3b97fc", cursor: "pointer", display: "inline-block", height: "30px", lineHeight: "inherit", textDecorationLine: "none", width: "30px" }} ></a></li>
                                        <li style={{ boxSizing: "inherit", display: "inline-block", fontSize: "inherit", margin: "0px", padding: "0px" }}>
                                            <a className="preview-icon" data-action="anime-card#showVideos" href="https://www.livechart.me/anime/9215/videos" style={{ background: "-webkit-image-set(url(https://s.livechart.me/assets/light-theme-sprites-7412705806c3adc4500d50bd771722350459011cb3b1169e4191e8b123c5a971.png) 1x, url(https://s.livechart.me/assets/light-theme-sprites@2x-fcc01a2e6e2361f12b37111a38cb85c8d61c7080313ba0a595903f4067432053.png) 2x) 0px -270px / 60px 390px no-repeat", borderRadius: "50%", boxSizing: "inherit", color: "#3b97fc", cursor: "pointer", display: "inline-block", height: "30px", lineHeight: "inherit", textDecorationLine: "none", width: "30px" }}></a></li>
                                        <li style={{ boxSizing: "inherit", display: "inline-block", fontSize: "inherit", margin: "0px", padding: "0px" }}>
                                            <a className="watch-icon" data-action="anime-card#showStreams" href="https://www.livechart.me/anime/9215/streams" style={{ background: "-webkit-image-set(url(https://s.livechart.me/assets/light-theme-sprites-7412705806c3adc4500d50bd771722350459011cb3b1169e4191e8b123c5a971.png) 1x, url(https://s.livechart.me/assets/light-theme-sprites@2x-fcc01a2e6e2361f12b37111a38cb85c8d61c7080313ba0a595903f4067432053.png) 2x) 0px 0px / 60px 390px no-repeat", borderRadius: "50%", boxSizing: "inherit", color: "#3b97fc", cursor: "pointer", display: "inline-block", height: "30px", lineHeight: "inherit", textDecorationLine: "none", width: "30px" }}></a></li>
                                        <li style={{ boxSizing: "inherit", display: "inline-block", fontSize: "inherit", margin: "0px", padding: "0px" }}>
                                            <a className="anilist-icon" href="https://anilist.co/anime/107693" rel="noopener nofollow" style={{ background: "-webkit-image-set(url(https://s.livechart.me/assets/light-theme-sprites-7412705806c3adc4500d50bd771722350459011cb3b1169e4191e8b123c5a971.png) 1x, url(https://s.livechart.me/assets/light-theme-sprites@2x-fcc01a2e6e2361f12b37111a38cb85c8d61c7080313ba0a595903f4067432053.png) 2x) 0px -30px / 60px 390px no-repeat", borderRadius: "50%", boxSizing: "inherit", color: "#3b97fc", cursor: "pointer", display: "inline-block", height: "30px", lineHeight: "inherit", textDecorationLine: "none", width: "30px" }} ></a></li>
                                        <li style={{ boxSizing: "inherit", display: "inline-block", fontSize: "inherit", margin: "0px", padding: "0px" }}>
                                            <a className="mal-icon" href="https://myanimelist.net/anime/39196" rel="noopener nofollow" style={{ background: "-webkit-image-set(url(https://s.livechart.me/assets/light-theme-sprites-7412705806c3adc4500d50bd771722350459011cb3b1169e4191e8b123c5a971.png) 1x, url(https://s.livechart.me/assets/light-theme-sprites@2x-fcc01a2e6e2361f12b37111a38cb85c8d61c7080313ba0a595903f4067432053.png) 2x) 0px -330px / 60px 390px no-repeat", borderRadius: "50%", boxSizing: "inherit", color: "#3b97fc", cursor: "pointer", display: "inline-block", height: "30px", lineHeight: "inherit", textDecorationLine: "none", width: "30px" }} ></a></li>
                                        <li style={{ boxSizing: "inherit", display: "inline-block", fontSize: "inherit", margin: "0px", padding: "0px" }}>
                                            <a className="anidb-icon" href="http://anidb.net/a14660" rel="noopener nofollow" style={{ background: "-webkit-image-set(url(https://s.livechart.me/assets/light-theme-sprites-7412705806c3adc4500d50bd771722350459011cb3b1169e4191e8b123c5a971.png) 1x, url(https://s.livechart.me/assets/light-theme-sprites@2x-fcc01a2e6e2361f12b37111a38cb85c8d61c7080313ba0a595903f4067432053.png) 2x) 0px -300px / 60px 390px no-repeat", borderRadius: "50%", boxSizing: "inherit", color: "#3b97fc", cursor: "pointer", display: "inline-block", height: "30px", lineHeight: "inherit", textDecorationLine: "none", width: "30px" }} ></a></li>
                                        <li style={{ boxSizing: "inherit", display: "inline-block", fontSize: "inherit", margin: "0px", padding: "0px" }}>
                                            <a className="anime-planet-icon" href="http://www.anime-planet.com/anime/mairimashita-iruma-kun" rel="noopener nofollow" style={{ background: "-webkit-image-set(url(https://s.livechart.me/assets/light-theme-sprites-7412705806c3adc4500d50bd771722350459011cb3b1169e4191e8b123c5a971.png) 1x, url(https://s.livechart.me/assets/light-theme-sprites@2x-fcc01a2e6e2361f12b37111a38cb85c8d61c7080313ba0a595903f4067432053.png) 2x) 0px -180px / 60px 390px no-repeat", borderRadius: "50%", boxSizing: "inherit", color: "#3b97fc", cursor: "pointer", display: "inline-block", height: "30px", lineHeight: "inherit", textDecorationLine: "none", width: "30px" }} ></a></li>
                                        <li style={{ boxSizing: "inherit", display: "inline-block", fontSize: "inherit", margin: "0px", padding: "0px" }}>
                                            <a className="anisearch-icon" href="https://www.anisearch.com/anime/14154" rel="noopener nofollow" style={{ background: "-webkit-image-set(url(https://s.livechart.me/assets/light-theme-sprites-7412705806c3adc4500d50bd771722350459011cb3b1169e4191e8b123c5a971.png) 1x, url(https://s.livechart.me/assets/light-theme-sprites@2x-fcc01a2e6e2361f12b37111a38cb85c8d61c7080313ba0a595903f4067432053.png) 2x) 0px -60px / 60px 390px no-repeat", borderRadius: "50%", boxSizing: "inherit", color: "#3b97fc", cursor: "pointer", display: "inline-block", height: "30px", lineHeight: "inherit", textDecorationLine: "none", width: "30px" }} ></a></li>
                                        <li style={{ boxSizing: "inherit", display: "inline-block", fontSize: "inherit", margin: "0px", padding: "0px" }}>
                                            <a className="kitsu-icon" href="https://kitsu.io/anime/42310" rel="noopener nofollow" style={{ background: "-webkit-image-set(url(https://s.livechart.me/assets/light-theme-sprites-7412705806c3adc4500d50bd771722350459011cb3b1169e4191e8b123c5a971.png) 1x, url(https://s.livechart.me/assets/light-theme-sprites@2x-fcc01a2e6e2361f12b37111a38cb85c8d61c7080313ba0a595903f4067432053.png) 2x) -30px -240px / 60px 390px no-repeat", borderRadius: "50%", boxSizing: "inherit", color: "#3b97fc", cursor: "pointer", display: "inline-block", height: "30px", lineHeight: "inherit", textDecorationLine: "none", width: "30px" }} ></a></li>
                                        <li style={{ boxSizing: "inherit", display: "inline-block", fontSize: "inherit", margin: "0px", padding: "0px" }}>
                                            <a className="crunchyroll-icon" href="http://www.crunchyroll.com/welcome-to-demon-school-iruma-kun" rel="noopener nofollow" style={{ background: "-webkit-image-set(url(https://s.livechart.me/assets/light-theme-sprites-7412705806c3adc4500d50bd771722350459011cb3b1169e4191e8b123c5a971.png) 1x, url(https://s.livechart.me/assets/light-theme-sprites@2x-fcc01a2e6e2361f12b37111a38cb85c8d61c7080313ba0a595903f4067432053.png) 2x) 0px -360px / 60px 390px no-repeat", borderRadius: "50%", boxSizing: "inherit", color: "#3b97fc", cursor: "pointer", display: "inline-block", height: "30px", lineHeight: "inherit", textDecorationLine: "none", width: "30px" }} ></a></li>
                                    </ul>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center pagination-sm mb-4">
                        <li className="page-item disabled">
                            <a className="page-link" href="/" tabindex="-1">Previous</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="/">1</a></li>
                        <li className="page-item"><a className="page-link" href="/">2</a></li>
                        <li className="page-item"><a className="page-link" href="/">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="/">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <hr />
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
                                <a href="/"><img className="img-fluid" src="https://askbootstrap.com/preview/vidoe-v1-3/theme-four/img/v5.png" alt="" /></a>
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
                                <a href="/"><img className="img-fluid" src="https://askbootstrap.com/preview/vidoe-v1-3/theme-four/img/v6.png" alt="" /></a>
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
                                <a href="/"><img className="img-fluid" src="https://askbootstrap.com/preview/vidoe-v1-3/theme-four/img/v7.png" alt="" /></a>
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
                                <a href="/"><img className="img-fluid" src="https://askbootstrap.com/preview/vidoe-v1-3/theme-four/img/v8.png" alt="" /></a>
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
        </MainLayout>
    );
}

export default SeriesPage;