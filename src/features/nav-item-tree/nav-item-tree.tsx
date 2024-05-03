import {NavItem} from "react-bootstrap";
import React, {ReactNode, useState} from "react";
import {ChevronDown, ChevronUp} from "react-bootstrap-icons";

type NavItemTreeProps = {
    title: string | ReactNode,
    children: string | ReactNode | ReactNode[],
    className : string
}

/**
 * Элемент для древовидного раскрытия списка элементов
 * @param title
 * @param children
 * @param className
 * @constructor
 */
export const NavItemTree = ({title, children, className} : NavItemTreeProps) => {

    const [isOpen, setOpen] = useState<boolean>(false)

    return (
        <NavItem className={`navItem`}>
            <div className={`tree-header nav-link text-decoration-none text-dark ${className}`} onClick={() => setOpen(!isOpen)}>
                {title}
                {isOpen ?
                    <ChevronUp className={"mx-2"}/> :
                    <ChevronDown className={"mx-2"}/>

                }
            </div>

            <div className={ isOpen ? "tree-child mx-2" : "tree-child mx-2 d-none"}>
                {children}
            </div>
        </NavItem>
    )
}