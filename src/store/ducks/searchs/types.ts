import { HttpResponseError } from '~/types'
import { ActionType } from 'typesafe-actions'

import { actions } from '.'
/**
 * Actions Types
 */
export type PaymentAction = ActionType<typeof actions>
/**
 * Data Types
 */

export enum SearchActionTypes {
  SEARCH_REQUEST = '@search/SEARCH_REQUEST',
  SEARCH_SUCCESS = '@search/SEARCH_SUCCESS',
  SEARCH_FAILURE = '@search/SEARCH_FAILURE',

  CLEAR_ERROR = '@search/CLEAR_ERROR'
}

export interface Header {
  id: string
  name: string
  document_type: string
  document_data: string
}

export interface Row {
  id: number
  name: string
  document_type: string
  document_data: string
}
export interface SearchType {
  searchTerm: string
  searchType: string
}
export interface SearchData {
  headers: Header
  rows: Row[]
}
export interface SearchState {
  readonly search: SearchData
  readonly loading: boolean
  readonly error: HttpResponseError
}
