import React from "react";
import {Wrap} from "@common/wrap";
import "./header.scss";

interface HeaderProps {
    title: string,
    subtitle?: string
}

export const Header = (props: HeaderProps) => {
    return (
        <header>
            <Wrap>
                <h1>{props.title}</h1>
                {props.subtitle && <h2>{props.subtitle}</h2>}
            </Wrap>
        </header>
    )
}
