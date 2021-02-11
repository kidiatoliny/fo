import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import { useLocations } from '~/hooks/useLocations'
import { useTravel } from '~/hooks/useTravel'
import {
  BookingMainContact,
  BookingPassenger,
  BookingRoute,
  BookingVehicle
} from '~/store/ducks/bookings/types'
import { Location } from '~/store/ducks/locations/types'
import { format } from 'date-fns'
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'

import { BookingContextData } from './types'

const BookingContext = createContext<BookingContextData>(
  {} as BookingContextData
)
export const BookingProvider: React.FC = ({ children }) => {
  const { passengerFareTax, vehicleFareTax } = useTravel()
  const { locations } = useLocations()
  const { getTravel, departureTravel, returnTravel } = useTravel()
  const [step, setStep] = useState(0)
  const [isReturnedTravel, setReturnedTravel] = useState(false)
  const [departureDate, setDepartureDate] = useState<MaterialUiPickersDate>(
    new Date()
  )
  const [returnDate, setReturnDate] = useState<MaterialUiPickersDate>(null)

  const [departureId, setDepartureId] = useState('')
  const [departureScheduleId, setDepartureScheduleId] = useState('')

  const [returnScheduleId, setReturnScheduleId] = useState('')

  const [destinationId, setDestinationId] = useState('')
  const [destination, setDestination] = useState<Location[]>([])

  const [passengerCount, setPassengerCount] = useState(0)
  const [vehicleCount, setVehicleCount] = useState(0)

  const [passengers, setPassengers] = useState<BookingPassenger[]>([])
  const [vehicles, setVehicles] = useState<BookingVehicle[]>([])
  const [mainContact, setMainContact] = useState({} as BookingMainContact)
  const [passenger, setPassenger] = useState({} as BookingPassenger)
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

  const handleReturnScheduleId = (
    event: React.ChangeEvent<{ value: string }>
  ) => {
    const id = event.target.value
    setReturnScheduleId(id)
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
  }, [departureDate, returnDate])

  const routes = () => {
    let routes

    if (isReturnedTravel) {
      routes = [
        {
          route_id: departureTravel && departureTravel.route_id,
          schedule_id: parseInt(departureScheduleId),
          schedule_date:
            departureDate && format(departureDate, 'yyy-MM-dd').toString()
        } as BookingRoute,
        {
          route_id: returnTravel && returnTravel.route_id,
          schedule_id: parseInt(returnScheduleId),
          schedule_date:
            returnDate && format(returnDate, 'yyy-MM-dd').toString()
        } as BookingRoute
      ]
    } else {
      routes = [
        {
          route_id: departureTravel && departureTravel.route_id,
          schedule_id: parseInt(departureScheduleId),
          schedule_date:
            departureDate && format(departureDate, 'yyy-MM-dd').toString()
        } as BookingRoute
      ]
    }
    return routes
  }
  const handleAddPassenger = (payload: BookingPassenger) => {
    const {
      first_name,
      last_name,
      document_type,
      document_data,
      fare_id
    } = payload
    setPassenger({
      first_name,
      last_name,
      document_data,
      document_type,
      fare_id,
      fare_tax: passengerFareTax,
      routes: routes(),
      id: first_name + document_data
    } as BookingPassenger)
    setPassengers([
      ...passengers,
      {
        first_name,
        last_name,
        document_data,
        document_type,
        fare_id,
        fare_tax: passengerFareTax,
        routes: routes(),
        id: first_name + document_data
      } as BookingPassenger
    ])
    setPassengerCount(prev => prev - 1)
  }
  const handleAddVehicle = (payload: BookingVehicle) => {
    const { brand, model, register_id, fare_id } = payload
    setVehicles([
      ...vehicles,
      {
        brand,
        register_id,
        model,
        fare_id,
        fare_tax: vehicleFareTax,
        routes: routes()
      } as BookingVehicle
    ])
    setVehicleCount(prev => prev - 1)
  }

  const updatePassengers = (payload: BookingPassenger) => {
    const objIndex = passengers.findIndex(p => p.id === passenger.id)

    const {
      first_name,
      last_name,
      document_type,
      document_data,
      fare_id
    } = payload
    const updatedPassengers = [
      ...passengers.slice(0, objIndex),
      {
        first_name,
        last_name,
        document_data,
        document_type,
        fare_id,
        fare_tax: passengerFareTax,
        routes: routes(),
        id: first_name + document_data
      } as BookingPassenger,
      ...passengers.slice(objIndex + 1)
    ]

    setPassengers(updatedPassengers)
  }

  const handleMainContact = (payload: BookingMainContact) =>
    setMainContact(payload)

  const getPassengerById = (id: string) => {
    const resp = passengers.filter(passenger => passenger.id === id).shift()
    resp && setPassenger(resp)
  }

  return (
    <BookingContext.Provider
      value={{
        step,
        setStep,
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
        vehicleCount,
        handleAddPassenger,
        handleAddVehicle,
        passengers,
        handleReturnScheduleId,
        vehicles,
        returnScheduleId,
        updatePassengers,
        mainContact,
        handleMainContact,
        getPassengerById,
        passenger
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
