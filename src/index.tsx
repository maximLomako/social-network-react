import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


export type PostsType = {
  id: number
  message: string
  likeCount: number
}

export type DialogsDataType = {
  id: number
  name: string
}

export type MessagesType = {
  id: number
  message: string
}


const posts: Array<PostsType> = [
  {id: 1, message: "It's my first post", likeCount: 21},
  {id: 2, message: 'How are you', likeCount: 23},
  {id: 3, message: 'Yoo', likeCount: 24}
]

const dialogsData: Array<DialogsDataType> = [
  {id: 1, name: 'Dimych'},
  {id: 2, name: 'Maxim'},
  {id: 3, name: 'Ignat'},
  {id: 4, name: 'Petya'},
  {id: 5, name: 'Vasiliy'}
]


const messages: Array<MessagesType> = [
  {id: 1, message: 'hello'},
  {id: 2, message: 'How are you'},
  {id: 3, message: 'Yoo'}
]

ReactDOM.render(
  <React.StrictMode>
    <App
      posts={posts}
      dialogsData={dialogsData}
      messages={messages}


    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
