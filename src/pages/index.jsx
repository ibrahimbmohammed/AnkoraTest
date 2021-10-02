import React, { useState } from "react";
import { navItems } from "../data/navBarItem";
import Routes from "../routes"
import Header from "../components/header";
import Sidebar from "../components/sidebar";

const Layout = () => {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <>
            <Header />
            <div className="nms-user">
                <Sidebar navItems={navItems} open={openMenu} />
                <div className="nms-dashboard flex-grow-1">
                    <Routes />
                </div>
            </div>
        </>
    );
}

export default Layout;



