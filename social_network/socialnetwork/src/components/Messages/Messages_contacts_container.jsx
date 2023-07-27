import React from "react";
import { addNewFriendActionCreator } from "../../redux/messages_reducer";
import { onNameChangeActionCreator } from "../../redux/messages_reducer";
import MessagesContacts from "./Messages_contacts";
import { connect } from "react-redux";




let mapStateToProps = (state) => {
    return {
        state: state,
        newFriendName: state.newFriendName
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onNameChange: (name) => {
            dispatch(onNameChangeActionCreator(name));
        },
        onAddFriend: (name) => {
            dispatch(addNewFriendActionCreator(name));
        }
    }
}

const MessagesContactsContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesContacts);

export default MessagesContactsContainer;