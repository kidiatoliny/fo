import { HttpResponseError } from '~/types'

import * as Auth from '../actions'
import reducer, { INITIAL_STATE } from '../reducer'
import { Login, AuthState, Role } from '../types'

const login: Login = {
  username: 'kid@kid.com',
  password: '1234'
}
const error: HttpResponseError = {
  code: 404,
  msg: 'not found'
}
const token = 'dfas1430alfka03534'
describe('Auth Reducer', () => {
  it('LOGIN_REQUEST', async () => {
    const state = reducer(INITIAL_STATE, Auth.loginRequest(login))

    const expected: AuthState = {
      token: null,
      error: null,
      loading: true,
      isLogdin: false,
      role: {} as Role
    }
    expect(state).toStrictEqual(expected)
  })
  it('LOGIN_SUCCESS', async () => {
    const state = reducer(INITIAL_STATE, Auth.loginSuccess(token))

    const expected: AuthState = {
      token: token,
      error: null,
      loading: false,
      isLogdin: false,
      role: {} as Role
    }
    expect(state).toStrictEqual(expected)
  })
  it('LOGIN_ERROR', async () => {
    const state = reducer(INITIAL_STATE, Auth.loginFailure(error))
    const expected: AuthState = {
      token: null,
      error,
      loading: false,
      isLogdin: false,
      role: {} as Role
    }
    expect(state).toStrictEqual(expected)
  })
})
