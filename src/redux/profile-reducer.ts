import {sendMessageAC, updateNewMessageBodyAC} from "./dialogs-reducer";
import {profileAPI} from "../api/api";
import {ThunkType} from "./users-reducer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USERS_PROFILE = "SET-USERS-PROFILE";
const SET_STATUS = "SET-STATUS";

export type ActionsTypes = ReturnType<typeof addPostAC>
  | ReturnType<typeof updateNewPostTextAC>
  | ReturnType<typeof sendMessageAC>
  | ReturnType<typeof updateNewMessageBodyAC>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setStatus>

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
  status: string
}

const initialState = {
  posts: [
    {id: 1, message: "It's my first post", likeCount: 21},
    {id: 2, message: 'How are you', likeCount: 23},
    {id: 3, message: 'Yoo', likeCount: 24}
  ],
  newPostText: '',
  profile: null,
  status: ''
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
    case SET_STATUS:
      return {
        ...state,
        status: action.status
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
export const setStatus = (status: string) => ({type: SET_STATUS, status: status} as const)

export const getUserProfile = (userId: string): ThunkType => (dispatch: (action: ActionsTypes) => void) => {
  profileAPI.getUserProfile(userId)
    .then(data => {
      dispatch(setUserProfile(data));
    })
}


export const getStatus = (userId: string): ThunkType => (dispatch: (action: ActionsTypes) => void) => {
  profileAPI.getUserStatus(userId)
    .then(response => {
        dispatch(setStatus(response.data));
    })
}

export const updateStatus = (status: string): ThunkType => (dispatch: (action: ActionsTypes) => void) => {
  profileAPI.updateUserStatus(status)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    })
}



export default profileReducer;