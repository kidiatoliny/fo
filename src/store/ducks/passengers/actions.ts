import { HttpResponseError } from '~/types'
import { action } from 'typesafe-actions'

import { PassengerActionTypes } from './types'

export const documentTypeRequest = () =>
  action(PassengerActionTypes.DOCUMENT_TYPE_REQUEST)

export const documentTypeRequestSuccess = (payload: DocumentType[]) =>
  action(PassengerActionTypes.DOCUMENT_TYPE_REQUEST_SUCCESS, payload)

export const documentTypeRequestFailure = (payload: HttpResponseError) =>
  action(PassengerActionTypes.DOCUMENT_TYPE_REQUEST_FAILURE, payload)

export const clearError = () => action(PassengerActionTypes.CLEAR_ERROR)
