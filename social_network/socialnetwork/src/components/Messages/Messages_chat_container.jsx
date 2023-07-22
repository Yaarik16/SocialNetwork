import React from "react"
import './Messages.css'
import { addMessageActionCreator } from "../../redux/messages_reducer";
import { onMessageChangeActionCreator } from "../../redux/messages_reducer";
import Chat from "./Messages_chat";

const  ChatContainer = (props) => {

  let state = props.store.getState();


  let addMessage = (text) => {
    let action = addMessageActionCreator(text)
    props.store.dispatch(action)
  }

  let onMessageChange = (text) => {
    let action = onMessageChangeActionCreator(text);
    props.store.dispatch(action) 
  }

  return (
    <Chat onAddMessage={addMessage} state={state} onMessageChange={onMessageChange} newMessageText={state.messagePage.newMessageText} />
  );
}

export default ChatContainer;  