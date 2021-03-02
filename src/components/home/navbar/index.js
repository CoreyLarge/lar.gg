import React from "react";
import "./navbar.scss";

export const Navbar = ({links}) => (
    <div className="navbar">
        <header>
            <div className="logo"><a href="/">C.L</a></div>
            <nav>
                <ul class="nav_links">
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    </div>
)
