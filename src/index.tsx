import React from 'react';
import './index.css';
import {addMessage, addPost, state, StateType, subscribe, updateNewMessageText, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const rerenderEntireTree = (state: StateType) => {
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

rerenderEntireTree(state);
subscribe(rerenderEntireTree);
