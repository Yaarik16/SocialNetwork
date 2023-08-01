import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages'
import New from './components/New/New';
import Music from './components/Music/Music';
import Options from './components/Options/Options'
import Lenta from './components/Lenta/lenta';
import { Route, Routes } from 'react-router-dom';
const App = (props) => {
  
  return (
      <div className='app-wrapper'>
        <Header />
        <SideBar friends={props.state.sideBar.friends} />
        <div className='Content'>
          <Routes>
            <Route path='' element={<Lenta />} />
            <Route path='/Profile' element={<Profile store={props.store} />} />
            <Route path='/Messages' element={<Messages store={props.store} chatData={props.state.messagePage.chatData} dispatch={props.dispatch} newFriendName = {props.state.messagePage.newFriendName} newMessageText = {props.state.messagePage.newMessageText}/>} />
            <Route path='/New' element={<New />} />
            <Route path='/Music' element={<Music />} />
            <Route path='/Options' element={<Options />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
