import React, {ChangeEvent, useState} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType} from "../../../redux/state";


type MyPostsPropsType = {
  posts: Array<PostsType>
  addPost: () => void
  updateNewPostText: (newText: string) => void
  newPostText: string
}

function MyPosts(props: MyPostsPropsType) {

  const postsElements = props.posts
    .map(p => <Post key={p.id} message={p.message} likeCount={p.likeCount}/>)

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let text = e.currentTarget.value;

    if (text) {
      props.updateNewPostText(text);
    }
  }

  const addPost = () => {
    props.addPost()
  }
  return (
    <div className={s.postBlock}>
      <h2>my posts</h2>
      <div>
        <div>
          <textarea value={props.newPostText} onChange={onPostChange}/>
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
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
