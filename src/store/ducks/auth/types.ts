/**
 * Actions Types
 */

import { HttpResponseError } from '~/types'
import { ActionType } from 'typesafe-actions'

import { actions } from '.'

export enum LoginActionTypes {
  LOGIN_REQUEST = '@auth/LOGIN_REQUEST',
  LOGIN_SUCCESS = '@auth/LOGIN_SUCCESS',
  LOGIN_FAILURE = '@auth/LOGIN_FAILURE',
  CLEAR_ERROR = '@auth/CLEAR_ERROR',
  GET_ROLE = '@auth/GET_ROLE',
  GET_TOKEN_EXPIRATION_DATE = '@auth/GET_TOKEN_EXPIRATION_DATE',
  LOGOUT = '@auth/LOGOUT'
}

/**
 * Data Types
 */

export interface Login {
  username: string
  password: string
}
export interface Token {
  token: string | null
}
export interface UserRole {
  code: string
  name: string
}
export type AuthAction = ActionType<typeof actions>

export interface AuthState {
  readonly token: string | null
  readonly isLogdin: boolean
  readonly loading: boolean
  readonly error: HttpResponseError | null
  readonly role: UserRole
  readonly tokenExpirationDate: Date
}
