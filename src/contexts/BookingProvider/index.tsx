import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import { useLocations } from '~/hooks/useLocations'
import { Location } from '~/store/ducks/locations/types'
import React, { createContext, useContext, useState } from 'react'

import { BookingContextData } from './types'

const BookingContext = createContext<BookingContextData>(
  {} as BookingContextData
)
export const BookingProvider: React.FC = ({ children }) => {
  const { locations } = useLocations()
  const [step, setStep] = useState(0)

  const [departureId, setDepartureId] = useState('')
  const [destinationId, setDestinationId] = useState('')
  const [destination, setDestination] = useState<Location[]>([])

  const handleDepartureId = (event: React.ChangeEvent<{ value: string }>) => {
    const id = event.target.value
    setDestinationId('')
    const destination = locations.filter(
      location => location.id !== parseInt(id)
    )
    setDestination(destination)
    setDepartureId(id)
  }
  const handleDestinationId = (event: React.ChangeEvent<{ value: string }>) => {
    const id = event.target.value
    setDestinationId(id)
  }
  const [departureDate, setDepartureDate] = useState<MaterialUiPickersDate>()

  const nextStep = () => setStep(prev => prev + 1)
  const backStep = () => setStep(prev => prev - 1)
  const isLastStep = (lastStep: number) => step === lastStep
  return (
    <BookingContext.Provider
      value={{
        step,
        isLastStep,
        nextStep,
        backStep,
        setDepartureDate,
        departureDate,
        departureId,
        handleDepartureId,
        locations,
        destination,
        destinationId,
        handleDestinationId
      }}
    >
      {children}
    </BookingContext.Provider>
  )
}

export function useBooking() {
  const context = useContext(BookingContext)
  return context
}
