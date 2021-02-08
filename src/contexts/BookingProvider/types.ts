import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import { Location } from '~/store/ducks/locations/types'
import { Passenger } from '~/store/ducks/passengers/types'

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
  handleAddPassenger: (payload: Passenger) => void
  handleAddVehicle: () => void
  passengers: Passenger[]
  handleReturnScheduleId: (event: React.ChangeEvent<{ value: string }>) => void
}
