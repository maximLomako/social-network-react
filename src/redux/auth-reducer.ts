const SET_USER_DATE = 'SET-USER-DATE';

export type AuthPageType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}

export type AuthActionsType = ReturnType<typeof setAuthUserData>

export const initialState: AuthPageType = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
}

export const authReducer = (state: AuthPageType = initialState, action: AuthActionsType) => {
  switch (action.type) {
    case SET_USER_DATE:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    default :
      return state
  }
}

export const setAuthUserData = (userId: number, email: string, login: string) =>
  ({type: SET_USER_DATE, data: {userId, email, login}} as const)