import React, {Dispatch, SetStateAction} from "react";
import {Badge, Button, Dropdown, Image, Nav, NavDropdown, NavItem, NavLink} from "react-bootstrap";
import styles from "./sidebar.module.css"

import {CashCoin, Chat, FileEarmarkTextFill, GearFill, Grid, Wallet2, X} from "react-bootstrap-icons";
import {NavItemTree} from "features/nav-item-tree";

type SidebarProps = {
    isOpen : boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    isMobile: boolean

}


export const Sidebar = ({isOpen, setOpen, isMobile} : SidebarProps) => {


    return(
        <>
            <div className={`d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary h-100 col-12 col-md-3 col-lg-3 col-xl-2 ${styles.sidebar} ${isOpen ? "" : styles.close}`}>
                <div className="d-flex flex-row justify-content-between link-body-emphasis text-decoration-none mx-auto my-2">
                    <h2>
                        <a href="/" className="mx-auto">
                            <Badge bg={"secondary"}>HRM</Badge>
                        </a>
                    </h2>
                    { isMobile && <X width={"48px"} height={"48px"} onClick={() => setOpen(!isOpen)}/>}
                </div>
                <Nav className={"flex-column mb-auto mt-3 align-content-start text-start"}>

                    <NavItemTree title={"Подбор персонала"} className={styles.navLink}>

                        <NavLink href="/reception" className={`link-dark ${styles.navLink}`}>
                            Вакансии
                        </NavLink>

                        <NavLink href="#" className={`link-dark ${styles.navLink}`}>
                            Набор на практику
                        </NavLink>

                        <NavLink href="#" className={`link-dark ${styles.navLink}`}>
                            Кандидаты
                        </NavLink>
                    </NavItemTree>

                    <NavItemTree title={"Компания"} className={styles.navLink}>
                        <NavLink href="/employees" className={`link-dark ${styles.navLink}`}>
                            Сотрудники
                        </NavLink>
                        <NavLink href="#" className={`link-dark ${styles.navLink}`}>
                            Запросы
                        </NavLink>
                        <NavLink href="#" className={`link-dark ${styles.navLink}`}>
                            Опросы
                        </NavLink>
                    </NavItemTree>

                </Nav>

                <Button variant={"secondary"}>Перейти в Astrum</Button>
            </div>



        </>
    )
}