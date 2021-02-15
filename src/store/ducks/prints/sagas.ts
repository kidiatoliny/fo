import api from '~/services/api'
import { ApplicationState } from '~/store'
import { all, call, put, select, takeLatest } from 'redux-saga/effects'
import { ActionType } from 'typesafe-actions'

import { actions } from '.'
import { PrintActionTypes } from './types'
export function* ticketPrintRequest({
  payload
}: ActionType<typeof actions.printTicketRequest>) {
  const url = `/booking/ticket/print/${payload.booking_id}/${payload.output}`

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
    yield put(actions.clear())
    yield put(actions.printTicketRequestSuccess(response.data))
  } catch (err) {
    yield put(
      actions.printTicketRequestFailure({
        code: err.response?.status,
        message: err.message,
        isAxiosError: err.isAxiosError
      })
    )
  }
}

export function* printPosRequest({
  payload
}: ActionType<typeof actions.printPosRequest>) {
  const url = `/booking/ticket/pos/print/${payload.booking_id}/${payload.output}`

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
    yield put(actions.clear())
    yield put(actions.printPosRequestSuccess(response.data))
  } catch (err) {
    yield put(
      actions.printPosRequestFailure({
        code: err.response?.status,
        message: err.message,
        isAxiosError: err.isAxiosError
      })
    )
  }
}

export default all([
  takeLatest(PrintActionTypes.PRINT_TICKET_REQUEST, ticketPrintRequest),
  takeLatest(PrintActionTypes.PRINT_POS_REQUEST, printPosRequest)
])
