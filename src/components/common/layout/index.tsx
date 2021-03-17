import React from "react";
import {Navbar, NavbarItem} from "@common/layout/navbar";
import "./layout.scss";
import {Footer} from "@common/layout/footer";

interface LayoutProps {
    children: React.ReactNode
}

export const Layout = (props: LayoutProps) => {
    return (
        <>
            <Navbar>
                <NavbarItem to="/" text="Home"/>
                <NavbarItem to="/about" text="About"/>
            </Navbar>

            { props.children }
            <Footer/>
        </>
    )
}
