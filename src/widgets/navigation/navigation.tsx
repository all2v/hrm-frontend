import React, {useEffect, useState} from "react";
import {Header} from "./header";
import {Sidebar} from "./sidebar";
import {Outlet} from "react-router-dom";
import styles from "./navigation.module.css"

export const Navigation = () => {

    const [isOpen, setOpen] = useState<boolean>(false);
    const [isMobile, setMobileTheme] = useState<boolean>(false);

    useEffect(() => {
        setMobileTheme(() => window.innerWidth <= 1024);
        window.addEventListener('resize', () => setMobileTheme(() => window.innerWidth <= 1024));
    }, [])

    return(
        <>
            <Sidebar isOpen={isOpen} setOpen={setOpen} isMobile={isMobile}/>
            <div className={`${styles.scrollarea} ${styles.mainContent}`}>
                <Header isMobile={isMobile} setSidebarOpen={setOpen}/>
                <div className={"text-light"}>
                    <Outlet />
                </div>
            </div>
        </>
    )
}