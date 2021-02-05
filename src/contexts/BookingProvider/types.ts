export interface BookingContextData {
  step: number
  isLastStep: (lastStep: number) => boolean
  nextStep: () => void
  backStep: () => void
}
