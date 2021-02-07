import { HttpResponseError } from '~/types'
import { ActionType } from 'typesafe-actions'

import { actions } from '.'
export enum TravelActionTypes {
  TRAVEL_REQUEST = '@travel/TRAVEL_REQUEST',
  DEPARTURE_TRAVEL_REQUEST_SUCCESS = '@travel/TRAVEL_REQUEST_SUCCESS',
  RETURN_TRAVEL_REQUEST_SUCCESS = '@travel/TRAVEL_REQUEST_SUCCESS',
  TRAVEL_REQUEST_FAILURE = '@travel/TRAVEL_REQUEST_FAILURE',
  CLEAR_ERROR = '@travel/CLEAR_ERROR'
}
/**
 * ACTIONS TYPE
 */
export type TravelAction = ActionType<typeof actions>
/**
 * Data Types
 */
export interface Departure {
  date: string
  name: string
  route_id: number
  schedule?: Array<Schedule>
}

export interface RouteFare {
  id: number
  fare_type: string
  fare_type_description: string
  fare_code: string
  fare_description: string
  amount: string
  weight_place: number
}
export interface FareTax {
  id: number
  fare_type?: string
  code?: string
  name?: string
  amount?: string
}
export interface Travel {
  departure?: Departure
  return?: Departure
  route_fare?: Array<RouteFare>
  fare_tax?: Array<FareTax>
}
export interface Schedule {
  id: number
  route_id: number
  ship_id: number
  departure_time: string
  time_duration: number
  max_seat: number
  max_vehicle: number
  is_active: boolean
}

export interface SearchTravel {
  departure: number
  destination: number
  departureDate?: string
  returnDate?: string | null
}

export interface TravelState {
  readonly departure: Travel
  readonly return: Travel
  readonly loading: boolean
  readonly error: HttpResponseError
}
