import React from "react";
import Image from './../../emoji-me.png';
import './Messages_chat.css'



const ChatItemMe = (props) => {
    return (
        <div className="chat_item">
            <div className="avatar">
                <img src={Image} alt="Image doesn't load" />
                <p>{props.name}</p>
            </div>
            <div className="Message">
            <p>{props.text}</p>
            </div>
        </div>
    );
}

export default ChatItemMe;