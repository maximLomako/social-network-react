import React from 'react';
import './index.css';
import {StateType, store, StoreType} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App store={store}/>
    </BrowserRouter>,
    document.getElementById('root')
  );
}


store.subscribe(rerenderEntireTree);
rerenderEntireTree();
