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

  PAYMENT_REQUEST = '@payments/PAYMENT_REQUEST',
  PAYMENT_REQUEST_SUCCESS = '@payments/PAYMENT_REQUEST_SUCCESS',
  PAYMENT_REQUEST_FAILURE = '@payments/PAYMENT_REQUEST_FAILURE',

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
export interface PaymentData {
  booking_id: number
  booking_status: string
  resume: {
    booking_owner: {
      name: string
      email: string
      mobile: string
      phone: string
      booking_total_amount: string
    }
    travel_route: [
      {
        route: string
        travelDate: string
        time: string
        departureLocation: string
        destinationLocation: string
      }
    ]
    passengers: [
      {
        id: number
        nome: string
        document_type: string
        document_data: string
      }
    ]
    vehicle: []
  }
}
export interface Payment {
  booking_id: number
  payment_method_id: number
  payment_amount: number
  invoice: BillingUser
}
export interface PaymentState {
  readonly paymentMethods: Array<PaymentMethod>
  readonly paymentData: PaymentData
  readonly loading: boolean
  readonly error: HttpResponseError
}
