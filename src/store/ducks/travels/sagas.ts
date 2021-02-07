import { ApplicationState } from '~/store'
import { all, call, put, select, takeLatest } from 'redux-saga/effects'
import { ActionType } from 'typesafe-actions'

import { actions } from '.'
import api from '../../../services/api'
import { TravelActionTypes } from './types'

export function* getTravel({
  payload
}: ActionType<typeof actions.travelRequest>) {
  const { departure, departureDate, destination, returnDate } = payload

  let url = `/booking/search/travel/${departure}/${destination}/${departureDate}/${returnDate}`

  url =
    returnDate === ''
      ? `/booking/search/travel/${departure}/${destination}/${departureDate}`
      : url

  try {
    const accessToken = yield select(
      (state: ApplicationState) => state.auth.token
    )

    if (!accessToken) {
      return
    }
    const response = yield call(api.get, url)

    yield put(actions.clearError())
    if (!returnDate) {
      yield put(actions.departureTravelRequestSuccess(response.data.data[0]))
    } else {
      yield put(actions.returnTravelRequestSuccess(response.data.data[0]))
    }
  } catch (err) {
    console.log(err)
    yield put(
      actions.travelRequestFailure({
        code: err.response?.status,
        message: err.message,
        isAxiosError: err.isAxiosError
      })
    )
  }
}

export default all([takeLatest(TravelActionTypes.TRAVEL_REQUEST, getTravel)])
