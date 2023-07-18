import React from "react";
import { NavLink } from "react-router-dom";


const Options = () => {
    return (
        <div className='options'>
            <ul>
                <li>
                    <NavLink to="/Options">Options</NavLink>
                </li>
            </ul>
        </div>
    );
}
export default Options;