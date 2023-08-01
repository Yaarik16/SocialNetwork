import React from "react";
import { addPostActionCreator } from "../../redux/profile_reducer";
import { updateNewPostTextActionCreator } from "../../redux//profile_reducer";
import Postform from "./Profile_post_form";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    state: state
  }
}


let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    }
  }
}

const PostformContainer = connect(mapStateToProps, mapDispatchToProps)(Postform)

export default PostformContainer;