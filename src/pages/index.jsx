import React, { useState } from "react";
import { navItems } from "../data/navBarItem";
import Routes from "../routes"
import Header from "../components/header";
import Sidebar from "../components/sidebar";

const Layout = () => {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <>
            <div className="flex flex-row w-screen">
                <div className="w-1/5 h-screen bg-side-pink ">
                    <Sidebar navItems={navItems} open={openMenu} />
                    </div>
                    <div className="w-4/5 flex flex-col h-screen">
                        <div className="h-1/6" ><Header /></div>
                        <div className="h-5/6  h-screen"><Routes /></div>
                    </div>
                </div>
        </>
    );
}

export default Layout;



