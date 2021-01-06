import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {ProfilePageType,} from "../../../redux/store";

type MyPostsPropsType = {
  profilePage: ProfilePageType
  updateNewPostText: (text: string) => void
  addPost: () => void
}

function MyPosts(props: MyPostsPropsType) {

  const postsElements = props.profilePage.posts
    .map(p => <Post key={p.id} message={p.message} likeCount={p.likeCount}/>)

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let text = e.currentTarget.value;
    if (text) {
      props.updateNewPostText(text);
    }
  }

  const onAddPost = () => {
    props.addPost();
  }
  return (
    <div className={s.postBlock}>
      <h2>my posts</h2>
      <div>
        <div>
          <textarea value={props.profilePage.newPostText} onChange={onPostChange}/>
        </div>
        <div>
          <button onClick={onAddPost}>Add Post</button>
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
