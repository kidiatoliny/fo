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

export default all([
  takeLatest(BookingActionTypes.BOOKING_SAVE_REQUEST, saveBooking)
])
