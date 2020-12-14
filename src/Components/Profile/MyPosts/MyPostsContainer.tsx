import React from "react";
import {
  ActionsTypes, DialogsPageType,
  PostsType, ProfilePageType, SidebarType,
} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {CombinedState, Store} from "redux";


type MyPostsContainerPropsType = {
  store: Store<CombinedState<{ profilePage: ProfilePageType; dialogsPage: DialogsPageType; sidebar: SidebarType; }>, ActionsTypes>
}


function MyPostsContainer(props: MyPostsContainerPropsType) {

  let state = props.store.getState().profilePage;

  const onPostChange = (text: string) => {
    if (text) {
      let action = updateNewPostTextAC(text);
      props.store.dispatch(action);

    }
  }

  const addPost = () => {
    props.store.dispatch(addPostAC())
  }

  return (
    <MyPosts updateNewPostText={onPostChange}
             addPost={addPost}
             posts={state.posts}
             newPostText={state.newPostText}/>
  )
}

export default MyPostsContainer;
