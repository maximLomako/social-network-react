import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {DialogsDataType, MessagesType, PostsType} from "./index";

type AppPropsType = {
  posts: Array<PostsType>
  dialogsData: Array<DialogsDataType>
  messages: Array<MessagesType>

}

function App(props: AppPropsType) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => <Profile
            posts={props.posts}
          />}/>
          <Route path='/dialogs' render={() => <Dialogs
            dialogsData={props.dialogsData}
            messages={props.messages}
          />}/>
          <Route path='/news' render={() => <News/>}/>
          <Route path='/music' render={() => <Music/>}/>
          <Route path='/settings' render={() => <Settings/>}/>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
