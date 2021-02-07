import { PassengerState } from './types'

export const getDocumentType = (state: PassengerState) => state.documentType
export const error = (state: PassengerState) => state.error
export const isLoading = (state: PassengerState) => state.loading
