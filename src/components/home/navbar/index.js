import React from "react";
import "./navbar.scss";

export const Navbar = ({links}) => (
    <div className="navbar">
        <header>
            <div className="logo">C.L</div>
            <nav>
                <ul class="nav_links">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Education</a></li>
                </ul>
            </nav>
        </header>
    </div>
)
