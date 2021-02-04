import { Reducer } from 'redux'

import { User, UserActionTypes, UserState } from './types'

export const INITIAL_STATE: UserState = {
  profile: {} as User,
  loading: false,
  error: null
}

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.USER_PROFILE_REQUEST:
      return { ...state, loading: true }

    case UserActionTypes.USER_PROFILE_REQUEST_SUCCESS:
      return { ...state, loading: false, profile: action.payload }

    case UserActionTypes.USER_PROFILE_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        profile: {} as User,
        error: action.payload
      }

    case UserActionTypes.CLEAR_ERROR:
      return { ...state, error: null }
    default:
      return state
  }
}

export default reducer
