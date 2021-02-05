import auth from '~/store/ducks/auth/reducer'
import location from '~/store/ducks/locations/reducer'
import user from '~/store/ducks/user/reducer'
import { combineReducers } from 'redux'

export default combineReducers({ auth, user, location })
