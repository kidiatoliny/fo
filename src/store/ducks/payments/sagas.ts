import { all, call, put, select, takeLatest } from 'redux-saga/effects'
import { ActionType } from 'typesafe-actions'

import { actions } from '.'
import { ApplicationState } from '../..'
import api from '../../../services/api'
import { PaymentActionTypes } from './types'

export function* getPaymentMethods() {
  try {
    const accessToken = yield select(
      (state: ApplicationState) => state.auth.token
    )

    if (!accessToken) {
      return
    }
    const response = yield call(api.get, '/payment/method')

    yield put(actions.paymentMethodRequestSuccess(response.data.data))
  } catch (err) {
    yield put(
      actions.paymentMethodRequestFailure({
        code: err.response?.status,
        message: err.message,
        isAxiosError: err.isAxiosError
      })
    )
  }
}

export function* paymentRequest({
  payload
}: ActionType<typeof actions.paymentRequest>) {
  const url = '/payment/save'

  try {
    const accessToken = yield select(
      (state: ApplicationState) => state.auth.token
    )

    if (!accessToken) {
      return
    }
    const response = yield call(api.post, url, payload)

    yield put(actions.paymentRequestSuccess(response.data.data))

    yield put(actions.clearError())
  } catch (err) {
    yield put(
      actions.paymentRequestFailure({
        code: err.response?.status,
        message: err.message,
        isAxiosError: err.isAxiosError
      })
    )
  }
}

export default all([
  takeLatest(PaymentActionTypes.PAYMENT_METHODS_REQUEST, getPaymentMethods),
  takeLatest(PaymentActionTypes.PAYMENT_REQUEST, paymentRequest)
])
