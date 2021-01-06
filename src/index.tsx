import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/redux-store";
import {Provider} from "react-redux";

const rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App store={store}/>
      </Provider>

    </BrowserRouter>,
    document.getElementById('root')
  );
}


store.subscribe(() => {
  rerenderEntireTree();
});
rerenderEntireTree();
