import React from "react";
import "./App.css";

function Message(props) {
  return (
    <div className={"message-bubble " + props.type}>
      <p>{props.content}</p>
    </div>
  );
}
export default Message;
