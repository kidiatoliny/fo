import { HttpResponseError } from '~/types'
import { all, call, put, select, takeLatest } from 'redux-saga/effects'

import { actions } from '.'
import { ApplicationState } from '../..'
import api from '../../../services/api'
import { LocationActionTypes } from './types'

export function* getLocations() {
  try {
    const accessToken = yield select(
      (state: ApplicationState) => state.auth.token
    )

    if (!accessToken) {
      return
    }
    const response = yield call(api.get, '/booking/locations/all')

    yield put(actions.locationRequestSuccess(response.data.data.locations))
  } catch (err) {
    yield put(
      actions.locationRequestFailure({
        code: err.status,
        msg: err.data.message
      } as HttpResponseError)
    )
  }
}

export default all([
  takeLatest(LocationActionTypes.LOCATIONS_REQUEST, getLocations)
])
