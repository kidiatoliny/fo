import { HttpResponseError } from '~/types'
import { Reducer } from 'redux'

import { Booking, BookingActionTypes, BookingState } from './types'

export const INITIAL_STATE: BookingState = {
  booking: {} as Booking,
  success: false,
  loading: false,
  error: {} as HttpResponseError
}

const reducer: Reducer<BookingState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BookingActionTypes.BOOKING_SAVE_REQUEST:
      return { ...state, loading: true }

    case BookingActionTypes.DEPARTURE_BOOKING_SAVE_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        booking: action.payload
      }

    case BookingActionTypes.BOOKING_SAVE_REQUEST_FAILURE:
      return { ...state, loading: false, error: action.payload }

    case BookingActionTypes.CLEAR_ERROR:
      return { ...state, error: {} as HttpResponseError }
    default:
      return state
  }
}

export default reducer
