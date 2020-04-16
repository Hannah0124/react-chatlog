import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';


const ChatLog = (props) => {
  const chatLogComponent = props.chatMessages.map(message => {
    return (
      <section key={message.timeStamp}>
        <ChatEntry sender={message.sender} body={message.body} timeStamp={message.timeStamp}/>   
      </section>
    )
  });


  return (
    <div className="chat-log">
      { chatLogComponent }
    </div>
  );
}; 


export default ChatLog;