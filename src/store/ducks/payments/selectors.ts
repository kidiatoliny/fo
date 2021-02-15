import { PaymentState } from './types'

export const getPaymentMethods = (state: PaymentState) => state.paymentMethods
export const error = (state: PaymentState) => state.error
export const isLoading = (state: PaymentState) => state.loading
export const getPaymentData = (state: PaymentState) => state.paymentData
