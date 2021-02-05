import React, { createContext, useContext, useState } from 'react'

import { BookingContextData } from './types'
const BookingContext = createContext<BookingContextData>(
  {} as BookingContextData
)
export const BookingProvider: React.FC = ({ children }) => {
  const [step, setStep] = useState(0)

  const nextStep = () => setStep(prev => prev + 1)
  const backStep = () => setStep(prev => prev - 1)
  const isLastStep = (lastStep: number) => step === lastStep

  return (
    <BookingContext.Provider value={{ step, isLastStep, nextStep, backStep }}>
      {children}
    </BookingContext.Provider>
  )
}

export function useBooking() {
  const context = useContext(BookingContext)
  return context
}
