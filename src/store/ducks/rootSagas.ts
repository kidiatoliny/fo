/* eslint-disable generator-star-spacing */
import auth from '~/store/ducks/auth/sagas'
import booking from '~/store/ducks/bookings/sagas'
import location from '~/store/ducks/locations/sagas'
import passenger from '~/store/ducks/passengers/sagas'
import payment from '~/store/ducks/payments/sagas'
import travel from '~/store/ducks/travels/sagas'
import user from '~/store/ducks/user/sagas'
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
  return yield all([auth, user, location, travel, passenger, booking, payment])
}
