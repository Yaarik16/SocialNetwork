import React from "react"
import './Messages.css'
import './Messages_contacts.css'
import MessagesTitle from "./Messages_title"
import MessagesContactsContainer from "./Messages_contacts_container"
import ChatContainer from "./Messages_chat_container"

const Messages = (props) => {

    return (
        <div>
            <MessagesTitle />
            <div className='Messages'>
                <div className="Contacts">
                    <div className='contacts'>
                    <MessagesContactsContainer />
                    </div>
                </div>
                <ChatContainer store={props.store}/>
            </div>
        </div>
    );
}

export default Messages;