import { HttpResponseError } from '~/types'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { ActionType } from 'typesafe-actions'

import { actions } from '.'
import api from '../../../services/api'
import { userProfileRequest } from '../user/actions'
import { LoginActionTypes } from './types'

export function* loginRequest({
  payload
}: ActionType<typeof actions.loginRequest>) {
  let token
  try {
    const { username, password } = payload
    /** request login */
    const response = yield call(api.post, '/auth/login', { username, password })
    token = response.data.data.token
    yield put(actions.loginSuccess(token))
    yield put(actions.getRole(token))
    yield put(actions.getTokenExpirationDate(token))
    yield put(userProfileRequest())
  } catch (err) {
    console.log(err)
    yield put(
      actions.loginFailure({
        code: err.response.status,
        msg: err.response.data.message
      } as HttpResponseError)
    )
  }
}

export default all([takeLatest(LoginActionTypes.LOGIN_REQUEST, loginRequest)])
