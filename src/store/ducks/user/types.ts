/**
 * Actions Types
 */

import { HttpResponseError } from '~/types'
import { ActionType } from 'typesafe-actions'

import { actions } from '.'

export enum UserActionTypes {
  USER_PROFILE_REQUEST = '@user/USER_PROFILE_REQUEST',
  USER_PROFILE_REQUEST_SUCCESS = '@user/USER_PROFILE_REQUEST_SUCCESS',
  USER_PROFILE_REQUEST_FAILURE = '@user/USER_PROFILE_REQUEST_FAILURE',
  CLEAR_ERROR = '@user/CLEAR_ERROR'
}

/**
 * Data Types
 */

interface Permission {
  id: number
  name: string
}
interface Role {
  id: number
  name: string
}
export interface User {
  id: number
  name: string
  email: string
  avatar: string
  username: string
  mobile: number
  nif: number
  role: Role
  created_at: string
  email_verified_at: string
  permissions: Permission[]
}

/**
 * State Types
 */

export type UserAction = ActionType<typeof actions>

export interface UserState {
  readonly profile: User
  readonly loading: boolean
  readonly error: HttpResponseError | null
}
