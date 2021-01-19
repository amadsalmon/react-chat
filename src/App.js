import React, { useState } from "react";
import Message from "./Message";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">ReactChat</header>
      <div className="chat-container">
        <Message type="sent" content="Hey Mark! How are you?" />
        <Message type="received" content="Hi, good and you?" />
        <Message
          type="sent"
          content="Great thanks. Wanna grab a coffee later?"
        />
        <Message type="sent" content="or a tea?... 😅" />
        <Message type="received" content="Yeah sure why not!" />
        <Message
          type="received"
          content="I mean it's been a long time since I haven't seen you :)"
        />
        <Message type="received" content="at what time will you be free?" />
        <Message
          type="sent"
          content="I finish work at 6:30pm. Can you meet me at the mall?"
        />{" "}
        <Message
          type="received"
          content="Actually I know a pretty good tea salon near your work office. A place called Teaafiy or something... I'm not really sure 🤔"
        />
        <Message
          type="sent"
          content="Oh yeah I think I've heard of that place!"
        />
        <Message
          type="sent"
          content="I heard they had great scones too. You up?"
        />
        <Message
          type="received"
          content="Definitely! Meet you there at 6:45 then!"
        />
        <Message type="sent" content="Great, works for me!" />
        <Message
          type="sent"
          content="Oops I forgot to tell you I'll bring my boss with me too."
        />
        <Message type="sent" content="Is that a problem?" />
        <Message type="sent" content="Mark???" />
        <Message
          type="sent"
          content="Oh come on.... you didn't just block me!?"
        />
      </div>
    </div>
  );
}

export default App;
