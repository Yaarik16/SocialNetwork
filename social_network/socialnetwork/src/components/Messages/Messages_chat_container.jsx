import React from "react"
import './Messages.css'
import { addMessageActionCreator } from "../../redux/messages_reducer";
import { onMessageChangeActionCreator } from "../../redux/messages_reducer";
import Chat from "./Messages_chat";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    state: state,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    onMessageChange: (text) => {
      let action = onMessageChangeActionCreator(text);
      dispatch(action)
    },
    onAddMessage: (text) => {
      let action = addMessageActionCreator(text)
      dispatch(action)
    }
  }
}

let ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);

export default ChatContainer;  