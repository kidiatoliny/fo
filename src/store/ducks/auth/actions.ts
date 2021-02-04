import { HttpResponseError } from '~/types'
import jwt from 'jsonwebtoken'
import { action } from 'typesafe-actions'

import { Login, LoginActionTypes } from './types'

/**
 *
 * @param login password & username
 */
export const loginRequest = (login: Login) =>
  action(LoginActionTypes.LOGIN_REQUEST, login)

/**
 *
 * @param token auth user token
 */
export const loginSuccess = (token: string) =>
  action(LoginActionTypes.LOGIN_SUCCESS, token)

/**
 * Login failure
 */
export const loginFailure = (payload: HttpResponseError) =>
  action(LoginActionTypes.LOGIN_FAILURE, payload)

/**
 * Logout request
 */
export const logout = () => action(LoginActionTypes.LOGOUT)

/**
 * Clear auth errors
 */
export const clearState = () => action(LoginActionTypes.CLEAR_ERROR)

export const getRole = (payload: string) => {
  const encoded: any = jwt.decode(payload)
  return action(LoginActionTypes.GET_ROLE, encoded.user.role)
}

export const getTokenExpirationDate = (payload: string) => {
  const encoded: any = jwt.decode(payload)
  const date = new Date(0)
  date.setUTCSeconds(encoded.exp)

  return action(LoginActionTypes.GET_TOKEN_EXPIRATION_DATE, date)
}
