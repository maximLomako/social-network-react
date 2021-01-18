import {ActionsTypes} from "./store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

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
}

const initialState: initialStateUsersType | null = {
  users: [],
  pageSize: 50,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false
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
    default:
      return state;
  }
}

export const followAC = (userID: number) => ({type: FOLLOW, userID} as const)
export const unFollowAC = (userID: number) => ({type: UNFOLLOW, userID} as const)
export const setUsersAC = (users: UsersType) => ({type: SET_USERS, users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCountAC = (totalCount: number) => ({type: SET_TOTAL_USER_COUNT, totalCount} as const)
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)

export default usersReducers;