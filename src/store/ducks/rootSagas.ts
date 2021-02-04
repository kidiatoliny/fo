/* eslint-disable generator-star-spacing */
import auth from '~/store/ducks/auth/sagas'
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
  return yield all([auth])
}
