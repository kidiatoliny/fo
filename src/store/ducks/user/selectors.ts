import { UserState } from './types'

export const getProfile = (state: UserState) => state.profile
export const getError = (state: UserState) => state.error
export const isLoading = (state: UserState) => state.loading
