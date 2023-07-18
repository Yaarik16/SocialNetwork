import React from "react"
import './Messages.css'
import ChatItem from "./Message_chat_Andrew";
import ChatItemMe from "./Message_chat_Me";
import { addMessageActionCreator } from "../../redux/messages_reducer";
import { onMessageChangeActionCreator } from "../../redux/messages_reducer";


const Chat = (props) => {

  let dialogsElements = props.chatData.map((Message) => {
    return <ChatItem name={Message.name} text={Message.text} />,
      <ChatItemMe name={Message.name} text={Message.text} />
  });


  let newMessage = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageActionCreator())
  }

  let onMessageChange = () => {
    let text = newMessage.current.value;
    let action = onMessageChangeActionCreator(text);
    props.dispatch(action) 
  }

  return (
    <div className='chat'>
      {dialogsElements}
      <textarea onChange={onMessageChange} ref={newMessage} placeholder="Your message" value={props.newMessageText} />
      <button onClick={addMessage} type="submit">Send message</button>
    </div>
  );
}

export default Chat;  