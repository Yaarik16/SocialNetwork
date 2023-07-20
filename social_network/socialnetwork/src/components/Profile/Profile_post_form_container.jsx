import React from "react";
import { addPostActionCreator } from "../../redux/profile_reducer";
import { updateNewPostTextActionCreator } from "../../redux//profile_reducer";
import Postform from "./Profile_post_form";


const PostformContainer = (props) => {
  debugger;
  let state = props.store.getState();


  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }
  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  }

  return (
    <Postform updateNewPostText={onPostChange} addPost={addPost} newPostText={state.profilePage.newPostText} />
  );
}

export default PostformContainer;