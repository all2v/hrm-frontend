import React, {Dispatch, SetStateAction} from "react";
import {Button, Image} from "react-bootstrap";
import {Bell, List} from "react-bootstrap-icons";

type HeaderProps = {
    setSidebarOpen : Dispatch<SetStateAction<boolean>>,
    isMobile : boolean
}

export const Header = ({setSidebarOpen, isMobile} : HeaderProps) => {
    return(
        <>
            <nav className="navbar bg-body-tertiary w-100">
                <div className="container-fluid">
                    {isMobile && <List className={""} onClick={() => setSidebarOpen((prevState) => !prevState)}/>}
                    <div>

                    </div>
                    <div>
                        <Button variant={"light"} className={"mx-1"}><Bell/></Button>

                        <a href="#" className={"mx-1 my-3"}>
                            <Image roundedCircle src={"https://github.com/mdo.png"} height={48}/>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}