import React from "react";

import "./ChatStream.css";
import { createPropertySignature } from "typescript";

const ChatMessage = (props) => {
  console.log(props);
  console.log(props.user); //The values passed from ChatStream (kind of working like the index props ?!)
  console.log(props.body); //The values passed from ChatStream (kind of working like the index props ?!)
  console.log(props.messageType); //The valors passed from ChatStream (kind of working like the index props ?!)
  console.log(props.user.username);

  //console.log(props.body);
  if (props.messageType === "sent") {
    return <SentMessage body={props.body} />;
  } else {
    return <ReceivedMessage message={props} />;
  }
};

const SentMessage = (props) => {
  console.log(props);
  return (
    <div className="sentMessages">
      <p className="sent">{props.body}</p>
    </div>
  );
};

const ReceivedMessage = (props) => {
  console.log(props);
  return (
    <div className="chat-message">
      <img className="avatar" src={props.message.user.avatar}></img>
      <div>
        <p className="user">{props.message.user.username}</p>
        <p className="message">{props.message.body}</p>
      </div>
    </div>
  );
};
export default ChatMessage;
