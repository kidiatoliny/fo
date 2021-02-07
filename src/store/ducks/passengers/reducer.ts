import { Reducer } from 'redux'

import { PassengerActionTypes, PassengerState } from './types'

export const INITIAL_STATE: PassengerState = {
  documentType: [],
  loading: false,
  error: false
}

const reducer: Reducer<PassengerState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PassengerActionTypes.DOCUMENT_TYPE_REQUEST:
      return { ...state, loading: true }

    case PassengerActionTypes.DOCUMENT_TYPE_REQUEST_SUCCESS:
      return { ...state, loading: false, documentType: action.payload }

    case PassengerActionTypes.DOCUMENT_TYPE_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        documentType: [],
        error: action.payload
      }

    case PassengerActionTypes.CLEAR_ERROR:
      return { ...state, error: false }
    default:
      return state
  }
}

export default reducer
