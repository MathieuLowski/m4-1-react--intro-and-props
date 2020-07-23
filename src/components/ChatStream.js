import React from "react";

import "./ChatStream.css";
import ChatMessage from "./ChatMessage";

// The current user's messages should have:
// - a text color of #FFF
// - a background color of #1185f7
//
// Other participant's messages should have:
// - a text color of #000
// - a background color of #e9e9eb

const ChatStream = (props) => {
  // console.log(props); // Message + currentUser
  // console.log(props.message); // message array with id, user and body
  // console.log(props.currentUser); //userName= elaine ++ avatar and
  // // console.log(message.user);
  // console.log(props.currentUser.username);
  return (
    <section className="chat-stream">
      {props.message.map((message) => {
        //console.log(message);
        let messageType;
        if (message.user.username === props.currentUser.username) {
          messageType = "sent";
        } else {
          messageType = "received";
        }
        // console.log(user);
        console.log(message);
        console.log(messageType);
        console.log(message);
        // console.log()
        return (
          <ChatMessage
            user={message.user}
            body={message.body}
            messageType={messageType}
          />
        );
      })}
    </section>
  );
};

export default ChatStream;
