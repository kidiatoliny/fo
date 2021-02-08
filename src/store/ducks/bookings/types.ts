import { HttpResponseError } from '~/types'
import { ActionType } from 'typesafe-actions'

import { actions } from '.'
import { FareTax } from '../travels/types'
/**
 * ACTIONS TYPE
 */
export enum BookingActionTypes {
  BOOKING_SAVE_REQUEST = '@booking/BOOKING_SAVE_REQUEST',
  DEPARTURE_BOOKING_SAVE_REQUEST_SUCCESS = '@booking/BOOKING_SAVE_REQUEST_SUCCESS',
  RETURN_BOOKING_SAVE_REQUEST_SUCCESS = '@booking/BOOKING_SAVE_REQUEST_SUCCESS',
  BOOKING_SAVE_REQUEST_FAILURE = '@booking/BOOKING_SAVE_REQUEST_FAILURE',
  CLEAR_ERROR = '@booking/CLEAR_ERROR'
}

export type BookingAction = ActionType<typeof actions>

export interface BookingMainContact {
  first_name: string
  last_name: string
  phone: string
  mobile: string
  email: string
}

export interface BookingRoute {
  route_id: number
  schedule_id: number
  schedule_date: string
}

export interface BookingVehicle {
  brand: string
  model: string
  register_id: string
  fare_id: number
  fare_tax: FareTax[]
  routes: BookingRoute[]
}
export interface BookingPassenger {
  first_name: string
  last_name: string
  document_type: number
  document_data: string
  fare_id: number
  fare_tax: FareTax[]
  routes: BookingRoute[]
}
export interface Booking {
  main_contact: BookingMainContact
  passengers: BookingPassenger[]
  vehicles: BookingVehicle[]
}
export interface BookingState {
  readonly booking: Booking
  readonly success: boolean
  readonly loading: boolean
  readonly error: HttpResponseError
}
