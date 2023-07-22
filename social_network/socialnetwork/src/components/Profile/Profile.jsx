import React from 'react';
import Mainphoto from './Profile_main_photo'
import About from './Profile_about'
import PostformContainer from './Profile_post_form_container'
import PostsContainer from './Profile_posts_container'
import './Profile.css'
const Profile = (props) => {

  return (
    <main >
      <Mainphoto />
      <About lastname='Valuevich' />
      <PostformContainer store={props.store} />
      <PostsContainer store={props.store} />
    </main>
  );
}

export default Profile;