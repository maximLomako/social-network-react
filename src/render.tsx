import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

import React from "react";
import {addMessage, StateType, updateNewMessageText} from "./redux/state";


export const rerenderEntireTree = (state: StateType,
                                   addPost: () => void,
                                   updateNewPostText: (newText: string) => void,
                                   addMessage: () => void,
                                   updateNewMessageText: (newText: string) => void) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state}
           addPost={addPost}
           updateNewPostText={updateNewPostText}
           addMessage={addMessage}
           updateNewMessageText={updateNewMessageText}
      />
    </BrowserRouter>,
    document.getElementById('root')
  );
}