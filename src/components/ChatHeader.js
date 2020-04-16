import React from 'react';

const ChatHeader = (props) => {
  return (
  <h1>Chat between { props.senders[0] } and { props.senders[1] }</h1>
  );
};

export default ChatHeader;