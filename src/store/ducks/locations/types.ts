import { HttpResponseError } from '~/types'
import { ActionType } from 'typesafe-actions'

import { actions } from '.'
/**
 * Actions Types
 */
export type LocationAction = ActionType<typeof actions>
/**
 * Data Types
 */
export interface Location {
  id: number
  name_1: string
  name_2: string
}

export enum LocationActionTypes {
  LOCATIONS_REQUEST = '@location/LOCATIONS_REQUEST',
  LOCATIONS_REQUEST_SUCCESS = '@location/LOCATIONS_REQUEST_SUCCESS',
  LOCATIONS_REQUEST_FAILURE = '@location/LOCATIONS_REQUEST_FAILURE',
  CLEAR_ERROR = '@location/CLEAR_ERROR'
}
/**
 * State Types
 */

export interface LocationState {
  readonly locations: Array<Location>
  readonly loading: boolean
  readonly error: HttpResponseError | null
}
