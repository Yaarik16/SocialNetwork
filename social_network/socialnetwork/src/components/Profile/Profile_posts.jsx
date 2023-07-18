import React from "react";
import Post from "./Profiel_Post";




const Posts = (props) => {


    let postItem = props.postData.map((post) => {
        return <Post date={post.date} post={post.post} likes={post.likes} />
    })


    return (
        <div>
            {postItem}
        </div>
    );
}

export default Posts;