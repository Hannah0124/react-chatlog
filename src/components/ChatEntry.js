import React from "react"
import './ChatEntry.css';
import Timestamp from "./Timestamp";

const ChatEntry = (props) => {
  console.log(props);
  let locationStyle = "chat-entry"
  if (props.sender === 'Estragon') {
    locationStyle += ' remote';

  } else {
    locationStyle += ' local';
  }

  return (
    <div className={locationStyle}>
      <h2 className="entry-name">{ props.sender }</h2>

      <section className="entry-bubble">
        <p>{ props.body }</p>
        <time className="entry-time">
          <Timestamp time={ props.timeStamp }/>
        </time>
      </section>
    </div>
  );
};

export default ChatEntry;