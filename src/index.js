//Start of the application
import React from "react";
import ReactDOM from "react-dom";

import data from "./data";
import App from "./components/App";

import "./styles.css";
//This is where we render the the content passed in <App ....> trhough the "root" element.
//App is the component getting released. App holds all the others components that creates the whole app when put together
// (App includes => [(header), (ChatStream),(Footer)] = ther are assembles together in app.js )
//They all exit this point getting released in root.
const rootElement = document.getElementById("root");
ReactDOM.render(
  <App currentUser={data.currentUser} conversation={data.conversation} />,
  rootElement
);

// props= {
//   currentUser: data.currentUser,
//   conversation:data.conversation
// }
