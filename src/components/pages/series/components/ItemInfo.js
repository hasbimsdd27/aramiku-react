import React from "react";

const ItemInfo = ({ data }) => {
    return (
        <article className="col-xl-3 col-md-6 col-sm-12" data-alternate="[Welcome to Demon School! Iruma-kun]" data-anime-id="9215" data-controller="anime-card" data-english="Welcome to Demon School, Iruma-kun" data-native="é&shy;”å…¥ã‚Šã¾ã—ãŸï¼å…¥é–“ãã‚“" data-premiere-precision="4" data-premiere="1578126900" data-romaji="Mairimashita! Iruma-kun" data-target="anime-card-list.card">
            <div className="anime-card">
                <h5 className="main-title" style={{}}>
                    <a data-target="anime-card.mainTitle" href="https://www.livechart.me/anime/9215">
                        {data.title}
                    </a>
                </h5>
                <ol className="anime-tags">
                    {data.genres.map((genre) => {
                        return (
                            <li><a href={genre.url}>{genre.name}</a></li>
                        );
                    })}
                </ol>
                <div className="poster-container">
                    <div className="episode-countdown" data-action="click->anime-card#showEpisodeTime" data-target="anime-card.countdown" title="Click to view time/convert to another time zone">
                        <span className="episode-label">EP15</span>:&nbsp;<time data-timestamp="1578731700">0d 16h 17m 22s</time></div>
                    <img alt="Mairimashita! Iruma-kun"
                        className="lazyload visible"
                        data-lazy-loaded="true"
                        data-src={data.image_url}
                        data-srcset={data.image_url + "?style=small&amp;format=jpg 1x, " + data.image_url + "?style=large&amp;format=jpg 2x"}
                        data-target="anime-card.poster"
                        height="250"
                        src={data.image_url}
                        srcset={data.image_url}
                        style={{ borderStyle: "none", boxSizing: "inherit", display: "inline-block", height: "auto", maxWidth: "100%", opacity: 1, transition: "opacity 0.218s ease-in-out 0s", verticalAlign: "middle" }} width="175" />
                    <div className="anime-extras">
                        <div className="anime-extra">
                            Leftover</div>
                        <div className="anime-avg-user-rating" data-action="click->anime-card#showLibraryEditor" title="8.26 out of 10 based on 717 user ratings">
                            <i className="icon-star"></i>8.26</div>
                    </div>
                </div>
                <div className="anime-info">
                    <ul className="anime-studios">
                        {data.studios.map((studio) => {
                            return (
                                <li style={{ boxSizing: "inherit", display: "inline-block", fontSize: "inherit", margin: "0px", padding: "0px" }}><a data-target="anime-card.studioLink" href={studio.url} style={{ backgroundColor: "transparent", boxSizing: "inherit", color: "#3b97fc", cursor: "pointer", lineHeight: "inherit", textDecorationLine: "none" }}>{studio.name}</a></li>
                            );
                        })}
                    </ul>
                    <div className="anime-date" data-action="click->anime-card#showPremiereDateTime">
                        {data.aired.string}
                    </div>
                    <div className="anime-metadata">
                        <div className="anime-source">
                            {data.source}
                        </div>
                        <div className="anime-episodes">
                            {data.episodes} eps / {data.duration}</div>
                    </div>
                    <div className="anime-synopsis">
                        {data.synopsis}
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
    );
}

export default ItemInfo;