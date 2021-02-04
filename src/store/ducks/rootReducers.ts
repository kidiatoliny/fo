import auth from '~/store/ducks/auth/reducer'
import user from '~/store/ducks/user/reducer'
import { combineReducers } from 'redux'

export default combineReducers({ auth, user })
