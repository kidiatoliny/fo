import { Store, createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import { AuthState } from './ducks/auth/types'
import { LocationState } from './ducks/locations/types'
import rootReducer from './ducks/rootReducers'
import rootSaga from './ducks/rootSagas'
import { TravelState } from './ducks/travels/types'
import { UserState } from './ducks/user/types'
export interface ApplicationState {
  auth: AuthState
  user: UserState
  location: LocationState
  travel: TravelState
}
const sagaMiddleware = createSagaMiddleware()

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger)
)
sagaMiddleware.run(rootSaga)

export { store }
