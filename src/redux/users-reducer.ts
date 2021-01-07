import {ActionsTypes} from "./store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

type LocationType = {
  city: string
  country: string
}
type UserType = {
  id: number
  photoUrl: string
  followed: boolean
  fullName: string
  status: string
  location: LocationType
}
export type UsersType = Array<UserType>
export type initialStateUsersType = { users: UsersType }

const initialState: initialStateUsersType | null = {
  users: []
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
    case "SET_USERS":
      return {...state, users: [...state.users, ...action.users]}
    default:
      return state;
  }
}

export const followAC = (userID: number) => ({type: FOLLOW, userID} as const)
export const unFollowAC = (userID: number) => ({type: UNFOLLOW, userID} as const)
export const setUsersAC = (users: UsersType) => ({type: SET_USERS, users} as const)

export default usersReducers;