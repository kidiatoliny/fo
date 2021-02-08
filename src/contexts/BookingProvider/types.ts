import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import { BookingPassenger, BookingVehicle } from '~/store/ducks/bookings/types'
import { Location } from '~/store/ducks/locations/types'
export interface BookingContextData {
  step: number
  setStep: React.Dispatch<React.SetStateAction<number>>
  isLastStep: (lastStep: number) => boolean
  nextStep: () => void
  backStep: () => void
  departureDate: Date | null | undefined
  setDepartureDate: React.Dispatch<React.SetStateAction<MaterialUiPickersDate>>
  returnDate: Date | null | undefined
  setReturnDate: React.Dispatch<React.SetStateAction<MaterialUiPickersDate>>
  departureId: string
  handleDepartureId: (event: React.ChangeEvent<{ value: string }>) => void
  destinationId: string
  handleDestinationId: (event: React.ChangeEvent<{ value: string }>) => void
  locations: Array<Location>
  destination: Array<Location>
  handleDepartureScheduleId: (
    event: React.ChangeEvent<{ value: string }>
  ) => void
  departureScheduleId: string
  isReturnedTravel: boolean
  setReturnedTravel: React.Dispatch<React.SetStateAction<boolean>>
  handlePassengerCount: (event: React.ChangeEvent<{ value: string }>) => void
  handleVehicleCount: (event: React.ChangeEvent<{ value: string }>) => void
  passengerCount: number
  vehicleCount: number
  handleAddPassenger: (payload: BookingPassenger) => void
  handleAddVehicle: (payload: BookingVehicle) => void
  passengers: BookingPassenger[]
  vehicles: BookingVehicle[]
  handleReturnScheduleId: (event: React.ChangeEvent<{ value: string }>) => void
  returnScheduleId: string
}
