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
    if (text === '') {
      alert('You can\'t submit empty field')
    } else {
      props.onAddMessage(text);
    }
  }

  let onMessageChange = () => {
    let text = newMessage.current.value;
    props.onMessageChange(text);
  }

  return (
    <div className='chat'>
      {dialogsElements}
      <textarea onChange={onMessageChange} className='textarea' ref={newMessage} placeholder="Enter your message" value={props.state.messagePage.newMessageText} />
      <button onClick={addMessage} className='textarea' type="submit">Send message</button>
    </div>
  );
}

export default Chat;  