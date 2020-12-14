import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {Route} from 'react-router-dom';
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {ActionsTypes, DialogsPageType, ProfilePageType, SidebarType} from "./redux/store";
import {CombinedState, Store} from 'redux';
import DialogsContainer from "./Components/Dialogs/DialogsContainer";


type AppPropsType = {
  store: Store<CombinedState<{ profilePage: ProfilePageType; dialogsPage: DialogsPageType; sidebar: SidebarType; }>, ActionsTypes>
}

function App(props: AppPropsType) {
  const state = props.store.getState();
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navbar state={state.sidebar}/>
      <div className='app-wrapper-content'>
        <Route path='/profile' render={() => <Profile
          store={props.store}
        />}/>
        <Route path='/dialogs' render={() => <DialogsContainer
          store={props.store}
        />}/>
        <Route path='/news' render={() => <News/>}/>
        <Route path='/music' render={() => <Music/>}/>
        <Route path='/settings' render={() => <Settings/>}/>

      </div>
    </div>
  );
}

export default App;
