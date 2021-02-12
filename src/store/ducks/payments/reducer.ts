import { HttpResponseError } from '~/types'
import { Reducer } from 'redux'

import { PaymentActionTypes, PaymentState } from './types'

export const INITIAL_STATE: PaymentState = {
  paymentMethods: [],
  loading: false,
  error: {} as HttpResponseError
}

const reducer: Reducer<PaymentState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PaymentActionTypes.PAYMENT_METHODS_REQUEST:
      return { ...state, loading: true }

    case PaymentActionTypes.PAYMENT_METHODS_REQUEST_SUCCESS:
      return { ...state, loading: false, paymentMethods: action.payload }

    case PaymentActionTypes.PAYMENT_METHODS_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        paymentMethods: [],
        error: action.payload
      }

    case PaymentActionTypes.CLEAR_ERROR:
      return { ...state, error: {} as HttpResponseError }
    default:
      return state
  }
}

export default reducer
