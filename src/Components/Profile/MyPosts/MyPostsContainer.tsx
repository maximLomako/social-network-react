import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

function MyPostsContainer() {


  return (
    <StoreContext.Consumer>
      {(store) => {
        if (store === null) {
          return
        }
        let state = store.getState().profilePage;
        const onPostChange = (text: string) => {
          if (text) {
            let action = updateNewPostTextAC(text);
            store.dispatch(action);
          }
        }
        const addPost = () => {
          store.dispatch(addPostAC())
        }
        return <MyPosts updateNewPostText={onPostChange}
                        addPost={addPost}
                        posts={state.posts}
                        newPostText={state.newPostText}/>
      }}
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer;
