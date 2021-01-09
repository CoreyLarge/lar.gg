import React from "react";
import "./footer.scss";
import {FaGithub, FaLinkedinIn} from "react-icons/fa"
import {IconContext} from "react-icons";

export const Footer = ({}) => (
    <IconContext.Provider value={{color: "grey"}}>
        <div class="footer">
            <div class="footer-element">
                <FaLinkedinIn/>
            </div>
            <div class="footer-element">
                <FaGithub/>
            </div>
        </div>
    </IconContext.Provider>
)
