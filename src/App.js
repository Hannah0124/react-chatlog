import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import ChatHeader from './components/ChatHeader';

const App = () => {
  console.log(chatMessages);

  const senders = [];
  chatMessages.forEach(message => {
    if (!senders.includes(message.sender)) {
      senders.push(message.sender)
    }
  })

  return (
    <div id="App">
      <header>
        <ChatHeader senders={senders}/>
      </header>
      <main>
        <ChatLog chatMessages={chatMessages}/>
      </main>
    </div>
  );
};

export default App;
