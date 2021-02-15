import { HttpResponseError } from '~/types'
import { Reducer } from 'redux'

import { BookingActionTypes, BookingState, BookedTicket } from './types'

export const INITIAL_STATE: BookingState = {
  bookedTicket: {} as BookedTicket,
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
        bookedTicket: action.payload
      }

    case BookingActionTypes.BOOKING_SAVE_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        bookedTicket: {} as BookedTicket,
        printTicket: null
      }

    case BookingActionTypes.CLEAR_ERROR:
      return {
        ...state,
        error: {} as HttpResponseError,
        bookedTicket: {} as BookedTicket
      }
    default:
      return state
  }
}

export default reducer
