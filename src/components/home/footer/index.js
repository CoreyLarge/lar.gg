import React from "react";
import "./footer.scss";
import {FaGithub, FaLinkedinIn} from "react-icons/fa"
import {IconContext} from "react-icons";

export const Footer = ({}) => (
    <IconContext.Provider value={{color: "grey", size: "2rem"}}>
        <div class="footer">
            <div class="footer-element">
                <div className="footer-link">
                    <a href="https://github.com/CoreyLarge"> <FaGithub/></a>
                </div>
            </div>
            <div className="footer-link">
                <div class="footer-element">
                    <a href="https://www.linkedin.com/in/corey-large-bb08b1120/"> <FaLinkedinIn/></a>
                </div>
            </div>

        </div>
    </IconContext.Provider>
)
