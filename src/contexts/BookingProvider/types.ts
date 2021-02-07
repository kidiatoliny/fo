import { Location } from '~/store/ducks/locations/types'

export interface BookingContextData {
  step: number
  isLastStep: (lastStep: number) => boolean
  nextStep: () => void
  backStep: () => void

  departureDate: Date | null | undefined
  setDepartureDate: React.Dispatch<
    React.SetStateAction<Date | null | undefined>
  >
  departureId: string
  handleDepartureId: (event: React.ChangeEvent<{ value: string }>) => void
  destinationId: string
  handleDestinationId: (event: React.ChangeEvent<{ value: string }>) => void

  locations: Array<Location>
  destination: Array<Location>
}
