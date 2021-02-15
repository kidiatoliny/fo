import { HttpResponseError } from '~/types'
import { Reducer } from 'redux'

import { PrintActionTypes, PrintState } from '../prints/types'
export const INITIAL_STATE: PrintState = {
  error: {} as HttpResponseError,
  loading: false,
  pos: {} as Blob,
  ticket: {} as Blob
}
const reducer: Reducer<PrintState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PrintActionTypes.PRINT_TICKET_REQUEST:
    case PrintActionTypes.PRINT_POS_REQUEST:
      return { ...state, loading: true }

    case PrintActionTypes.PRINT_TICKET_REQUEST_SUCCESS:
      return { ...state, loading: false, ticket: action.payload }

    case PrintActionTypes.PRINT_POS_REQUEST_SUCCESS:
      return { ...state, loading: false, pos: action.payload }

    case PrintActionTypes.PRINT_TICKET_REQUEST_FAILURE:
    case PrintActionTypes.PRINT_POS_REQUEST_FAILURE:
      return { ...state, error: action.payload }

    case PrintActionTypes.PRINT_CLEAR:
      return { ...state, error: {} as HttpResponseError }
    default:
      return state
  }
}
export default reducer
