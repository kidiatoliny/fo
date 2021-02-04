import { all, call, fork, put, select, takeLatest } from 'redux-saga/effects'

import { ApplicationState } from '../..'
import api from '../../../services/api'
import { getRole } from '../auth/actions'
import { actions } from '../user'
import { UserActionTypes } from './types'

export function* loadProfile() {
  try {
    const accessToken = yield select(
      (state: ApplicationState) => state.auth.token
    )

    if (!accessToken) {
      return
    }

    /** request auth user */
    const response = yield call(api.get, '/auth/me', {
      headers: { Authorization: 'Bearer ' + accessToken }
    })

    yield put(actions.userProfileRequestSuccess(response.data.data))
    yield put(getRole(accessToken))
    // call user profile request success success
  } catch (err) {
    yield put(
      actions.userProfileRequestFailure({
        code: err.status,
        msg: err.data.message
      })
    )
  }
}

export default all([
  fork(loadProfile),
  takeLatest(UserActionTypes.USER_PROFILE_REQUEST, loadProfile),
  fork(loadProfile)
])
