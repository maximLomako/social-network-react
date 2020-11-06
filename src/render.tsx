import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

import React from "react";
import {StateType} from "./redux/state";



export const rerenderEntireTree = (state: StateType,
                                   addPost: () => void,
                                   updateNewPostText: (newText: string) => void) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}
  />
  </BrowserRouter>,
  document.getElementById('root')
);
}