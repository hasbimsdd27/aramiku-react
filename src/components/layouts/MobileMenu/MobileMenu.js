import React from 'react';

function MobileMenu() {
    return (
        <div className="mobile-menu">
            <ul className="bottom-navbar-nav">
                <li className="bottom-nav-item">
                    <a href="index.html" className="bottom-nav-link">
                        <i className="fas fa-fw fa-home"></i>
                        <span>Home</span>
                    </a>
                </li>
                <li className="bottom-nav-item">
                    <a href="channels.html" className="bottom-nav-link">
                        <i className="fas fa-fw fa-users"></i>
                        <span>Hot</span>
                    </a>
                </li>
                <li className="bottom-nav-item">
                    <a href="single-channel.html" className="bottom-nav-link">
                        <i className="fas fa-fw fa-user-alt"></i>
                        <span>Channel</span>
                    </a>
                </li>
                <li className="bottom-nav-item">
                    <a href="video-page.html" className="bottom-nav-link">
                        <i className="fas fa-fw fa-video"></i>
                        <span>Video</span>
                    </a>
                </li>
                <li className="bottom-nav-item">
                    <a href="upload.html" className="bottom-nav-link">
                        <i className="fas fa-fw fa-cloud-upload-alt"></i>
                        <span>Upload</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default MobileMenu;
