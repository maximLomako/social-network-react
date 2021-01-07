import {sendMessageAC, updateNewMessageBodyAC} from "./dialogs-reducer";
import {PostsType} from "./store";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export type ActionsTypes = ReturnType<typeof addPostAC>
  | ReturnType<typeof updateNewPostTextAC>
  | ReturnType<typeof sendMessageAC>
  | ReturnType<typeof updateNewMessageBodyAC>

export type ProfilePageType = {
  posts: Array<PostsType>
  newPostText: string
}

const initialState = {
  posts: [
    {id: 1, message: "It's my first post", likeCount: 21},
    {id: 2, message: 'How are you', likeCount: 23},
    {id: 3, message: 'Yoo', likeCount: 24}
  ],
  newPostText: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case "ADD-POST": {
      return {
        ...state,
        posts: [...state.posts, {id: 5, message: state.newPostText, likeCount: 0}],
        newPostText: ''
      };
    }
    case "UPDATE-NEW-POST-TEXT":
      return {
        ...state,
        newPostText: action.newText
      };
    default:
      return state;
  }
}

export const addPostAC = () => ({type: ADD_POST} as const)
export const updateNewPostTextAC = (text: string) =>
  ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)

export default profileReducer;