import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {ActionsTypes, StateType} from "../../../redux/store";
export type DispatchType = (action: ActionsTypes) => void

const mapStateToProps = (state: StateType) => ({
  profilePage: state.profilePage
})
const mapDispatchToProps = (dispatch: DispatchType) => ({
  updateNewPostText: (text: string) => {
    if (text) {
      dispatch(updateNewPostTextAC(text));
    }
  },
  addPost: () => {
    dispatch(addPostAC());
  }
})

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

