import {ActionsTypes} from "./store";
import {usersAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {RootStateType} from "./redux-store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

type UserType = {
  name: string
  id: number
  uniqueUrlName: null
  photos: {
    small: string | null,
    large: null
  },
  status: null,
  followed: boolean
}
export type UsersType = Array<UserType>
export type initialStateUsersType = {
  users: UsersType
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: [] | Array<number>
}

const initialState: initialStateUsersType | null = {
  users: [],
  pageSize: 50,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
}


const usersReducers = (state: initialStateUsersType = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return {...u, followed: true}
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return {...u, followed: false}
          }
          return u;
        })
      }
    case SET_USERS:
      return {...state, users: [...action.users]};
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }
    case SET_TOTAL_USER_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount
      }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    default:
      return state;
  }
}

export const followSuccess = (userID: number) => ({type: FOLLOW, userID} as const)
export const unFollowSuccess = (userID: number) => ({type: UNFOLLOW, userID} as const)
export const setUsers = (users: UsersType) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalCount: number) => ({type: SET_TOTAL_USER_COUNT, totalCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId
} as const)

export type ThunkType = ThunkAction<void, RootStateType, unknown, ActionsTypes>

export const getUsers = (currentPage: number, pageSize: number) => (dispatch: (action: ActionsTypes) => void) => {
  dispatch(toggleIsFetching(true));
  usersAPI.getUsers(currentPage, pageSize).then(data => {
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(toggleIsFetching(false));
  })
}

export const follow = (userId: number) => (dispatch: (action: ActionsTypes) => void) => {
  dispatch(toggleIsFollowingProgress(true, userId));
  usersAPI.followUser(userId)
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(followSuccess(userId))
      }
      dispatch(toggleIsFollowingProgress(false, userId));
    })
}

export const unFollow = (userId: number) => (dispatch: (action: ActionsTypes) => void) => {
  dispatch(toggleIsFollowingProgress(true, userId));
  usersAPI.unFollowUser(userId)
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(unFollowSuccess(userId))
      }
      dispatch(toggleIsFollowingProgress(false, userId));
    })
}

export default usersReducers;