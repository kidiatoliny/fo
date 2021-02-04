import { HttpResponseError } from '~/types'
import { action } from 'typesafe-actions'

import { User, UserActionTypes } from './types'

/**
 * request user profile
 */
export const userProfileRequest = () =>
  action(UserActionTypes.USER_PROFILE_REQUEST)

/**
 *
 * @param payload  user object
 */
export const userProfileRequestSuccess = (payload: User) =>
  action(UserActionTypes.USER_PROFILE_REQUEST_SUCCESS, payload)

/**
 * request user profile failure
 */
export const userProfileRequestFailure = (payload: HttpResponseError) =>
  action(UserActionTypes.USER_PROFILE_REQUEST_FAILURE, payload)

/**
 * clear profile request errors
 */
export const clearError = () => action(UserActionTypes.CLEAR_ERROR)
