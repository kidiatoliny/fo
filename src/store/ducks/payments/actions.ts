import { HttpResponseError } from '~/types'
import { action } from 'typesafe-actions'

import { PaymentActionTypes, PaymentMethod } from './types'

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
