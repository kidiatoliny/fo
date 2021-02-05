import { Reducer } from 'redux'

import { LocationActionTypes, LocationState } from './types'

export const INITIAL_STATE: LocationState = {
  locations: [],
  loading: false,
  error: null
}

const reducer: Reducer<LocationState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LocationActionTypes.LOCATIONS_REQUEST:
      return { ...state, loading: true }

    case LocationActionTypes.LOCATIONS_REQUEST_SUCCESS:
      return { ...state, loading: false, locations: action.payload }

    case LocationActionTypes.LOCATIONS_REQUEST_FAILURE:
      return { ...state, loading: false, locations: [], error: action.payload }

    case LocationActionTypes.CLEAR_ERROR:
      return { ...state, error: null }
    default:
      return state
  }
}

export default reducer
