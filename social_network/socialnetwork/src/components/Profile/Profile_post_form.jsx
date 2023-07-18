import React from "react";
import { addPostActionCreator } from "../../redux/profile_reducer";
import { updateNewPostTextActionCreator } from "../../redux//profile_reducer";

const Postform = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  }

  return (
    <div className='post'>
      <div className='post_title'>
        <p>My posts</p>
      </div>
      <div className='input'>
        <textarea onChange={onPostChange} ref={newPostElement} placeholder='Your new post' value={props.newPostText} />
      </div>
      <div className='send'>
        <button onClick={addPost} type='submit'>Add post</button>
      </div>
      <hr />
    </div>
  );
}

export default Postform;