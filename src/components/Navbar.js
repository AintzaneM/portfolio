import React from "react";
import {Link} from "react-router-dom";

function NavBar () {
    return (
        <div className = "navbar-container">
                    <a href='/' className="lnk-home link text-underlined"><strong><span>Home</span></strong></a>
                    <a href ='/projects' className="lnk-projects link text-underlined"><strong><span>Projects</span></strong></a>
                    <a href ='/contact' className="lnk-contact link text-underlined"><strong><span>Contact</span></strong></a>
        </div>
    )
}

export default NavBar;