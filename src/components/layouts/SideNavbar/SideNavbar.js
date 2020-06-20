import React from 'react';

function SideNavbar() {
    return (
        <ul className="sidebar navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-home"></i>
                    <span>Home</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/series">
                    <i className="fas fa-fw fa-users"></i>
                    <span>Series</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/movie">
                    <i className="fas fa-fw fa-user-alt"></i>
                    <span>Movie</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="video-page.html">
                    <i className="fas fa-fw fa-video"></i>
                    <span>Collection</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-cloud-upload-alt"></i>
                    <span>Season</span>
                </a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                </a>
                <div className="dropdown-menu">
                    <h6 className="dropdown-header">Login Screens:</h6>
                    <a className="dropdown-item" href="login.html">Login</a>
                    <a className="dropdown-item" href="register.html">Register</a>
                    <a className="dropdown-item" href="forgot-password.html">Forgot Password</a>
                    <div className="dropdown-divider"></div>
                    <h6 className="dropdown-header">Other Pages:</h6>
                    <a className="dropdown-item" href="404.html">404 Page</a>
                    <a className="dropdown-item" href="blank.html">Blank Page</a>
                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="history-page.html">
                    <i className="fas fa-fw fa-history"></i>
                    <span>History Page</span>
                </a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="categories.html" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-fw fa-list-alt"></i>
                    <span>Categories</span>
                </a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="categories.html">Movie</a>
                    <a className="dropdown-item" href="categories.html">Music</a>
                    <a className="dropdown-item" href="categories.html">Television</a>
                </div>
            </li>
        </ul>
    );
}

export default SideNavbar;
