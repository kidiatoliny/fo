import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import { useLocations } from '~/hooks/useLocations'
import { useTravel } from '~/hooks/useTravel'
import { Location } from '~/store/ducks/locations/types'
import { format } from 'date-fns'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { date } from 'yup/lib/locale'

import { BookingContextData } from './types'

const BookingContext = createContext<BookingContextData>(
  {} as BookingContextData
)
export const BookingProvider: React.FC = ({ children }) => {
  const { locations } = useLocations()
  const { getTravel } = useTravel()
  const [step, setStep] = useState(0)
  const [isReturnedTravel, setReturnedTravel] = useState(false)
  const [departureDate, setDepartureDate] = useState<MaterialUiPickersDate>(
    new Date()
  )
  const [returnDate, setReturnDate] = useState<MaterialUiPickersDate>(null)
  const [departureId, setDepartureId] = useState('')
  const [departureScheduleId, setDepartureScheduleId] = useState('')

  const [destinationId, setDestinationId] = useState('')
  const [destination, setDestination] = useState<Location[]>([])

  const [passengerCount, setPassengerCount] = useState(0)
  const [vehicleCount, setVehicleCount] = useState(0)

  const handlePassengerCount = (
    event: React.ChangeEvent<{ value: string }>
  ) => {
    const count = event.target.value

    setPassengerCount(parseInt(count))
  }
  const handleVehicleCount = (event: React.ChangeEvent<{ value: string }>) => {
    const count = event.target.value

    setVehicleCount(parseInt(count))
  }

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
    setDepartureDate(new Date())
  }

  const handleDepartureScheduleId = (
    event: React.ChangeEvent<{ value: string }>
  ) => {
    isReturnedTravel && setReturnDate(new Date())
    const id = event.target.value
    setDepartureScheduleId(id)
  }

  const nextStep = () => setStep(prev => prev + 1)
  const backStep = () => setStep(prev => prev - 1)
  const isLastStep = (lastStep: number) => step === lastStep
  const searchTravel = () =>
    getTravel({
      departure: parseInt(departureId),
      destination: parseInt(destinationId),
      departureDate:
        departureDate && format(departureDate, 'yyy-MM-dd').toString(),
      returnDate: returnDate && format(returnDate, 'yyy-MM-dd').toString()
    })
  useEffect(() => {
    searchTravel()
    console.log('ADSDA')
  }, [departureDate, returnDate])
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
        handleDestinationId,
        handleDepartureScheduleId,
        departureScheduleId,
        isReturnedTravel,
        setReturnedTravel,
        returnDate,
        setReturnDate,
        handlePassengerCount,
        handleVehicleCount,
        passengerCount,
        vehicleCount
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
