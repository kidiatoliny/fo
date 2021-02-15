import { HttpResponseError } from '~/types'
import { action } from 'typesafe-actions'

import { PrintActionTypes, PrintRequest } from './types'

export const clear = () => action(PrintActionTypes.PRINT_CLEAR)

/**
 * PRINT TICKET ACTIONS
 */
export const printTicketRequest = (payload: PrintRequest) =>
  action(PrintActionTypes.PRINT_TICKET_REQUEST, payload)

export const printTicketRequestSuccess = (payload: Blob) =>
  action(PrintActionTypes.PRINT_TICKET_REQUEST_SUCCESS, payload)

export const printTicketRequestFailure = (payload: HttpResponseError) =>
  action(PrintActionTypes.PRINT_TICKET_REQUEST_FAILURE, payload)

/**
 * PRINT POS ACTIONS
 */
export const printPosRequest = (payload: PrintRequest) =>
  action(PrintActionTypes.PRINT_POS_REQUEST, payload)

export const printPosRequestSuccess = (payload: Blob) =>
  action(PrintActionTypes.PRINT_POS_REQUEST_SUCCESS, payload)

export const printPosRequestFailure = (payload: HttpResponseError) =>
  action(PrintActionTypes.PRINT_POS_REQUEST_FAILURE, payload)
