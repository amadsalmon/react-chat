import React, { useState } from "react";
import Message from "./Message";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">ReactChat</header>
      <div className="chat-container">
        <Message type="sent" content="Hey! How are you?" />
        <Message type="received" content="Hi, good and you?" />
        <Message
          type="sent"
          content="Great thanks. Wanna grab a coffee later?"
        />
        <Message type="sent" content="or a tea?... 😅" />
      </div>
    </div>
  );
}

export default App;
