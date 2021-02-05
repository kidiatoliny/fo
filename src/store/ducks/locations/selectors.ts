import { LocationState } from './types'

export const getLocation = (state: LocationState) => state.locations
export const isError = (state: LocationState) => state.error
export const isLoading = (state: LocationState) => state.loading
