import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType} from "../../../index";

type MyPostsPropsType = {
  posts: Array<PostsType>
}

function MyPosts(props: MyPostsPropsType) {

  const postsElements = props.posts
    .map(p => <Post key={p.id} message={p.message} likeCount={p.likeCount}/>)

  return (
    <div className={s.postBlock}>
      <h2>my posts</h2>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add Post</button>
          <button>Remove Post</button>
        </div>

      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;
