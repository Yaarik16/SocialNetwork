import React from 'react';
import Mainphoto from './Profile_main_photo'
import About from './Profile_about'
import PostformContainer from './Profile_post_form'
import PostsContainer from './Profile_posts'
import './Profile.css'
import store from '../../redux/store';

const Profile = (props) => {

  return (
    <main >
      <Mainphoto />
      <About lastname='Valuevich' />
      <PostformContainer store={store} />
      <PostsContainer store={store} />
    </main>
  );
}

export default Profile;