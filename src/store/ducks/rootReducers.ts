import auth from '~/store/ducks/auth/reducer'
import booking from '~/store/ducks/bookings/reducer'
import location from '~/store/ducks/locations/reducer'
import passenger from '~/store/ducks/passengers/reducer'
import payment from '~/store/ducks/payments/reducer'
import print from '~/store/ducks/prints/reducer'
import search from '~/store/ducks/searchs/reducer'
import travel from '~/store/ducks/travels/reducer'
import user from '~/store/ducks/user/reducer'
import { combineReducers } from 'redux'

export default combineReducers({
  auth,
  user,
  location,
  travel,
  passenger,
  booking,
  payment,
  print,
  search
})
