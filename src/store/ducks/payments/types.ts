import { HttpResponseError } from '~/types'
import { ActionType } from 'typesafe-actions'

import { actions } from '.'
/**
 * Actions Types
 */
export type PaymentAction = ActionType<typeof actions>
/**
 * Data Types
 */

export enum PaymentActionTypes {
  PAYMENT_METHODS_REQUEST = '@payments/PAYMENTS_METHOD_REQUEST',
  PAYMENT_METHODS_REQUEST_SUCCESS = '@payments/PAYMENTS_METHOD_REQUEST_SUCCESS',
  PAYMENT_METHODS_REQUEST_FAILURE = '@payments/PAYMENTS_METHOD_REQUEST_FAILURE',
  CLEAR_ERROR = '@payments/CLEAR_ERROR'
}
/**
 * State Types
 */

export interface PaymentMethod {
  id: number
  code: string
  name: string
}

export interface BillingUser {
  name: string
  vat_number: number
  address: string
  email: string
  phone_number: string
}

export interface PaymentState {
  readonly paymentMethods: Array<PaymentMethod>
  readonly loading: boolean
  readonly error: HttpResponseError
}
