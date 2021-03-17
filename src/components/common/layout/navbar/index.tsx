import React from "react";
import {Link} from "gatsby";
import {Wrap} from "@common/wrap";
import "./navbar.scss";


interface NavbarProps {
    children: React.ReactNode
}

interface NavbarItemProps {
    to: string,
    text: string
}

export const Navbar = (props: NavbarProps) => {
    return (
        <menu>
            <Wrap>
                {props.children}
            </Wrap>
        </menu>
    )
}

export const NavbarItem = (props: NavbarItemProps) => (
    <Link to={props.to}>
        {props.text}
    </Link>
)
