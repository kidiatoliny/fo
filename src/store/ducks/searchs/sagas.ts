import { all, call, put, select, takeLatest } from 'redux-saga/effects'
import { ActionType } from 'typesafe-actions'

import { actions } from '.'
import { ApplicationState } from '../..'
import api from '../../../services/api'
import { SearchActionTypes } from './types'

export function* searchRequest({
  payload
}: ActionType<typeof actions.searchRequest>) {
  console.log('PAY', payload)
  const url = `/search?search-type=${payload.searchType}&search-term=${payload.searchTerm}`

  yield put(actions.clear())
  try {
    const accessToken = yield select(
      (state: ApplicationState) => state.auth.token
    )

    if (!accessToken) {
      return
    }
    const response = yield call(api.get, url)

    yield put(actions.searchSuccess(response.data.data))
  } catch (err) {
    yield put(
      actions.searchError({
        code: err.response?.status,
        message: err.message,
        isAxiosError: err.isAxiosError
      })
    )
  }
}

export default all([
  takeLatest(SearchActionTypes.SEARCH_REQUEST, searchRequest)
])
