import React from "react";
import './Sidebar.css'

import Friend from "./Sidebar_friend";




const Friends = (props) => {


    let onlineFriends = props.friends.map((friend) => {
        return (<Friend img={friend.image} name={friend.name}/>)
    })

    return (
        <div className="friends_container">
            <div className="friends_title">
                <p>Online friends</p>
            </div>
            <div className="friends_items">
                {onlineFriends}
            </div>
        </div>
    )
}

export default Friends;