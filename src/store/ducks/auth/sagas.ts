import { ApplicationState } from '~/store'
import { HttpResponseError } from '~/types'
import { all, call, put, select, takeLatest } from 'redux-saga/effects'
import { ActionType } from 'typesafe-actions'

import { actions } from '.'
import api from '../../../services/api'
import { userProfileRequest } from '../user/actions'
import { LoginActionTypes, UserRole } from './types'

export function* loginRequest({
  payload
}: ActionType<typeof actions.loginRequest>) {
  let token
  try {
    const { username, password } = payload
    /** request login */
    const response = yield call(api.post, '/auth/login', { username, password })
    token = response.data.data.token

    yield put(actions.getRole(token))
    const role: UserRole = yield select(
      (state: ApplicationState) => state.auth.role
    )

    if (role.code === 'ROLE_ADMIN' || role.code === 'ROLE_AGENT') {
      yield put(actions.loginSuccess(token))
      yield put(actions.getTokenExpirationDate(token))
      yield put(userProfileRequest())
    } else {
      yield put(
        actions.loginFailure({
          code: 401,
          message: 'Invalid Credencials',
          isAxiosError: true
        } as HttpResponseError)
      )
    }
  } catch (err) {
    console.log(err)
    yield put(
      actions.loginFailure({
        code: err.response?.status,
        message: err.message,
        isAxiosError: err.isAxiosError
      } as HttpResponseError)
    )
  }
}

export default all([takeLatest(LoginActionTypes.LOGIN_REQUEST, loginRequest)])
