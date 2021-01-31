import React, {Fragment} from "react";
import {Navbar} from "../home/navbar";
import {Footer} from "../home/footer";
import "./contact.scss"

export const Contact = () => {
    return (
        <Fragment>
            <Navbar/>
            <div className="contact">
                <div className="contact-form">
                    <h2>Contact</h2>
                </div>
            </div>
            <Footer/>
        </Fragment>
    );
}
