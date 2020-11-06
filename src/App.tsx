import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {StoreType} from "./redux/state";



type AppPropsType = {
  store: StoreType
}

function App(props: AppPropsType) {
  const state = props.store.getState();
  return (
      <div className='app-wrapper'>
        <Header/>
        <Navbar state={state.sidebar}/>
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => <Profile
            profilePage={state.profilePage}
            addPost={props.store.addPost.bind(props.store)}
            updateNewPostText={props.store.updateNewPostText.bind(props.store)}
          />}/>
          <Route path='/dialogs' render={() => <Dialogs
            state={state.dialogsPage}
            addMessage={props.store.addMessage.bind(props.store)}
            updateNewMessageText={props.store.updateNewMessageText.bind(props.store)}
          />}/>
          <Route path='/news' render={() => <News/>}/>
          <Route path='/music' render={() => <Music/>}/>
          <Route path='/settings' render={() => <Settings/>}/>

        </div>
      </div>
  );
}

export default App;
