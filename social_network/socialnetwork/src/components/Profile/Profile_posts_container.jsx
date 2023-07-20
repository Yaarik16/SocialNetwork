import React from "react";
import Posts from "./Profile_posts";



const PostsContainer = (props) => {

    let state = props.store.getState();
    return (
        <Posts postData={state.profilePage.postsData}/>
    );
}

export default PostsContainer;