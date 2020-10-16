import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

import React from "react";
import {StateType} from "./redux/state";

export const rerenderEntireTree = (state: StateType, addPost: (postMessage: string) => void) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost}
  />
  </BrowserRouter>,
  document.getElementById('root')
);
}