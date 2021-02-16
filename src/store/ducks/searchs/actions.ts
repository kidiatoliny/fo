import { HttpResponseError } from '~/types'
import { action } from 'typesafe-actions'

import { SearchActionTypes, SearchData, SearchType } from './types'

export const searchRequest = (payload: SearchType) =>
  action(SearchActionTypes.SEARCH_REQUEST, payload)

export const searchSuccess = (payload: SearchData) =>
  action(SearchActionTypes.SEARCH_SUCCESS, payload)

export const searchError = (payload: HttpResponseError) =>
  action(SearchActionTypes.SEARCH_FAILURE, payload)

export const clear = () => action(SearchActionTypes.CLEAR_ERROR)
