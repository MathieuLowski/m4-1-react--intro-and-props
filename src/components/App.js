import React from "react";
//The impor ts bellow allows us place them in the app. js file
import Header from "./Header";
import ChatStream from "./ChatStream";
import Footer from "./Footer";

import "./App.css";
//
const App = (props) => {
  //Header, ChatStream/Footer are the 3 components (bits of code) that get returnend.
  //The elements returned are wrapped in a "<div>". It is necessary because the function can
  //only return 1 thing. Wrapping them together turns them into 1 thing.

  console.log(props); // ({current user + conversation}Export default?)

  return (
    <div className="wrapper">
      <Header />
      <ChatStream
        message={props.conversation.messages}
        currentUser={props.currentUser}
      />
      <Footer />
    </div>
  );
};

export default App;
