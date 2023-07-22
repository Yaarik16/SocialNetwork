import React from "react";
import { addNewFriendActionCreator } from "../../redux/messages_reducer";
import { onNameChangeActionCreator } from "../../redux/messages_reducer";
import MessagesContacts from "./Messages_contacts";


const MessagesContactsContainer = (props) => {

    let state = props.store.getState();

    let addNewFriend = (name) => {
        let action = addNewFriendActionCreator(name);
        props.store.dispatch(action);
    }

    let onNameChange = (name) => {
        let action = onNameChangeActionCreator(name);
        props.store.dispatch(action);
    }


    return (
        <MessagesContacts onNameChange={onNameChange} onAddFriend={addNewFriend} state={state} newFriendName={state.messagePage.newFriendName}/>
    );
}

export default MessagesContactsContainer;