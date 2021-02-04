import { Store, createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import { AuthState } from './ducks/auth/types'
import rootReducer from './ducks/rootReducers'
import rootSaga from './ducks/rootSagas'
export interface ApplicationState {
  auth: AuthState
}
const sagaMiddleware = createSagaMiddleware()

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger)
)
sagaMiddleware.run(rootSaga)

export { store }
