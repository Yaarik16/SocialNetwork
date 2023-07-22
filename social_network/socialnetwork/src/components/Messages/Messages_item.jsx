import React from "react";
import './Messages.css'
import './Messages_contacts.css'
import { NavLink } from "react-router-dom";


const ContactItem = (props) => {

    let path = '/Messages/' + props.road;

    return (
        <div className='conatact_item'>
            <NavLink to={path}>
                <button type="button">
                    {props.name}
                </button>
            </NavLink>
        </div>
    );
};


export default ContactItem;