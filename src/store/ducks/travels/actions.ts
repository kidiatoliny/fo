import { HttpResponseError } from '~/types'
import { action } from 'typesafe-actions'

import { SearchTravel, Travel, TravelActionTypes } from './types'
export const travelRequest = (payload: SearchTravel) =>
  action(TravelActionTypes.TRAVEL_REQUEST, payload)

export const departureTravelRequestSuccess = (payload: Travel) =>
  action(TravelActionTypes.DEPARTURE_TRAVEL_REQUEST_SUCCESS, payload)

export const returnTravelRequestSuccess = (payload: Travel) =>
  action(TravelActionTypes.RETURN_TRAVEL_REQUEST_SUCCESS, payload)

export const travelRequestFailure = (payload: HttpResponseError) =>
  action(TravelActionTypes.TRAVEL_REQUEST_FAILURE, payload)

export const clearError = () => action(TravelActionTypes.CLEAR_ERROR)
