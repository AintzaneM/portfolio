import React from "react";
import {Link} from "react-router-dom";

function NavBar () {
    return (
        <div className = "navbar-container">
            <ul className = "navbar-items">
                <li className="lnk-home">
                    <Link to='/'><strong>Home</strong></Link>
                </li>
                <li className="lnk-projects">
                    <Link to='/projects'><strong>Projects</strong></Link>
                </li>
                <li className="lnk-contact">
                    <Link to='/contact'><strong>Contact</strong></Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;