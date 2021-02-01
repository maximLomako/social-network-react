import {sendMessageAC, updateNewMessageBodyAC} from "./dialogs-reducer";
import {usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USERS_PROFILE = "SET-USERS-PROFILE";

export type ActionsTypes = ReturnType<typeof addPostAC>
  | ReturnType<typeof updateNewPostTextAC>
  | ReturnType<typeof sendMessageAC>
  | ReturnType<typeof updateNewMessageBodyAC>
  | ReturnType<typeof setUserProfile>

export type ProfileUserType = {
  aboutMe: string
  contacts: {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
  }
  lookingForAJob: boolean
  lookingForAJobDescription: string | null
  fullName: string | null
  userId: number
  photos: {
    small: string | null
    large: string | null
  }
}
export type PostsType = {
  id: number
  message: string
  likeCount: number
}
export type ProfilePageType = {
  posts: Array<PostsType>
  newPostText: string
  profile: ProfileUserType | null
}

const initialState = {
  posts: [
    {id: 1, message: "It's my first post", likeCount: 21},
    {id: 2, message: 'How are you', likeCount: 23},
    {id: 3, message: 'Yoo', likeCount: 24}
  ],
  newPostText: '',
  profile: null
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [...state.posts, {id: 5, message: state.newPostText, likeCount: 0}],
        newPostText: ''
      };
    }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      };
    case SET_USERS_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
    default:
      return state;
  }
}

export const addPostAC = () => ({type: ADD_POST} as const)
export const updateNewPostTextAC = (text: string) =>
  ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)
export const setUserProfile = (profile: ProfileUserType | null) =>
  ({type: SET_USERS_PROFILE, profile} as const)

export const getUserProfile = (userId: string) => (dispatch: (action: ActionsTypes) => void) => {
  if (!userId) {
    userId = '2'
  }
  usersAPI.getUserProfile(userId)
    .then(data => {
      dispatch(setUserProfile(data));
    })
}


export default profileReducer;