import * as User from '../actions'
import reducer, { INITIAL_STATE } from '../reducer'
import { UserState } from '../types'

const token = 'dfas1430alfka03534'
describe('User Reducer', () => {
  it('USER_PROFILE_REQUEST', async () => {
    const state = reducer(INITIAL_STATE, User.userProfileRequest())

    const expected: UserState = {
      error: false,
      profile: null,
      loading: true
    }
    expect(state).toStrictEqual(expected)
  })
})
