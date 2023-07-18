import React from 'react'
import './Sidebar.css'



const Friend = (props) => {
    return (
        <div className="friends_item">
            <img src={props.img} />
            <p>{props.name}</p>
        </div>
    )
};

export default Friend;