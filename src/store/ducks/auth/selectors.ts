import { AuthState } from './types'

export const getToken = (state: AuthState) => state.token
export const isLoading = (state: AuthState) => state.loading
export const getError = (state: AuthState) => state.error
export const getRole = (state: AuthState) => state.role
export const isLogdin = (state: AuthState) => state.isLogdin
export const isTokenExpired = (state: AuthState) => {
  const date =
    state.tokenExpirationDate && state.tokenExpirationDate < new Date()
  return date
}
