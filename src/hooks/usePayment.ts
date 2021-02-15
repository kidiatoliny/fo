import { actions, selectors } from '~/store/ducks/payments'
import { useDispatch, useSelector } from 'react-redux'

import { ApplicationState } from '../store'

export const usePayment = () => {
  const dispatch = useDispatch()

  const paymentMethods = useSelector((state: ApplicationState) =>
    selectors.getPaymentMethods(state.payment)
  )

  const isLoading = useSelector((state: ApplicationState) =>
    selectors.isLoading(state.payment)
  )

  const getPaymentMethods = () => dispatch(actions.paymentMethodRequest())

  const paymentData = useSelector((state: ApplicationState) =>
    selectors.getPaymentData(state.payment)
  )

  const clearPaymentData = () => dispatch(actions.clearError())

  return {
    paymentMethods,
    isLoading,
    getPaymentMethods,
    paymentData,
    clearPaymentData
  }
}
