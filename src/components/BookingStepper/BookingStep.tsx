import React from 'react'

export interface BookingStepProps {
  label: string
}
const BookingStep: React.FC<BookingStepProps> = ({ children }) => {
  return <>{children}</>
}

export default BookingStep
