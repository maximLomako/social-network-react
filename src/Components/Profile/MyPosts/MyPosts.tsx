import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {
  return (
      <div>
        my posts
        <div>
          <textarea></textarea>
          <button>Add Post</button>
          <button>Remove Post</button>
        </div>
        <div className={s.posts}>
          <Post message="It's my first post" likeCount={22}/>
          <Post message='How are you' likeCount={37}/>
        </div>
      </div>
  )
}

export default MyPosts;
