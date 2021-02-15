import { Store, createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import { AuthState } from './ducks/auth/types'
import { BookingState } from './ducks/bookings/types'
import { LocationState } from './ducks/locations/types'
import { PassengerState } from './ducks/passengers/types'
import { PaymentState } from './ducks/payments/types'
import { PrintState } from './ducks/prints/types'
import rootReducer from './ducks/rootReducers'
import rootSaga from './ducks/rootSagas'
import { TravelState } from './ducks/travels/types'
import { UserState } from './ducks/user/types'
export interface ApplicationState {
  auth: AuthState
  user: UserState
  location: LocationState
  travel: TravelState
  passenger: PassengerState
  booking: BookingState
  payment: PaymentState
  print: PrintState
}
const sagaMiddleware = createSagaMiddleware()

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger)
)
sagaMiddleware.run(rootSaga)

export { store }
