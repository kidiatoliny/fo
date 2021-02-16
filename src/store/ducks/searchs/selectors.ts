import { SearchState } from './types'
export const error = (state: SearchState) => state.error
export const isLoading = (state: SearchState) => state.loading
export const getSearchData = (state: SearchState) => state.search
