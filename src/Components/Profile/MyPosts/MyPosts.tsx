import React, {ChangeEvent, useState} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType} from "../../../redux/state";


type MyPostsPropsType = {
  posts: Array<PostsType>
  addPost: (postMessage: string) => void
}

function MyPosts(props: MyPostsPropsType) {

  const newPostElement = React.createRef<HTMLTextAreaElement>()

  const postsElements = props.posts
    .map(p => <Post key={p.id} message={p.message} likeCount={p.likeCount}/>)

  const [textAreaInputValue, setTextAreaInputValue] = useState('');

  const OnChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaInputValue(e.currentTarget.value)
  }

  const addPost = () => {
    if (newPostElement.current) {
      props.addPost(textAreaInputValue);
      newPostElement.current.value='';
    }
  }
  return (
    <div className={s.postBlock}>
      <h2>my posts</h2>
      <div>
        <div>
          <textarea ref={newPostElement} value={textAreaInputValue} onChange={OnChangeHandler}></textarea>
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
