import React from "react";
import { NavLink } from "react-router-dom";

const Links = () => {
    return (
        <div className="links">
            <ul>
                <li>
                    <NavLink to="/Profile">Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/Messages">Messages</NavLink>
                </li>
                <li>
                    <NavLink to="/New">News</NavLink>
                </li>
                <li>
                    <NavLink to="/Music">Music</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Links;