import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {Route} from 'react-router-dom';
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import {ActionsTypes, DialogsPageType, ProfilePageType, SidebarType} from "./redux/store";
import {CombinedState, Store} from 'redux';
import UsersContainer from "./Components/Users/UsersContainer";

type AppPropsType = {
  store: Store<CombinedState<{ profilePage: ProfilePageType; dialogsPage: DialogsPageType; sidebar: SidebarType }>, ActionsTypes>
}
const App = (props: AppPropsType) => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navbar state={props.store.getState().sidebar}/>
      <div className='app-wrapper-content'>
        <Route path='/profile' render={() => <Profile/>}/>
        <Route path='/users' render={() => <UsersContainer/>}/>
        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
        <Route path='/news' render={() => <News/>}/>
        <Route path='/music' render={() => <Music/>}/>
        <Route path='/settings' render={() => <Settings/>}/>
      </div>
    </div>
  );
}

export default App;
