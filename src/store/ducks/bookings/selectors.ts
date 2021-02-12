import { BookingState } from './types'

export const getBookedTicket = (state: BookingState) => state.bookedTicket
export const error = (state: BookingState) => state.error
export const success = (state: BookingState) => state.success
export const isLoading = (state: BookingState) => state.loading
