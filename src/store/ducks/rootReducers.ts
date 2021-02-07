import auth from '~/store/ducks/auth/reducer'
import location from '~/store/ducks/locations/reducer'
import passenger from '~/store/ducks/passengers/reducer'
import travel from '~/store/ducks/travels/reducer'
import user from '~/store/ducks/user/reducer'
import { combineReducers } from 'redux'

export default combineReducers({ auth, user, location, travel, passenger })
