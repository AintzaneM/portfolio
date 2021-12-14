import React from "react";
import {NavLink,Link} from "react-router-dom";

function NavBar () {
    return (
        <div className = "navbar">
            <ul>
                <li className="lnk-home">
                    <Link to='/'><strong>Home</strong></Link>
                </li>
                <li className="lnk-projects">
                    <Link to='/projects'><strong>Projects</strong></Link>
                </li>
                <li className="lnk-contact">
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;