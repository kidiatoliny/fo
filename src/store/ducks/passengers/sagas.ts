import { all, call, put, select, takeLatest } from 'redux-saga/effects'

import { actions } from '.'
import { ApplicationState } from '../..'
import api from '../../../services/api'
import { PassengerActionTypes } from './types'

export function* getDocumentType() {
  const url = '/passenger/document-type'
  try {
    const accessToken = yield select(
      (state: ApplicationState) => state.auth.token
    )

    if (!accessToken) {
      return
    }
    const response = yield call(api.get, url)

    yield put(actions.documentTypeRequestSuccess(response.data.data))
  } catch (err) {
    yield put(
      actions.documentTypeRequestFailure({
        code: err.response?.status,
        message: err.message,
        isAxiosError: err.isAxiosError
      })
    )
  }
}

export default all([
  takeLatest(PassengerActionTypes.DOCUMENT_TYPE_REQUEST, getDocumentType)
])
