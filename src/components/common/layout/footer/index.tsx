import React from "react";
import {IGithub, ILinkedIn} from "@common/icons";
import "./footer.scss";


export const Footer = () =>{
    return(

        <footer>
            <a href="https://github.com/CoreyLarge"><IGithub/></a>
            <a href="https://www.linkedin.com/in/corey-large-bb08b1120/"><ILinkedIn/></a>
        </footer>
)
}
