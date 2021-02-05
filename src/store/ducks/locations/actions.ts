import { HttpResponseError } from '~/types'
import { action } from 'typesafe-actions'

import { Location, LocationActionTypes } from './types'

/**
 * request Locations
 */
export const locationRequest = () =>
  action(LocationActionTypes.LOCATIONS_REQUEST)

/**
 *
 * @param payload  Locations object
 */
export const locationRequestSuccess = (payload: Array<Location>) =>
  action(LocationActionTypes.LOCATIONS_REQUEST_SUCCESS, payload)

/**
 * request Locations  failure
 */
export const locationRequestFailure = (payload: HttpResponseError) =>
  action(LocationActionTypes.LOCATIONS_REQUEST_FAILURE, payload)

/**
 * clear locations request errors
 */
export const clearError = () => action(LocationActionTypes.CLEAR_ERROR)
