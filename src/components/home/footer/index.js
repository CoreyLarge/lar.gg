import React from "react";
import "./footer.scss";
import {FaGithub, FaLinkedinIn} from "react-icons/fa"
import {IconContext} from "react-icons";

export const Footer = ({}) => (
    <IconContext.Provider value={{color: "grey", size: "2rem"}}>
        <div class="footer">
            <div class="footer-element">
                <FaGithub/>
            </div>
            <div class="footer-element">
                <FaLinkedinIn/>
            </div>
        </div>
    </IconContext.Provider>
)
