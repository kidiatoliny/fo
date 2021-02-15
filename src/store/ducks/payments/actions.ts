import { HttpResponseError } from '~/types'
import { action } from 'typesafe-actions'

import {
  Payment,
  PaymentActionTypes,
  PaymentData,
  PaymentMethod
} from './types'

/**
 * request payment
 */
export const paymentMethodRequest = () =>
  action(PaymentActionTypes.PAYMENT_METHODS_REQUEST)

/**
 *
 * @param payload  payment object
 */
export const paymentMethodRequestSuccess = (payload: Array<PaymentMethod>) =>
  action(PaymentActionTypes.PAYMENT_METHODS_REQUEST_SUCCESS, payload)

/**
 * request payment  failure
 */
export const paymentMethodRequestFailure = (payload: HttpResponseError) =>
  action(PaymentActionTypes.PAYMENT_METHODS_REQUEST_FAILURE, payload)

/**
 * clear payments request errors
 */
export const clearError = () => action(PaymentActionTypes.CLEAR_ERROR)

export const paymentRequest = (payload: Payment) =>
  action(PaymentActionTypes.PAYMENT_REQUEST, payload)

export const paymentRequestSuccess = (payload: PaymentData) =>
  action(PaymentActionTypes.PAYMENT_REQUEST_SUCCESS, payload)

export const paymentRequestFailure = (payload: HttpResponseError) =>
  action(PaymentActionTypes.PAYMENT_REQUEST_FAILURE, payload)
