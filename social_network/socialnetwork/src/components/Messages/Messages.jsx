import React from "react"
import './Messages.css'
import './Messages_contacts.css'
import MessagesTitle from "./Messages_title"
import MessagesContacts from "./Messages_item"
import Chat from "./Messages_chat"

const Messages = (props) => {


    return (
        <div>
            <MessagesTitle />
            <div className='Messages'>
                <div className="Contacts">
                    <div className='contacts'>
                    <MessagesContacts contactsData={props.contactsData} dispatch={props.dispatch} newFriendName={props.newFriendName}/>
                    </div>
                </div>
                <Chat chatData={props.chatData} dispatch={props.dispatch} newMessageText={props.newMessageText} />
            </div>
        </div>
    );
}

export default Messages;