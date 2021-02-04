import { HttpResponseError } from '~/types'

import * as Auth from '../actions'
import reducer, { INITIAL_STATE } from '../reducer'
import { getToken, isLoading, isError, getRole } from '../selectors'
import { Login } from '../types'

const payload: Login = {
  email: 'example@example.com',
  password: '1234678'
}
const token = '2131jafdsdif2430ufj;sfdks'
const error: HttpResponseError = {
  code: 404,
  msg: 'not found'
}
describe('Auth SELECTORS', () => {
  it('should return getToken, isLoading, error null on INITIAL_STATE', () => {
    const expected = false
    const state = reducer(INITIAL_STATE, { type: INITIAL_STATE })

    expect(isLoading(state)).toEqual(expected)
    expect(isError(state)).toEqual(null)

    const expectedToken = null
    expect(getToken(state)).toEqual(expectedToken)
  })
  it('should return  isLoading on LOGIN_REQUEST', () => {
    const expected = true
    const state = reducer(INITIAL_STATE, Auth.loginRequest(payload))

    expect(isLoading(state)).toEqual(expected)
  })
  it('should return   on LOGIN_FAILURE', () => {
    const expected = error
    const state = reducer(INITIAL_STATE, Auth.loginFailure(error))

    expect(isError(state)).toEqual(expected)
  })

  it('should return  token LOGIN_SUCCESS', () => {
    const expected = token
    const state = reducer(INITIAL_STATE, Auth.loginSuccess(token))

    expect(getToken(state)).toEqual(expected)
  })
})
