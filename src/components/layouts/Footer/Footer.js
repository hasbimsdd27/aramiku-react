import React from 'react';

function Footer() {
    return (
        <footer className="sticky-footer">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-lg-12 col-sm-12" style={{ textAlign: "center" }}>
                        <strong id="checkbox-value"></strong><br />
                        <label className="switch">
                            <input type="checkbox" id="checkbox1" />
                            <span className="slider"></span>
                        </label>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                        <p className="mt-1 mb-0">
                            &copy; Copyright 2018 <strong className="text-dark">Aramiku</strong>. All Rights Reserved<br />
                            <small className="mt-0 mb-0">Made with <i className="fas fa-heart text-danger"></i> by <a className="text-primary" href="https://cyine.id/">CyineID</a>
                            </small>
                        </p>
                    </div>
                    <div className="col-lg-6 col-sm-6 text-right">
                        <div className="app">
                            <a href="/"><img alt="" src="https://askbootstrap.com/preview/vidoe-v1-3/theme-six/img/google.png" /></a>
                            <a href="/"><img alt="" src="https://askbootstrap.com/preview/vidoe-v1-3/theme-six/img/apple.png" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
