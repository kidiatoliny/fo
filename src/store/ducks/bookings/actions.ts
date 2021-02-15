import { HttpResponseError } from '~/types'
import { action } from 'typesafe-actions'

import { Booking, BookingActionTypes } from './types'

/**
 * BOOKING SAVE ACTIONS
 */
export const bookingSaveRequest = (payload: Booking) =>
  action(BookingActionTypes.BOOKING_SAVE_REQUEST, payload)

export const bookingSaveRequestSuccess = (payload: Booking) =>
  action(BookingActionTypes.RETURN_BOOKING_SAVE_REQUEST_SUCCESS, payload)

export const bookingSaveRequestFailure = (payload: HttpResponseError) =>
  action(BookingActionTypes.BOOKING_SAVE_REQUEST_FAILURE, payload)

export const clearError = () => action(BookingActionTypes.CLEAR_ERROR)
