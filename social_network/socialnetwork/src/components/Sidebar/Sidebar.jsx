import React from 'react';
import Links from './Sidebar_links'
import Options from './Sidebar_options'
import Friends from './Sidebar_friends';
import './Sidebar.css'


const SideBar = (props) => { 
  return (
    <nav className='Sidebar'>
      <Links />
      <Options />
      <Friends friends={props.friends} />
    </nav>
  );
}

export default SideBar;