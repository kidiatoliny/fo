import { actions as User } from '../.'
import reducer, { INITIAL_STATE } from '../reducer'
import { getProfile, isLoading, isError } from '../selectors'
import { User as UserType } from './../types'

describe('User SELECTORS', () => {
  it('should return getProfile, isLoading, error false on INITIAL_STATE', () => {
    const expected = false
    const state = reducer(INITIAL_STATE, { type: INITIAL_STATE })

    expect(isLoading(state)).toEqual(expected)
    expect(isError(state)).toEqual(expected)

    const expectedToken = null
    expect(getProfile(state)).toEqual(expectedToken)
  })
  it('should return  isLoading on USER_PROFILE_REQUEST', () => {
    const expected = true
    const state = reducer(INITIAL_STATE, User.userProfileRequest())

    expect(isLoading(state)).toEqual(expected)
  })

  it('should return  Profile on USER_PROFILE_REQUEST_SUCCESS', () => {
    const expected: UserType = {
      id: 1,
      name: 'kid',
      email: 'kid@armas.cv',
      avatar: 'http://armas-api.test/storage/users/default.png',
      role: 'admin'
    }

    const state = reducer(
      INITIAL_STATE,
      User.userProfileRequestSuccess(expected)
    )

    expect(getProfile(state)).toEqual(expected)
  })

  it('should return  Error on USER_PROFILE_REQUEST_ERROR', () => {
    const expected = true
    const state = reducer(INITIAL_STATE, User.userProfileRequestFailure())

    expect(isError(state)).toEqual(expected)
  })
})
