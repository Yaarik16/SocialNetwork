import React from "react";


const Postform = (props) => {
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className='post'>
      <div className='post_title'>
        <p>My posts</p>
      </div>
      <div className='input'>
        <textarea onChange={onPostChange} ref={newPostElement} placeholder='Your new post' value={props.state.profilePage.newPostText} />
      </div>
      <div className='send'>
        <button onClick={onAddPost} type='submit'>Add post</button>
      </div>
      <hr />
    </div>
  );
}

export default Postform;