import { HttpResponseError } from '~/types'
import { Reducer } from 'redux'

import { SearchActionTypes, SearchData, SearchState } from './types'

export const INITIAL_STATE: SearchState = {
  search: {} as SearchData,
  loading: false,
  error: {} as HttpResponseError
}

const reducer: Reducer<SearchState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SearchActionTypes.SEARCH_REQUEST:
      return { ...state, loading: true }

    case SearchActionTypes.SEARCH_SUCCESS:
      return { ...state, loading: false, search: action.payload }

    case SearchActionTypes.SEARCH_FAILURE:
      return { ...state, loading: false, error: action.payload }

    case SearchActionTypes.CLEAR_ERROR:
      return {
        ...state,
        search: {} as SearchData,
        error: {} as HttpResponseError
      }

    default:
      return state
  }
}

export default reducer
