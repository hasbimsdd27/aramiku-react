import React from 'react';

import MobileMenu from "../MobileMenu/MobileMenu";
import TopNavbar from "../TopNavbar/TopNavbar";
import TopMobileSearch from "../TopMobileSearch/TopMobileSearch";
import SideNavbar from "../SideNavbar/SideNavbar";
import Footer from "../Footer/Footer";
import ButtonToTop from '../ButtonToTop/ButtonToTop';
import LogOutModal from '../LogOutModal/LogOutModal';

function MainLayout({ children }) {
    return (
        <>
            <MobileMenu />
            <TopNavbar />
            <div id="wrapper">
                <SideNavbar />
                <div id="content-wrapper">
                    <div className="container-fluid pb-0">
                        <TopMobileSearch />
                        {children}
                    </div>
                    <Footer />
                </div>
            </div>
            <ButtonToTop />
            <LogOutModal />
        </>
    );
}

export default MainLayout;
