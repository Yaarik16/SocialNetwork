import React from "react";
import Image2 from './../../emoji-me.png'



const Post = (props) => {
    return (
        <div>
            <p className='post'><img className='circle' src={Image2} /> {props.date}  {props.post} {props.likes} <span>♥</span> </p>
        </div>
    );
}

export default Post;