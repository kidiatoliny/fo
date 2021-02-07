import { HttpResponseError } from '~/types'
import { Reducer } from 'redux'

import { Travel, TravelActionTypes, TravelState } from './types'

export const INITIAL_STATE: TravelState = {
  departure: {} as Travel,
  return: {} as Travel,
  loading: false,
  error: {} as HttpResponseError
}

const reducer: Reducer<TravelState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TravelActionTypes.TRAVEL_REQUEST:
      return { ...state, loading: true }

    case TravelActionTypes.DEPARTURE_TRAVEL_REQUEST_SUCCESS:
      return { ...state, loading: false, departure: action.payload }

    case TravelActionTypes.RETURN_TRAVEL_REQUEST_SUCCESS:
      return { ...state, loading: false, return: action.payload }

    case TravelActionTypes.TRAVEL_REQUEST_FAILURE:
      return { ...state, loading: false, error: action.payload }

    case TravelActionTypes.CLEAR_ERROR:
      return { ...state, error: {} as HttpResponseError }
    default:
      return state
  }
}

export default reducer
