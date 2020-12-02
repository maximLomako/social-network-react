import React from "react";
import {ActionsTypes, ProfilePageType} from "./state";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
  switch (action.type) {
    case "ADD-POST":
      let newPost = {
        id: 5,
        message: state.newPostText,
        likeCount: 0
      }
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    case "UPDATE-NEW-POST-TEXT":
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
}

export const addPostAC = () => ({type: ADD_POST} as const)
export const updateNewPostTextAC = (text: string) =>
  ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)

export default profileReducer;