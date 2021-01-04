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

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header/>
      {/*<Navbar state={state.sidebar}/>*/}
      <div className='app-wrapper-content'>
        <Route path='/profile' render={() => <Profile/>}/>
        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
        <Route path='/news' render={() => <News/>}/>
        <Route path='/music' render={() => <Music/>}/>
        <Route path='/settings' render={() => <Settings/>}/>

      </div>
    </div>
  );
}

export default App;
