import { Reducer } from 'redux'

import { LoginActionTypes, AuthState, Role } from './types'

export const INITIAL_STATE: AuthState = {
  token: localStorage.getItem('token'),
  loading: false,
  error: null,
  isLogdin: !!localStorage.getItem('token'),
  role: {} as Role,
  tokenExpirationDate: new Date()
}

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LoginActionTypes.LOGIN_REQUEST:
      return { ...state, loading: true }

    case LoginActionTypes.LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload)
      return {
        ...state,
        token: action.payload,
        loading: false,
        error: null
      }
    case LoginActionTypes.GET_ROLE:
      return {
        ...state,

        role: action.payload
      }
    case LoginActionTypes.GET_TOKEN_EXPIRATION_DATE:
      return {
        ...state,
        tokenExpirationDate: action.payload
      }
    case LoginActionTypes.LOGIN_FAILURE:
      localStorage.removeItem('token')
      return { ...state, loading: false, error: action.payload }
    case LoginActionTypes.LOGOUT:
      localStorage.removeItem('token')
      return { ...state, token: null }
    default:
      return state
  }
}
export default reducer
