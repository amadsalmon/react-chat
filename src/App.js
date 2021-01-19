import React, { useState } from "react";
import Message from "./Message";
import "./App.css";

function sendButtonClicked() {
  console.log("sendButtonClicked");
}

function App() {
  const [messages, setMessages] = useState([
    { type: "sent", content: "Hey Mark! How are you?" },
    { type: "received", content: "Hi, good and you?" },
    { type: "sent", content: "Great thanks. Wanna grab a coffee later?" },
    { type: "sent", content: "or a tea?... 😅" },
    { type: "received", content: "Yeah sure why not!" },
    {
      type: "received",
      content: "I mean it's been a long time since I haven't seen you :)",
    },
    { type: "received", content: "at what time will you be free?" },
    {
      type: "sent",
      content: "I finish work at 6:30pm. Can you meet me at the mall?",
    },
    {
      type: "received",
      content:
        "Actually I know a pretty good tea salon near your work office. A place called Teaafiy or something... I'm not really sure 🤔",
    },
    { type: "sent", content: "Oh yeah I think I've heard of that place!" },
    {
      type: "sent",
      content: "I heard they had great scones too. You up?",
    },
    { type: "received", content: "Definitely! Meet you there at 6:45 then!" },
    { type: "sent", content: "Great, works for me!" },
    {
      type: "sent",
      content: "Oops I forgot to tell you I'll bring my boss with me too.",
    },
    { type: "sent", content: "Is that a problem?" },
    { type: "sent", content: "Mark???" },
    { type: "sent", content: "Oh come on.... you didn't just block me!?" },
  ]);

  return (
    <div className="App">
      <header className="App-header">ReactChat</header>
      <div className="chat-container">
        {messages.map((message) => (
          <Message type={message.type} content={message.content} />
        ))}
      </div>
      <div className="composing-bar">
        <input
          type="text"
          id="messageToSend-textField"
          name="messageToSend"
          required
          minLength="1"
          size="30"
          placeholder="Type your message here..."
          spellCheck="true"
        ></input>
        <input
          type="image"
          id="sendButton"
          alt="Send"
          src="https://icongr.am/feather/arrow-up-circle.svg?size=128&color=ffffff"
          onClick={sendButtonClicked}
        />
      </div>
    </div>
  );
}

export default App;
