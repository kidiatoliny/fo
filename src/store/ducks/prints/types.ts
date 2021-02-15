import { HttpResponseError } from '~/types'
import { ActionType } from 'typesafe-actions'

import { actions } from '.'
export enum PrintActionTypes {
  PRINT_TICKET_REQUEST = '@print/PRINT_TICKET_REQUEST',
  PRINT_TICKET_REQUEST_SUCCESS = '@print/PRINT_TICKET_REQUEST_SUCCESS',
  PRINT_TICKET_REQUEST_FAILURE = '@print/PRINT_REQUEST_FAILURE',

  PRINT_POS_REQUEST = '@print/PRINT_POS_REQUEST',
  PRINT_POS_REQUEST_SUCCESS = '@print/PRINT_POS_REQUEST_SUCCESS',
  PRINT_POS_REQUEST_FAILURE = '@print/PRINT_POS_REQUEST_FAILURE',
  PRINT_CLEAR = '@print/PRINT_CLEAR'
}
export type PrintAction = ActionType<typeof actions>

export interface PrintRequest {
  booking_id: number
  output: 'show' | 'download'
}

export interface PrintState {
  readonly loading: boolean
  readonly error: HttpResponseError
  readonly pos: Blob
  readonly ticket: Blob
}
