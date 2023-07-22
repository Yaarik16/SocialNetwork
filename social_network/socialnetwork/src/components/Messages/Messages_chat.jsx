import React from "react"
import './Messages.css'
import ChatItem from "./Message_chat_Andrew";
import ChatItemMe from "./Message_chat_Me";


const Chat = (props) => {
  let dialogsElements = props.state.messagePage.chatData.map((Message) => {
    return <ChatItem name={Message.name} text={Message.text} />,
      <ChatItemMe name={Message.name} text={Message.text} />
  });


  let newMessage = React.createRef();

  let addMessage = () => {
    let text = newMessage.current.value;
    props.onAddMessage(text);
  }

  let onMessageChange = () => {
    let text = newMessage.current.value;
    props.onMessageChange(text);
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