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
import {StateType} from "./redux/state";


type AppPropsType = {
  state: StateType
  addPost: ()=>void
  updateNewPostText: (newText: string) => void
}

function App(props: AppPropsType) {
  return (
      <div className='app-wrapper'>
        <Header/>
        <Navbar state={props.state.sidebar}/>
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => <Profile
            profilePage={props.state.profilePage}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText}
          />}/>
          <Route path='/dialogs' render={() => <Dialogs
            state={props.state.dialogsPage}
          />}/>
          <Route path='/news' render={() => <News/>}/>
          <Route path='/music' render={() => <Music/>}/>
          <Route path='/settings' render={() => <Settings/>}/>

        </div>
      </div>
  );
}

export default App;
