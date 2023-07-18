import React from 'react';
import Mainphoto from './Profile_main_photo'
import About from './Profile_about'
import Postform from './Profile_post_form'
import Posts from './Profile_posts'
import './Profile.css'

const Profile = (props) => {
  

  return (
    <main >
      <Mainphoto />
      <About lastname='Valuevich' />
      <Postform newPostText={props.newPostText} dispatch={props.dispatch} />
      <Posts postData={props.postData} />
    </main>
  );
}

export default Profile;