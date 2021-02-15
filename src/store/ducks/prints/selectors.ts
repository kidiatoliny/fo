import { PrintState } from './types'

export const getPos = (state: PrintState) => state.pos

export const getTicket = (state: PrintState) => state.ticket

export const isLoading = (state: PrintState) => state.loading

export const error = (state: PrintState) => state.error
