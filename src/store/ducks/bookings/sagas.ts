import { all, call, put, select, takeLatest } from 'redux-saga/effects'
import { ActionType } from 'typesafe-actions'

import { actions } from '.'
import { ApplicationState } from '../..'
import api from '../../../services/api'
import { BookingActionTypes } from './types'

export function* saveBooking({
  payload
}: ActionType<typeof actions.bookingSaveRequest>) {
  const url = '/booking/save'
  try {
    const accessToken = yield select(
      (state: ApplicationState) => state.auth.token
    )

    if (!accessToken) {
      return
    }
    const response = yield call(api.post, url, payload)

    yield put(actions.clearError())

    yield put(actions.bookingSaveRequestSuccess(response.data.data.booking))
  } catch (err) {
    yield put(
      actions.bookingSaveRequestFailure({
        code: err.response?.status,
        message: err.message,
        isAxiosError: err.isAxiosError
      })
    )
  }
}

export function* printRequest({
  payload
}: ActionType<typeof actions.bookingPrintRequest>) {
  let url = `/booking/ticket/print/${payload.booking_id}/${payload.output}`

  url =
    payload.opt === 'pos'
      ? `/booking/ticket/pos/print/${payload.booking_id}/${payload.output}`
      : url

  try {
    const accessToken = yield select(
      (state: ApplicationState) => state.auth.token
    )

    if (!accessToken) {
      return
    }
    const response = yield call(api.get, url, {
      responseType: 'blob'
    })
    yield put(actions.clearError())
    yield put(actions.bookingPrintRequestSuccess(response.data))
  } catch (err) {
    yield put(
      actions.bookingPrintRequestFailure({
        code: err.response?.status,
        message: err.message,
        isAxiosError: err.isAxiosError
      })
    )
  }
}

export default all([
  takeLatest(BookingActionTypes.BOOKING_SAVE_REQUEST, saveBooking),
  takeLatest(BookingActionTypes.BOOKING_PRINT_REQUEST, printRequest)
])
